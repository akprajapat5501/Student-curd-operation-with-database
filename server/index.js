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

const PORT = process.env.PORT || 8000;
const URL = process.env.MONGO_URL;


mongoose.connect(URL).then(()=>{
    console.log("Database Connected");

    app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${PORT}`);
});

}).catch(error => console.log(error));

app.use("/api", route)
