import {
    ADD_BOOK,
    DELETE_BOOK,
    EDIT_BOOKS_POST,
    GET_BOOKS,
    GET_EDIT_BOOKS
} from "./actionTypes"


//Get Books from db
export const getBooks = (books) => {
    return {
        type: GET_BOOKS,
        payload: books
    }
}


//Add Books to DB
export const addBook = (book) => {
    return {
        type: ADD_BOOK,
        payload: book
    }
}


// Get the book id that have to be updated
export const getEditBookByID = (book) => {
    return {
        type: GET_EDIT_BOOKS,
        payload: book
    }
}

// Update the books
export const EditBookPostByID = (id, book) => {
    return {
        type: EDIT_BOOKS_POST,
        payload: {
            id,
            book
        }
    }
}

// Get the book id that have to be updated
export const deleteBook = (id) => {
    console.log(id);
    return {
        type: DELETE_BOOK,
        payload: id
    }
}