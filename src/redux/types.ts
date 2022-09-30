import { InputsI } from "../components/product-form/ProductForm"
import { ProductI } from "../types/product"

export interface StateI {
    products: ProductI[],
    loading: boolean,
    error: null | string
}

export enum ActionTypes {
    FETCH_PRODUCTS_LOADING = "FETCH_PRODUCTS_LOADING",
    FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
    FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR",
    FETCH_PRODUCTS = "FETCH_PRODUCTS",
    ADD_PRODUCT = "ADD_PRODUCT",
    DELETE_PRODUCT = "DELETE_PRODUCT",
    EDIT_PRODUCT = "EDIT_PRODUCT"
}

interface FetchProductsLoadingAction {
    type: ActionTypes.FETCH_PRODUCTS_LOADING
}

interface FetchProductsSuccsessAction {
    type: ActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: ProductI[]
}

interface FetchProductsErrorAction {
    type: ActionTypes.FETCH_PRODUCTS_ERROR,
    payload: string
}

export interface AddProductAction {
    type: ActionTypes.ADD_PRODUCT,
    payload: InputsI
}

export interface DeleteProductAction {
    type: ActionTypes.DELETE_PRODUCT,
    payload: string
}

export interface FetchProductsAction {
    type: ActionTypes.FETCH_PRODUCTS,
    payload?: string
}

export interface EditProductAction {
    type: ActionTypes.EDIT_PRODUCT,
    payload: InputsI,
    id: string
}

export type ActionI = FetchProductsLoadingAction | FetchProductsSuccsessAction | FetchProductsErrorAction