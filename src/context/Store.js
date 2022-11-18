import React, {createContext, useReducer} from "react";              
import Reducer from './Reducer';
     
//used for initial testing
const data=[{id:1,image:'/images/pic1.jpg',price:1200,designer:'Chimzi',gender:'woman',type:'Ankara dress',seller:'Jonh Kaveke',worn:'African print'},
  {id:2,image:'/images/pic2.jpg',price:1200,designer:'Chimzi',gender:'woman',type:'Ankara dress',seller:'Jonh Kaveke',worn:'Conteporary wear'},
  {id:3,image:'/images/pic3.jpg',price:1200,designer:'Chimzi',gender:'men',type:'Ankara dress',seller:'Jonh Kaveke',worn:'Oficial wear'},
  {id:4,image:'/images/pic4.jpg',price:1200,designer:'Chimzi',gender:'kids',type:'Ankara dress',seller:'Jonh Kaveke',worn:'Gown'}]
                                                                                                                                
export const Context = createContext(data);                                                                      
                                                                                
const Store = ({children}) => {    

    const [state, dispatch] = useReducer(Reducer, data); 
  
    return (                                                                    
        <Context.Provider value={[state, dispatch]}>                            
            {children}                                                          
        </Context.Provider>                                                     
    )                                                                           
};  

export default Store;