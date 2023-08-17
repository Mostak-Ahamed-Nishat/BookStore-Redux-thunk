import {
    ADD_BOOK,
    GET_BOOKS
} from "./actionTypes";

const initialState = {
    books: []
}


const bookReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_BOOK:
            return {
                ...state,
                books: [...state.books, action.payload]
            };
        case GET_BOOKS:
            return {
                ...state,
                books: action.payload
            };
        default:
            return state
    }
}
export default bookReducer