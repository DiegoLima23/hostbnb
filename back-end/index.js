import "dotenv/config";
import express from "express";
import UserRoutes from "./domains/users/routes.js";

const app = express();
const {PORT} = process.env;

app.use(express.json())
app.use("/", UserRoutes);

app.listen(PORT, () => {
  console.log(`Servidor esta rodando na porta ${PORT}`)
})

/*
  limadl2023
  iy5ytN2vkkuOyUVv
*/