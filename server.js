import express from 'express';
import dotenv from 'dotenv';
import Connection from './Database/db.js';
import Routes from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser'; 


const app=express();

dotenv.config();
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors());
app.use(`/`,Routes);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const PORT=3000;
Connection(USERNAME,PASSWORD);


app.listen(PORT,()=>{

    console.log(`Server is running successfully on PORT ${PORT}`);
});


