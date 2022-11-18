import React,{useContext, useState, useEffect} from "react";
import {Context}  from '../context/Store';
import FittingRoom from '../components/FittingRoom';

const Selected =()=>{

    const [state, dispatch] = useContext(Context);
    const [data, setData] = useState(state)

    const tryOnClick = () => {
      dispatch({type:"SET",key:"showFittingRoom", payload: true});
    }

    useEffect(()=>{
      //fetchData()
    },[])

    return(
        <section className="selected-page-wrapper">
            <div className="selected-page-container">
                <div className="tabs d-flex flex-row mb-3  justify-content-between align-items-center">
                  {
                    data.map(item=>{
                        return(
                    <div  key={item.id} className="card-wrapper design-card-wrapper">
                            <div className="card-image">
                            <img width='200px' height='300px' src={item.image} alt="images"/>
                            </div>
                            <div className="card-text text-center">
                               <div className="d-flex flex-row mb-3  justify-content-between align-items-center price-wrapper">
                                  <h6 className=" design-text">{item.worn}</h6>
                                  <h6>@{item.price}</h6>
                               </div>
                               <p className="text designer">By:{item.designer}</p>
                            </div>
                            <button className="try-btn" onClick={()=>tryOnClick()}>Try on</button>
                    </div>
                        )
                    })
                  }
                </div>
                <div className="tabs d-flex flex-row mb-3  justify-content-between align-items-center">
                  {
                    data.map(item=>{
                        return(
                    <div  key={item.id} className="card-wrapper design-card-wrapper">
                            <div className="card-image">
                            <img width='200px' height='300px' src={item.image} alt="images"/>
                            </div>
                            <div className="card-text text-center">
                               <div className="d-flex flex-row mb-3  justify-content-between align-items-center price-wrapper">
                                  <h6 className=" design-text">{item.worn}</h6>
                                  <h6>@{item.price}</h6>
                               </div>
                               <p className="text designer">By:{item.designer}</p>
                            </div>
                            <button className="try-btn" onClick={()=>tryOnClick()}>Try on</button>
                    </div>
                        )
                    })
                  }
                </div>
            </div>
            {state.showFittingRoom &&
              <FittingRoom/>
            }
            <button className="fixed-btn" onClick={()=>tryOnClick()}>Fitting room</button>
        </section>
    )
}
export default Selected