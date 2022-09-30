import { ActionI, ActionTypes, StateI } from "../types"

const initialState: StateI = {
    products: [],
    loading: false,
    error: null
}

export const productReducer = (state: StateI = initialState, action: ActionI): StateI => {
    switch (action.type) {
        case ActionTypes.FETCH_PRODUCTS_LOADING:
            return {loading: true, error: null, products: []}

        case ActionTypes.FETCH_PRODUCTS_SUCCESS:
            return {loading: false, error: null, products: action.payload}

        case ActionTypes.FETCH_PRODUCTS_ERROR:
            return {loading: false, error: action.payload, products: []}
            
        default:
            return state
    }
}