import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {  useParams } from "react-router-dom";
export function MainPage(){

    const [data,setData]=useState([])
    const params=useParams()
    async function getData(subject){
        const url = `http://openlibrary.org/subjects/${subject}.json?`;
       try {
         const response = await fetch(url);
         const data = await response.json()
         console.log(data.works)
         const OurBooks=data.works.map((element)=> {    
            return (
            {img:`https://covers.openlibrary.org/b/id/${element.cover_id}-L.jpg`,
             book:element.title   
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
        <div>
            <Link to="/"><div>GO BACK</div></Link>
            <div>
                {data.map((element)=>
               { return (
                    
                    <div key={element.book}>
                        <Link to={`/${params.symbol}/${element.book}`}>
                        <img src={element.img} alt="" /> 
                        {element.book}
                        </Link>
                        
                    </div>
                )}
                )}
            </div>
        </div>
    )
}