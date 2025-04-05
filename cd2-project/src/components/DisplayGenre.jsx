export default function DisplayGenre({genre, bookData}){
    return(
        <>
        <div>
            <h1>{genre.toUpperCase()}</h1>
            {bookData[genre].map((book,idx)=>(
                <p key={idx}>
                    <i>{book.title}</i>,
                    {book.author},
                    ${book.price.toFixed(2)}
                </p>
            ))}
        </div>
      </>
    )
}