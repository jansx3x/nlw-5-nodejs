import express, { response } from "express";

const app = express();

/**
 * GET
 */

app.get("/", (request, response) => {
  return response.json({
    message: "Olá NLW 05!"
  });
});

app.post("/", (request, response) => {
  return response.json({
    message: "Usuário salvo com sucesso!"
  });
});

app.listen(3333, () => console.log("Server is runnig on port 3333"));