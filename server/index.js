import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import route from './routes/userRoute.js';
dotenv.config();

const app = express()
app.use(express.json());
app.use(bodyParser.json());
app.use(cors())

const PORT = 8000 || 9000;
const URL = process.env.MONGOURL;
// const HOSTNAME = "127.0.0.1";


mongoose.connect(URL).then(()=>{
    console.log("Database Connected");

    app.listen(PORT, HOSTNAME, ()=>{
        console.log(`server is running on port http://${HOSTNAME}:${PORT}`);
    })

}).catch(error => console.log(error));

app.use("/api", route)
