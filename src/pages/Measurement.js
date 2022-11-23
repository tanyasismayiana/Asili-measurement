import { useState } from "react"

const Measurements = ({setSize,setHide}) =>{
    //alert("pressed");
  const [data,setData] = useState({}) 

  const handleChange = (e) =>{
    const {name,value}=e.target
    setData({...data,[name]:value})

 
  }
  const handleSubmit = () =>{
   const height =((data?.height -65) *4) + 400
   const width =((data?.hips -36) *4) + 400
   setSize({height,width})
   setHide(true)
    
  }

// if(arr[0]==""||arr[0]==null){
//              alert("Please fill out everything");
//              return false;
//     }
// if(arr[0]<25){
// alert("Too short");
// return false;
// }
// if( arr[0]>96){
// alert("Too tall");
// return false;
// }
// for( i =1;i<arr.length;i++){
//             if(arr[i]==""||arr[i]==null){
//                     alert("Please fill out everything");
//                 return false;
// }
// if(arr[i]>60||arr[i]<20){
// alert("Measurements must be between 20 and 60 inches");
// return false;
// }
// }
// var h=((he-65)*4)+400;
// var wit=((hi-36)*4)+400;



return (
<div 
// class="row m-4"
>
    <h3>Enter measurements in inches:</h3>
    <div>
        <label class="m-2">Enter Height: </label>
        <input type="text"
            name="height"
            onChange={handleChange} />
    </div>
    <div>
        <label class="m-2">Enter Shoulder Width: </label>
        <input type="text"
            name="shoulder" 
             onChange={handleChange} />
    </div>
    <div>
        <label class="m-2">Enter Bust: </label>
        <input type="text"
           name="bust"  
            onChange={handleChange} />
    </div>
    <div>
        <label class="m-2">Enter Waist: </label>
        <input type="text"
           name="waist"  
            onChange={handleChange} />
    </div>
    <div>
        <label class="m-2">Enter Hips: </label>
        <input type="text"
           name="hips"  
            onChange={handleChange} />
    </div>
    <button onClick={handleSubmit}>Submit</button>
</div>
);
}
export default Measurements