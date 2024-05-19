import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const app = express();
const port = 3000;
import newsRouter from "./src/routes/new.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static("public"));
app.use("/css",express.static(__dirname+ "public/css"));
app.use("/images" , express.static(__dirname +"public/images"))
app.use("/js" , express.static(__dirname +"public/js"))
app.set("views" , "./src/views")
app.set("view engine",'ejs')
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/' , newsRouter);
app.use('/content' , newsRouter)
app.listen(port ,() =>{
    console.log(`Server is running on port ${port}`);

})