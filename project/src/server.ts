import "reflect-metadata"; //1-permite trabalharmos com a ideia de anotations
import * as express from "express";
import * as cors from "cors"; //2- permite que as requisições feita atraves do front end via react sejam aceitas
import { AppDataSource } from "./database/data-source";
import routers from "./app/routes/routes";
const app = express();

app.use(cors()); //3- habilita o cors
app.use(express.json());

app.use(routers);

AppDataSource.initialize().then(async () => {
  console.log("database ok");
  app.listen(3333, () => {
    console.log(`Servidor rodando na porta 3333`);
  });
});
