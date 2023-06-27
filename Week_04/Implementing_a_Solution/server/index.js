import "dotenv/config";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import { db_url, port } from "./config";
import router from "./routes";
import { errorHandler } from "./middleware/errorHandler";

mongoose
  .connect(db_url)
  .then(() => console.log("[Database] Connection established"))
  .catch((err) =>
    console.error(
      "[Database] An error occurred connectng to the database:",
      err
    )
  );

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.use(errorHandler);

app.listen(port, () => console.log(`[Server] Now listening on port ${port}`));
