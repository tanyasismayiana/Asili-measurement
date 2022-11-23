import React from "react";
import Popular from "../components/Popular";
import Design from "../components/Design";
// import Homepage from "./Homepage";
import Homepage from "../pages/Homepage";
// import Measurements from "../pages/Measurement";


const Home = () =>{

   return(
    <div>
        <Homepage/>
        <Popular/>
        <Design/>
        {/* <Measurements/> */}

     </div>
   )
}

export default Home