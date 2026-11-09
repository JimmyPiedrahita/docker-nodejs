import express from "express";
import morgan from "morgan";
import indexRoutes from "./routes/index.js";

const app = express();

app.set("port", 3000);
app.use(morgan("dev"));
app.use("/generateHash", indexRoutes);

export default app;