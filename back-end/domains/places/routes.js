import { Router } from "express";
import Place from "./model.js";
import {JWTVerify} from "../../utils/jwt.js";
import { connectDb } from "../../config/db.js";
import { sendToS3, downloadImage, uploadImage } from "./controller.js";


const router = Router();

router.get("/", async (req, res) => {
    connectDb();
      try{
          const placeDocs = await Place.find();
          res.json(placeDocs)
      }catch(error){
        console.error(error)
        res.status(500).json("Deu erro ao encontrar as acomodações", error)
      }

})

router.get("/owner", async (req, res) => {
    connectDb();

  try{
      const userInfo = await JWTVerify(req);

      try{
          const placeDocs = await Place.find({ owner: userInfo._id});
          res.json(placeDocs)
      }catch(error){
        console.error(error)
        res.status(500).json("Deu erro ao encontrar as acomodações", error)
      }

  }catch(error){
    console.error(error)
      res.status(500).json("Deu erro ao encontrar as acomodações", error)

  }
});

router.get("/:id", async (req, res) => {
    connectDb();
    const { id: _id } = req.params;

      try{
          const placeDoc = await Place.findOne({ _id });
          res.json(placeDoc)
      }catch(error){
        console.error(error)
        res.status(500).json("Deu erro ao encontrar as acomodações", error)
      }

});


router.put("/:id", async (req,res) => {
    connectDb();

     const { id: _id } = req.params;
     const { 
      title,
      city,
      photos, 
      description,
      extras,
      perks,
      price,
      checkin, 
      checkout, 
      guests,
    } = req.body;
    try{
     
      const updatedPlaceDoc = await Place.findOneAndUpdate({_id},{
        title,
        city,
        photos, 
        description,
        extras,
        perks,
        price,
        checkin, 
        checkout, 
         guests,

       });
       res.json(updatedPlaceDoc);

    }catch(error){
       console.error(error)
      res.status(500).json("Deu erro ao atualizar a acomodação", error)
    }
})


   router.post("/", async (req,res) => {
    connectDb();
     const { 
      title,
      city,
      photos, 
      description,
      extras,
      perks,
      price,
      checkin, 
      checkout, 
      guests,
    } = req.body;
    try{
      const { _id : owner } = await JWTVerify(req);
      const newPlaceDoc = await Place.create({
        owner,
        title,
        city,
        photos, 
        description,
        extras,
        perks,
        price,
        checkin, 
        checkout, 
         guests,

       });
       res.json(newPlaceDoc);

    }catch(error){
       console.error(error)
      res.status(500).json("Deu erro ao criar um novo lugar", error)
    }
})

router.post("/upload/link", async (req, res) => {
  
  const { link } = req.body;

  try{
    const {filename, fullPath, mimeType} = await downloadImage(link);


   const fileUrl = await sendToS3(filename, fullPath, mimeType);

    res.json(fileUrl);

  }catch(error){
    console.error(error)
    res.status(500).json("Deu erro ao baixar a imagem", error)

  }
 
});

router.post("/upload",   uploadImage().array("files", 10), async(req,res) => {
 const { files } = req;
 const filesPromise = new Promise((resolve, reject) => {

  const fileURLArray = [];

  files.forEach(async (file, index) => {

    const { filename, path, mimetype } = file;
    
    try{
      const fileURL = await sendToS3(filename, path, mimetype);
      fileURLArray.push(fileURL);
      
      
    }catch(error){
       console.error("Deu algum erro ao subir o S3");
       reject(error);
    }
  });

   const idInterval = setInterval(() => {
      if(files.length === fileURLArray.length) {
        clearInterval(idInterval)
        resolve(fileURLArray)}
      }, 100)
    

 }); 
  
    const fileURLArrayResolved = await filesPromise;

    res.json(fileURLArrayResolved);
});

export default router;