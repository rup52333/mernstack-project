import './App.css';
import NavBar from './Component/NavBar';
import Home from './Component/Home';
import AddStudents from './Component/AddStudents';
import AllStudents from './Component/AllStudents';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
   return (

    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path="/" element={<Home/> }/>
    <Route path="/add"  element={<AddStudents/>} />
    <Route path="/all"  element={<AllStudents/>}  />
    </Routes>
    </BrowserRouter>

  );
}

export default App;

