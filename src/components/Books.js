
const Books = ({booksList,col}) => {
    return(
        <div className="book-list">
            <div className="row">
            {booksList.map(book => (
                <div className={"col-sm-"+col} key={book._id}>
                    <div className="book-card"
                     style={{backgroundImage: `linear-gradient(45deg,${book.coverColors[0]},${book.coverColors[1]})`}}
                     >
                        <div className="row">
                            <div className="col-sm-5">
                                <div className="book-cover">
                                    <img src={book.bookCover} alt={book.bookTitle} />
                                </div>
                            </div>
                            <div className="col-sm-7">
                                <div className="book-details">
                                    <h3>{book.bookTitle}</h3>
                                    <h5>By {book.bookAuthor}</h5>
                                    <ul className="book-categories">
                                        {book.bookCategories.map((category,i) =>
                                            <li className="book-category" key={"category"+i} >
                                                {category}
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Books;