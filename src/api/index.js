import axios from "axios"

const url = "http://localhost:8081/books/";
const api = axios.create({
    baseURL: url
})

export const fetchBooks = async () => {
    try {
        const data = await api.get("/");
        return data.data;
    } catch(e) {
        console.error(e.message);
    }
};


export const createBook = async (book) => {
    try {
        const res = await api.post("/",book);
        console.log(res);
    } catch(e) {
        console.error(e.message)
    }
}