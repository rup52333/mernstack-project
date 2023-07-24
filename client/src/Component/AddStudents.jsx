import { FormGroup,FormControl,Typography,InputLabel,Input,styled,Button} from '@mui/material';
import React,{useState} from 'react';
import {addStudent} from '../service/Api';
import { useNavigate } from 'react-router-dom';
const Container = styled(FormGroup)` width:50%;
 margin:5% auto 0 auto;
 &>div{
margin-top:20px; 
}  
 `
const intialValue={
firstname:'',
lastname:'',
email:'',
age:'',
phone:''

}
const AddStudents=()=>{   
const [student, setStudent]=useState(intialValue);
const navigate=useNavigate();
const handleSubmit=async (e)=>{
    e.preventDefault();
   await  addStudent(student);
   navigate('/all');
   }

const onValueChange=(e)=>{

setStudent({...student,[e.target.name]: e.target.value});
}


return(
<Container>
<Typography variant="h4" align="center" mb={3}>Student Registration</Typography>
<FormControl>
<InputLabel>FirstName</InputLabel>
<Input onChange={onValueChange} name="firstname"  />
</FormControl>
<FormControl>
<InputLabel>LastName</InputLabel>
<Input onChange={onValueChange} name="lastname"  />
</FormControl>
<FormControl>
<InputLabel>Email</InputLabel>
<Input onChange={onValueChange}  name="email" />
</FormControl>
<FormControl>
<InputLabel>Age</InputLabel>
<Input onChange={onValueChange}  name="age" />
</FormControl>
<FormControl>
<InputLabel>Phone</InputLabel>
<Input onChange={onValueChange} name="phone"  />
</FormControl>
<FormControl>
<Button variant="contained" onClick={handleSubmit}>Submit</Button>
</FormControl>
</Container>

)


}

export default AddStudents;


