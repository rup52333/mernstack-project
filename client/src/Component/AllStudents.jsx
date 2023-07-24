import React, {useEffect,useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {styled} from  '@mui/material';
import {getStudent} from '../service/Api.js';



const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
  
`;
const THead=styled(TableHead)`
background:green;
&>th{
  font-size:20px;
  background:#000000;  
  color:#FFFFFF;
}

`
const StyledTableRow = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: #f5f5f5;
  }
  &:hover {
    background-color: #e0e0e0;
  }
`
;



const AllStudents=()=>{
const [students,setStudents]=useState([]);
useEffect(()=>{
getAllStudents();

},[]);

const getAllStudents=async ()=>{

let response=await getStudent();
setStudents(response.data);

}

return(

    <StyledTable>

        <THead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Phone</TableCell>
          </TableRow>
        </THead>
        <TableBody>
          {students.map((x) => (
            <StyledTableRow>
              <TableCell>{x._id}</TableCell>
              <TableCell>{x.firstname}</TableCell>
              <TableCell>{x.lastname}</TableCell>
              <TableCell>{x.email}</TableCell>
              <TableCell>{x.age}</TableCell>
              <TableCell>{x.phone}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      
    </StyledTable>




)



}

export default AllStudents;

