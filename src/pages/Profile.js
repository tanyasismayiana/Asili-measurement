import React,{useContext,useState, useEffect} from "react";
import {Context}  from '../context/Store';
import FittingRoom from '../components/FittingRoom';

const Profile = ()=>{
    const [state, dispatch] = useContext(Context);
    const [data, setData] = useState(state)

    const tryOnClick = () => {
      dispatch({type:"SET",key:"showFittingRoom", payload: true});
    }

    const [active,setActive]=useState('tab1')
    const handleActive=()=>{
        setActive('tab1')
    }
    const handleActive1=()=>{
        setActive('tab2')
    }
    const handleActive2=()=>{
        setActive('tab3')
    }

    useEffect(()=>{
        //fetchData()
    },[])

    return(
        <section className="designer-wrapper mb-5 pb-5">
           <div className="banner-wrapper">
               <div className="banner d-flex flex-row mb-3  justify-content-between align-items-center">
                 <div className="banner-img">
                    <img src="/images/chimzi.png" alt="photo"/>
                 </div>
                 <div className="banner-details">
                      <h3>Chimzi Okelo</h3>
                      <h5>Custom made design</h5>
                      <h6>CEO of Zalondo Africa</h6>
                 </div>
                 <div className="banner-media">
                    <ul>
                        <li><i className="fa fa-instagram" aria-hidden="true"></i> Chimzi_Okelo</li>
                        <li><i className="fa fa-twitter" aria-hidden="true"></i> Chimzi_Okelo</li>
                        <li><i className="fa fa-linkedin-square" aria-hidden="true"></i> Chimzi_Okelo</li>
                        <li><i className="fa fa-map-marker" aria-hidden="true"></i> Chimzi_Okelo</li>
                        <li><i className="fa fa-phone" aria-hidden="true"></i> Chimzi_Okelo</li>
                    </ul>
                 </div>
               </div>
           </div>

        <div className="btn-wrapper mb-5">
            <button onClick={handleActive} className={active==='tab1'?'active-btn':''}>Men</button>
            <button onClick={handleActive1} className={active==='tab2'?'active-btn':''}>Woman</button>
            <button onClick={handleActive2} className={active==='tab3'?'active-btn':''}>Kids</button>
        </div> 
       
        <div className="profile-data d-flex flex-row mb-5  justify-content-between align-items-center">
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
        
        <div className="profile-data other-design d-flex flex-row mt-5 mb-3  justify-content-between align-items-center">
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
        {state.showFittingRoom &&
            <FittingRoom/>
        }
        <button className="fixed-btn" onClick={()=>tryOnClick()}>Fitting room</button>
        </section>
    )
}
export default Profile