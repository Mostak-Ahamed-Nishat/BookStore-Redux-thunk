import {
    EditBookPostByID,
} from "../action"

const editBookAsyncThunk = (id, bookInfo) => {

    return async (dispatch) => {

        console.log(typeof(bookInfo));

        const response = await fetch(`http://localhost:3000/books/${id}`, {
            method: 'PUT',
            body: JSON.stringify(bookInfo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        const book = await response.json()

        console.log(typeof(book));

        dispatch(EditBookPostByID(id, book))
    }
}
export default editBookAsyncThunk