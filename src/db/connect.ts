import { ConnectOptions, connect } from "mongoose";
import config from "config";
import log from "logger";

export const connection = async () => {
  try {
    const dbUri = config.get("dbUri") as string;
    const db = await connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);

    log.info("Database connected");
    return db;
  } catch (error) {
    log.error("db error", error);
    process.exit(1);
  }
};

export default connection;
