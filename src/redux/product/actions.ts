import { InputsI } from "../../components/product-form/ProductForm";
import { ProductI } from "../../types/product";
import { ActionTypes } from "../types";

export const setProducts = (payload: ProductI[]) => ({type: ActionTypes.FETCH_PRODUCTS_SUCCESS, payload})
export const setLoading = () => ({type: ActionTypes.FETCH_PRODUCTS_LOADING})
export const setError = (payload: string) => ({type: ActionTypes.FETCH_PRODUCTS_ERROR, payload})
export const getProducts = (payload: string) => ({type: ActionTypes.FETCH_PRODUCTS, payload})
export const addProduct = ( payload: InputsI) => ({type: ActionTypes.ADD_PRODUCT, payload})
export const deleteProduct = (payload: string) => ({type: ActionTypes.DELETE_PRODUCT, payload})
export const editProduct = (id: string, payload: InputsI) => ({type: ActionTypes.EDIT_PRODUCT, payload, id})