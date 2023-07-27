import { useEffect, useState } from "react";


import {  useNavigate, useParams } from "react-router-dom";
export function MyBook(){
    const navigate=useNavigate()
    const [book,setbook]=useState([])
    const [infoBook,setInfoBook]=useState({})
    const params=useParams()
    async function getbook(subject){
        const url = `https://www.googleapis.com/books/v1/volumes?q=${subject}&filter=ebooks&key=AIzaSyBERYVOt_pqetW6ry2JwTUoJQS0M55oVfg&maxResults=40`;
        try {
          const response = await fetch(url);
          const book = await response.json()
         const OurBooks=book.items.filter((element)=> 
              element.id==params.symbol2 
            )
         console.log(OurBooks[0].volumeInfo.title,"heerere---------------------")
         setbook(prev=>OurBooks[0]);
         setInfoBook({
            title:OurBooks[0].volumeInfo.title,
            description:OurBooks[0].volumeInfo.description,
            img:OurBooks[0].volumeInfo.imageLinks.thumbnail
         })
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
                <img src={infoBook.img}/>
                <h1>{infoBook.title}</h1>
                <p>{infoBook.description}</p>
            </div>
        </div>
    )
}