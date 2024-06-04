import "reflect-metadata";
import { DataSource } from "typeorm";
import { CreateUseTable1717462224068 } from "./migrations/1717462224068-CreateUseTable";
import User from "../app/entities/User";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "10.0.0.130",
  port: 3306,
  username: "root",
  password: "",
  database: "project_typeorm",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [CreateUseTable1717462224068],
  subscribers: [],
});
