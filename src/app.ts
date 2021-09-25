import express from "express";
import config from "config";
import log from "./logger";
import { connection } from "./db/connect";
import { routes } from "../routes";

const PORT = config.get("port") as number;
const HOST = config.get("host") as string;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, HOST, () => {
  log.info(`Server listening at http://${HOST}:${PORT}`);
  connection();
  routes(app);
});
