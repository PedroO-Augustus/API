import express from "express";

const router = express.Router();

router.get('/client', (req, res) => res.status(200).send("Hello world! Router funcionando!"));

export { router };