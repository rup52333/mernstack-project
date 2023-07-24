import axios from 'axios';


const URL="";

export const addStudent=async (data)=>{

try{

    return  await axios.post(`${URL}/add`,data)
   
}
catch(error){
console.log("while calling add student Api",error);

}


}
export const getStudent=async ()=>{

try{

    return  await axios.get(`${URL}/all`)
   
}
catch(error){
console.log("while calling get student Api",error);

}


}




