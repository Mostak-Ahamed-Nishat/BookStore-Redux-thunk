import {
    FEATURED_BOOKS
} from "./actionType";

const initialState = {
    filter: "All"
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FEATURED_BOOKS:
            return {
                ...state,
                filter: action.payload
            }
            default:
                return state
    }
}

export default filterReducer