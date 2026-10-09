import {useState} from "react";
export function Counter(){

    const [count, setcount]= useState(0);

    return (
        <div>
               <h2>Counter App</h2>

        <button onClick={()=>{
                if (count > 0)
                {  setcount(count-1)}
          }
        }
          
          >-</button>

        <span>{count}</span>
        
        <button onClick={()=>setcount(count+1)}>+</button>
    
        </div>
     

    )
}
