import {
    addBook
} from "../action"

const addBooksThunk = (bookInfo) => {
    return async (dispatch) => {
        const response = await fetch("http://localhost:3000/books", {
            method: "POST",
            body: JSON.stringify(bookInfo),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
        })

        const book = await response.json()

        return dispatch(addBook(book))
    }
}
export default addBooksThunk

