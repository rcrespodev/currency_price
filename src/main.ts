import * as dotenv from "dotenv";
import {join} from "path";
import {HttpServer} from "./httpServer/httpServer";

dotenv.config();

export const httpServer = new HttpServer({
  files:
      {public: join(__dirname, '..', 'public'), views: join(__dirname, '..', 'views'), partials: ""},
  host: process.env.API_HOST,
  port: parseInt(process.env.API_PORT)
})

httpServer.Run()