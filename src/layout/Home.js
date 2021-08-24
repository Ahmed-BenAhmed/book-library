import Books from "../components/Books"
import Header from "../components/Header"
// import { booksList } from "./data"
import Hero from "../components/Hero"
import SuggestBookForm from "../components/SuggestBookForm"
import { fetchBooks } from "../api"
import { useEffect , useState} from "react"

const Home = () => {
    const [ books, setBooks ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(async () => {
        await getAllBooks()
        setIsLoading(false);
    },[books])

    const getAllBooks = async () => {
        const allBooks = await fetchBooks();
        setBooks(allBooks);
    }

    return (
        isLoading ? <h1>Loading</h1> : <div className="container">
        <Header />
        <main>
            <Hero />
            <section>
                <h2 className="section-title">Latest Books</h2>
                <Books booksList={books} col={4}/>
            </section>
            <section>
                <h2 className="section-title">Add A book</h2>
                <SuggestBookForm getAllBooks={getAllBooks} />
            </section>
        </main>
    </div>
    )
}

export default Home;