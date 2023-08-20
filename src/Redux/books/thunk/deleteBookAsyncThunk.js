import {
    deleteBook,
} from "../action"

const deleteBookAsyncThunk = (id) => {
    return async (dispatch) => {
       await fetch(`http://localhost:3000/books/${id}`, {
            method: "DELETE"
        })
        dispatch(deleteBook(id))
    }
}
export default deleteBookAsyncThunk