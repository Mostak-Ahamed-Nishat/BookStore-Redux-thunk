import {
    ADD_BOOK, GET_BOOKS
} from "./actionTypes"

export const addBook = (book) => {
    return {
        type: ADD_BOOK,
        payload: book
    }
}

export const getBooks = (books) => {
    return {
        type: GET_BOOKS,
        payload: books
    }
}