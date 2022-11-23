import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Selected from "../pages/Selected";
import Homepage from "../pages/Homepage";
import Measurement from "../pages/Measurement";



const Links=()=>{
 return(
    <div>
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/selected" exact element={<Selected/>}/>
            <Route path="/profile" exact element={<Profile/>}/>
            <Route path="/Homepage" exact element={<Homepage/>}/>
            <Route path="/Measurement" exact element={<Measurement/>}/>


        </Routes>
 </div>
 )
}
export default Links