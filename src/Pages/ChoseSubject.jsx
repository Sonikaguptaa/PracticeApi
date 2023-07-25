
import { useState } from "react"
import { Link } from "react-router-dom"
export function ChoseSubject(){
   const subjects = ["select your subject",'arts','animals','fiction','science&mathematics','history','health']

   const [subject,setSubject]=useState("")
  
   const handleOptionChange = (event) => {
      const selectedValue = event.target.value;
      setSubject(selectedValue);
    };

    return (
      <div> 
         <select value={subject} onChange={handleOptionChange}>
            {subjects.map((sub)=>{
            
              return(<option key={sub}>{sub}</option>)
           })}
        </select>
        <Link to={`/${subject}`}> 
            <button  > Get Your Books</button>
        </Link>
     </div>
       
    )
}