import { config } from "dotenv";
import type  {Request, Response} from "express";
import express from "express";

config();

const app = express();


app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Ria!");
});


export default app;