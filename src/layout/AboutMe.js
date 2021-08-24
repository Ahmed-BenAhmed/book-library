import Header from "../components/Header"
import UserStatistics from "../components/UserStatistics"
import Books from "../components/Books"
import { booksList } from "./data"

const AboutMe = () => {
    return(
        <div className="parent">
            <Header />
            <main className="container">
                <div className="row">
                    <div className="col-sm-3 d-flex">
                        <UserStatistics />
                    </div>
                    <div className="col-sm-9 books">
                        <Books booksList={booksList} col={6} />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AboutMe;