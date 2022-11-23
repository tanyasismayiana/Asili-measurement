import React, {useContext, useState} from "react";
import {Context}  from '../context/Store';
import Measurements from "../pages/Measurement";
import jamsuit from "../images/jumpsuitAvatar.png";

const Header=()=>{
    const[size,setSize]= useState({height:400,width:300}); 
    const [hidemeasurement, setHide] =useState(false)

    const [state, dispatch] = useContext(Context)
    console.log(hidemeasurement)

    
    const tryOnClickOff = () => {
        dispatch({type:"SET",key:"showFittingRoom", payload: false});
    }


    return (
        <div className="fitting-room-wrapper">
          <div className="closeBtn" onClick={()=>tryOnClickOff()}>
              <i className="fa fa-close"></i>
          </div>
          <div className="avatar-wrapper">
          <img src={jamsuit} alt="photo"
             height={size.height} width={size.width}
             />
          </div>

          
          {!hidemeasurement&&<div className="fitting-room-controls">
            <Measurements setSize={setSize} setHide={setHide}/>
             {/* <div className="row">
                <div className="col-lg-5"><div className="fitW">Measurements</div></div>
                <div className="col-lg-1"><div className="fitW">|</div></div>
                <div className="col-lg-5"><div className="fitW">Create a look</div></div>
             </div> */}
          </div>}
        </div>
    )
}
export default Header