import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Selected from "../pages/Selected";

const Links=()=>{
 return(
    <div>
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/selected" exact element={<Selected/>}/>
            <Route path="/profile" exact element={<Profile/>}/>
        </Routes>
 </div>
 )
}
export default Links