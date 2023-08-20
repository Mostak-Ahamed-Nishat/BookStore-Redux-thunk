import { getEditBookByID } from "../action"

const editBookAsyncThunk = (id) => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:3000/books/${id}`)
        const book = await response.json()
        dispatch(getEditBookByID(book))
    }
}
export default editBookAsyncThunk