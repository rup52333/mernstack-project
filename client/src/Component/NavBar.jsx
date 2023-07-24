import {AppBar,Toolbar,styled} from "@mui/material";
import { NavLink } from 'react-router-dom';



const  Header=styled(AppBar)`
 background:black;

`
const Tabs=styled(NavLink)`
margin-right:80px;
font-size:20px;
text-decoration:none;
color: #FFFFFF;
&:hover {
  color: #FF0000;
}

&.active {
  color: #00FF00; /*  color for the active state */
}
`

const NavBar=()=>{


  return(  
  <Header position="static">
   <Toolbar>
    <Tabs to="/">BengalTechAcademy</Tabs>
    <Tabs to="/add">Add Students</Tabs>
    <Tabs to="/all">All Students</Tabs>
   
   </Toolbar>
  </Header>
  )   
    


}

export default NavBar;

