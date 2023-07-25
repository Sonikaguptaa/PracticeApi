import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {  useParams } from "react-router-dom";
export function MyBook(){

    const [book,setbook]=useState([])
    const params=useParams()
    async function getbook(subject){
        const url = `http://openlibrary.org/subjects/${subject}.json?`;
       try {
         const response = await fetch(url);
         const book = await response.json()
         console.log(book.works)
         const OurBooks=book.works.map((element)=> {    
            return (
            {img:`https://covers.openlibrary.org/b/id/${element.cover_id}-L.jpg`,
             book:element.title   
            }
            )})
         console.log(OurBooks)
         setbook(prev=>OurBooks);
       } catch (error) {
         console.error(error); 
       } 
       } 
      useEffect(() => {
        getbook(params.symbol)
      }, [])
    return (
        <div>
            <Link to="/"><div>GO BACK</div></Link>
            <div>
                {book.map((element)=>
               { return (
                
                    <div key={element.book}>
                        <img src={element.img} alt="" /> 
                        {element.book}
                    </div>
                )}
                )}
            </div>
        </div>
    )
}