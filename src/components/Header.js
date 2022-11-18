import React from "react";
import { Link } from "react-router-dom";
const Header=()=>{
    return (
        <header>
            <div  className="d-flex flex-row mb-3 header-wrapper justify-content-between align-items-center">
              <Link to='/' ><img className="logo" src="/images/asili.png" alt="logo"/></Link>
            
                <div>
                    <input type='search' />
                    <button className="search-btn"><i className="fa fa-search" aria-hidden="true"></i></button>
                </div>
                <i className="fa fa-bell-o" aria-hidden="true"></i>
                <i className="fa fa-comment-o" aria-hidden="true"></i>
                <button className="login-btn">Login</button>
            </div>
        </header>
    )
}
export default Header