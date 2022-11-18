import React, {useContext} from "react";
import {Context}  from '../context/Store';

const Header=()=>{

    const [state, dispatch] = useContext(Context)
    
    const tryOnClickOff = () => {
        dispatch({type:"SET",key:"showFittingRoom", payload: false});
    }

    return (
        <div className="fitting-room-wrapper">
          <div className="closeBtn" onClick={()=>tryOnClickOff()}>
              <i className="fa fa-close"></i>
          </div>
          <div className="avatar-wrapper">
             <img src="/images/woman_avatar.png" alt="photo"/>
          </div>
          <div className="fitting-room-controls">
             {/* <div className="row">
                <div className="col-lg-5"><div className="fitW">Measurements</div></div>
                <div className="col-lg-1"><div className="fitW">|</div></div>
                <div className="col-lg-5"><div className="fitW">Create a look</div></div>
             </div> */}
          </div>
        </div>
    )
}
export default Header