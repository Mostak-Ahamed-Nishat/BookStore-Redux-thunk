import {
    ADD_BOOK,
    GET_EDIT_BOOKS,
    GET_BOOKS,
    EDIT_BOOKS_POST,
    DELETE_BOOK
} from "./actionTypes";

const initialState = {
    books: [],
    editBook: {}
}


const bookReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_BOOK:
            return {
                ...state,
                books: [...state.books, action.payload]
            };

        case GET_EDIT_BOOKS:
            return {
                ...state,
                editBook: action.payload
            }

            case GET_BOOKS:
                return {
                    ...state,
                    books: action.payload
                };

            case EDIT_BOOKS_POST:
                // eslint-disable-next-line no-case-declarations
                let indexToUpdate = state.books.findIndex((book) => book.id === action.payload.id)
                // eslint-disable-next-line no-case-declarations
                let previousBookList = [...state.books]
                if (indexToUpdate !== -1) {
                    previousBookList[indexToUpdate] = action.payload.book
                }
                return {
                    ...state,
                    books: previousBookList
                };

            case DELETE_BOOK:
                // eslint-disable-next-line no-case-declarations
                const updatedBooks = state.books.filter(book => book.id !== action.payload)
                return {
                    ...state,
                    books: updatedBooks
                };

            default:
                return state
    }
}
export default bookReducer