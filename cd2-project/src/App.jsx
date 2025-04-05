import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DisplayGenre from './components/DisplayGenre'
function App() {
  const[fiction, changeFiction]=useState(true);
  const[nonFiction, changeNon]=useState(true);
  const[children, changeChildren]=useState(true);
  const [basket, setBasket] = useState([]);
  const updateBasket = (book) =>{
    setBasket(prev=>[...prev, book])
  }
    const bookData = {
    "fiction": [
      {"title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "price": 10.00},
      {"title": "1984", "author": "George Orwell", "price": 8.50},
      {"title": "The Catcher in the Rye", "author": "J.D. Salinger", "price": 9.80}
    ],
    "non-fiction": [
      {"title": "Sapiens: A Brief History of Humankind", "author": "Yuval Noah Harari", "price": 15.00},
      {"title": "In Cold Blood", "author": "Truman Capote", "price": 12.00},
      {"title": "The Diary of a Young Girl", "author": "Anne Frank", "price": 7.00}
    ],
    "children": [
      {"title": "Charlotte's Web", "author": "E.B. White", "price": 5.00},
      {"title": "The Gruffalo", "author": "Julia Donaldson", "price": 6.00},
      {"title": "Where the Wild Things Are", "author": "Maurice Sendak", "price": 8.00}
    ]
  };  

  return (
    <>
       <h1>Online Bookstore</h1>
       <span>
        <button onClick={()=>changeFiction(!fiction)}>{fiction?"Hide Fiction":"Unhide Fiction"}</button>
        <button onClick={()=>changeNon(!nonFiction)}>{nonFiction?"Hide Non-Fiction":"Unhide Non-Fiction"}</button>
        <button onClick={()=>changeChildren(!children)}>{children?"Hide Children":"Unhide Children"}</button>
       </span>
        <div>
          {fiction && <DisplayGenre genre="fiction" bookData={bookData} updateBasket={updateBasket}/>}
          {nonFiction && <DisplayGenre genre="non-fiction" bookData={bookData} updateBasket={updateBasket}/>}
          {children && <DisplayGenre genre="children" bookData={bookData} updateBasket={updateBasket}/>}
        </div>
        <div>
          <h1>Basket</h1>
          {basket.map((book,idx)=>(
              <div key={idx}>
                   <p>
                    <i>{book.title}</i>,
                    {book.author},
                    ${book.price.toFixed(2)} 
                  </p>
                  <button onClick={()=>{
                    setBasket((prev)=> prev.filter((_,i)=>i!==idx))
                  }}>Unadd</button>
              </div>
            
            ))}
        </div>
    </>
   
    
  )
}

export default App
