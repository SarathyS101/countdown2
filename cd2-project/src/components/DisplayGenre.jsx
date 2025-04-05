import {useState, useEffect} from "react"

export default function DisplayGenre({genre, bookData, updateBasket}){
    return(
        <>
        <div>
            <h1>{genre.toUpperCase()}</h1>
            {bookData[genre].map((book,idx)=>(
                <div key ={idx}>
                    <p>
                    <i>{book.title}</i>,
                    {book.author},
                    ${book.price.toFixed(2)}
                </p>
                <button onClick={()=>updateBasket(book)}>Add to Basket</button>
                </div>
                
            ))}
        </div>
      </>
    )
}