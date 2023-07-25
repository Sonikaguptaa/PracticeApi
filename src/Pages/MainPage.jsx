import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {  useParams } from "react-router-dom";
export function MainPage(){

    const [data,setData]=useState([])
    const params=useParams()
    const navigate=useNavigate() 
    async function getData(subject){
        const url = `http://openlibrary.org/subjects/${subject}.json?`;
       try {
         const response = await fetch(url);
         const data = await response.json()
         console.log(data.works)
         const OurBooks=data.works.map((element)=> {    
            return (
            {img:`https://covers.openlibrary.org/b/id/${element.cover_id}-L.jpg`,
             book:element.title ,
             id:element.lending_edition
  
            }
            )})
         console.log(OurBooks)
         setData(prev=>OurBooks);
       } catch (error) {
         console.error(error); 
       } 
       } 
       
      useEffect(() => {
        getData(params.symbol)
      }, [])
    return (
        <div className="containerOfConatainer">
            <Link to="/"><div>GO BACK</div></Link>
            <div className="containerMain">
                {data.map((element)=>
               { return (
                    
                    <div key={element.book} className="oneBook">
                        <button onClick={(event)=>{
                            navigate(`/${params.symbol}/${event.target.id}`)
                        }}>
                          
                           <p> {element.book}</p> 
                           <img src={element.img} id={element.id} /> 
                         </button>
                    </div>
                )}
                )}
            </div>
        </div>
    )
}