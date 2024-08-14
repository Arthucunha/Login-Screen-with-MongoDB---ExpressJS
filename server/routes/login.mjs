import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
    let collection = await db.collection("User");
    let results = await collection.find({})
      .limit(50)
      .toArray();
  
    res.send(results).status(200);
  });

router.post("/", async (req, res) => {
    try {
      const { username, password } = req.body;
      const collection = await db.collection("User");
  
      const user = await collection.findOne({ username });
  
      if (user && user.password === password) {
        // Autenticação bem-sucedida
        res.status(200).json({ message: "Logado com sucesso!" });
      } else {
        // Credenciais inválidas
        res.status(401).json({ message: "Credenciais inválidas!" });
      }
    } catch (error) {
      console.error("Erro durante o login:", error);
      res.status(500).json({ message: "Erro no servidor!" });
    }
  });
export default router;