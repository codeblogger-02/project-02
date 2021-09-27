//env variables
require("dotenv").config();

//libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";

const wireframe = express();

//microservice Routes
import Image from "./API/image"

//database connection 


// applications middlewares
wireframe.use(express.json());
wireframe.use(express.urlencoded({extended:false}));
wireframe.use(helmet()); //for security purpose
wireframe.use(cors());   //for security purpose


//Application Route



wireframe.get("/", (req,res) => res.json({message:"setup success"}));

wireframe.listen(4000, () => console.log("Server is Runnig🚀"));

