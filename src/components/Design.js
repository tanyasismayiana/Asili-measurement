import React,{useContext} from "react";
import {Context} from '../context/Store';

const Design=()=>{

   const [state, dispatch] = useContext(Context)
   const handleClick =(id)=>{
    let item=state.find(itm=>{return itm.id === id })
     if (item){
        window.location.href='/profile'
     }
   }

   return (
    <section className=" design-wrapper">
        <div className="design-container">
          <h4 className="select-text">Select the design type</h4>
          <div className="d-flex flex-row mb-3  justify-content-between align-items-center ">
                {state.map(item=>{
                    return(
                <div  key={item.id} className="card-wrapper design-card-wrapper">
                        <div onClick={()=>handleClick(item.id)} className="card-image pointer">
                        <img width='250px' height='300px' src={item.image} alt="images"/>
                        </div>
                        <div className="card-text text-center">
                            <h6 className="text-white text design-text">{item.worn}</h6>
                        </div>
                </div>
                    )
                })}
         </div>
         </div>
    </section>
 )
}
export default Design