import { useEffect, useState } from "react";


import {  useNavigate, useParams } from "react-router-dom";
export function MyBook(){
    const navigate=useNavigate()
    const [book,setbook]=useState([])
    const params=useParams()
    async function getbook(subject){
        const url = `http://openlibrary.org/subjects/${subject}.json?`;
       try {
         const response = await fetch(url);
         const book = await response.json()
         console.log(book.works)
         const OurBooks=book.works.filter((element)=> 
              element.lending_edition==params.symbol2 
            )
         console.log(OurBooks[0],"heerere---------------------")
         setbook(prev=>OurBooks[0]);
       } catch (error) {
         console.error(error); 
       } 
       } 
      useEffect(() => {
        getbook(params.symbol)
      }, [])
    return (
        <div>
            <button onClick={()=>navigate(`/${params.symbol}`)}>Go Back</button>
            <div>
                
               {console.log(book)}

                
                    {<div>
                    <img src={`https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`}/>
                    <p>{book.title}</p>
                    <p>first_publish_year :
                      {book.first_publish_year}</p>
                    <p></p>
                    </div>}

            </div>
        </div>
    )
}