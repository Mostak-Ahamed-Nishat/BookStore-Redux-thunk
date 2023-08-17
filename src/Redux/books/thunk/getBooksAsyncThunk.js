import { getBooks } from "../action"

const getAllBooksThunk = async (dispatch) => {
    const response = await fetch("http://localhost:3000/books")
    const books = await response.json()
    dispatch(getBooks(books))
}
export default  getAllBooksThunk