import mongoose from "mongoose";



const Connection= async (USERNAME,PASSWORD)=>{
    
const URL= `mongodb://${USERNAME}:${PASSWORD}@ac-vbbcnpj-shard-00-00.3v4nnbz.mongodb.net:27017,ac-vbbcnpj-shard-00-01.3v4nnbz.mongodb.net:27017,ac-vbbcnpj-shard-00-02.3v4nnbz.mongodb.net:27017/STUDENTSREGISTRATION?ssl=true&replicaSet=atlas-vulqe7-shard-0&authSource=admin&retryWrites=true&w=majority`


try{

    await  mongoose.connect(URL, { useUnifiedTopology:true, useNewUrlParser: true });
console.log("Database connected Succesfully");
}
catch(error){
console.log("While conncted with database",error);

}


}

export default Connection;




