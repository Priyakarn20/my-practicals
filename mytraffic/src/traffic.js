import React,{useState} from "react";
import './App.css'

function Trafficlight (){
    const [acolor,setAcolor]=useState("");
    function handleClick (color){
setAcolor(color);
    }

    return(
        <>
        <div className="container">
         <div className="container1">
            <button id="i1" onClick={()=> handleClick("red") }
        style={{opacity: acolor === "red" ? 1 : 0.5}}
        > 
                </button>
         </div>
            <div className="container2">
            <button id="i2" onClick={()=> handleClick("yellow")}
              style={{opacity: acolor === "yellow" ? 1 : 0.5}}
           >
             </button>
            </div>
                <div className="container3">
                <button id="i3" onClick={()=> handleClick("green")}
                   style={{opacity: acolor === "green" ? 1 : 0.5}}
                >
             </button>
                </div>
               
            </div>     
    
        </>
    )
}
export default Trafficlight;