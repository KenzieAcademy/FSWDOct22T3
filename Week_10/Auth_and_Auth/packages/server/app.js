import "dotenv/config";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import keys from "./config/keys";
import router from "./routes";

mongoose
  .connect(keys.db.url)
  .then(() => console.log("[Database] Connection established"))
  .catch((err) =>
    console.log("[Database] Connection could not be established: ", err)
  );

const app = express();

app.use(
  cors({
    origin: [keys.app.clientHost],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser(keys.auth.cookieSecret));

app.use("/api", router);

app.listen(3001, () => console.log("[Server] Now listening on port 3001"));
