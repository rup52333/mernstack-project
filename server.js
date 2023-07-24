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

const PORT=process.env.PORT || 3000;

const URL=process.env.MONGODB_URL || `mongodb://${USERNAME}:${PASSWORD}@ac-vbbcnpj-shard-00-00.3v4nnbz.mongodb.net:27017,ac-vbbcnpj-shard-00-01.3v4nnbz.mongodb.net:27017,ac-vbbcnpj-shard-00-02.3v4nnbz.mongodb.net:27017/STUDENTREGISTRATION?ssl=true&replicaSet=atlas-vulqe7-shard-0&authSource=admin&retryWrites=true&w=majority`
Connection(URL);

if(process.env.NODE_ENV==='production')
{
app.use(express.static(`client/build`));

}

app.listen(PORT,()=>{

    console.log(`Server is running successfully on PORT ${PORT}`);
});


