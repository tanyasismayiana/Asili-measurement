import React,{useContext} from "react";
import {Context}  from '../context/Store';

const Popular = ()=>{
    const [state, dispatch] = useContext(Context);

    const handleNext =(id)=>{
     let item=state.find(itm=>{return itm.id === id })
     if (item){
        window.location.href='/selected'
     }
    }

    return(
        <section>
            <div className="popular-wrapper">
                <h4 className="mb-3">Popular designs</h4>
                <div className="d-flex flex-row mb-5 pb-5 justify-content-between align-items-center">
                <i className="fa fa-angle-left" aria-hidden="true"></i>    
                <i className="fa fa-angle-right" aria-hidden="true"></i>
                    {state.map((item, index)=>{
                        return(
                        <div onClick={()=>handleNext(item.id)} key={item.id} className="card-wrapper pointer">
                            <div className="card-image">
                            <img width='250px' height='300px' src={item.image} alt="images"/>
                            </div>
                            <div className="card-text text-center">
                                <h5 className="text">Jonh Kaveke {index}</h5>
                                <h6 className="text">Ankara dress{index}</h6>
                            </div>
                    </div>
                        )
                    })}
                </div>
            </div>
        </section>
   )
}
export default Popular