import {
    FEATURED_BOOKS
} from "./actionType"

export const getFeaturedBooks = (filter) => {
    return {
        type: FEATURED_BOOKS,
        payload: filter
    }
}