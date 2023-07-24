import mongoose from "mongoose";



const Connection= async (URL)=>{

try{
    await  mongoose.connect(URL, { useUnifiedTopology:true, useNewUrlParser: true });
console.log("Database connected Succesfully");
}
catch(error){
console.log("While conncted with database",error);

}


}

export default Connection;




