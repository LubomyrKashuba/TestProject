import { ActionTypes, AddProductAction, DeleteProductAction, EditProductAction } from "../types";
import { call, put, takeEvery } from "redux-saga/effects";
import { setError, setLoading, setProducts } from "./actions";
import axios from "axios";
import { ProductI } from "../../types/product";
import { InputsI } from "../../components/product-form/ProductForm";

const fetchProducts = async (payload: string) => {
    const {data} = await axios.get<ProductI[]>(`http://localhost:5000/products`, {params: { sort: payload } } )
    return data
}

const postProduct = async (payload: InputsI) => {
    const {data} = await axios.post("http://localhost:5000/products", payload)
    return data
}

const removeProduct = async (payload: string) => {
    const {data} = await axios.delete(`http://localhost:5000/products/:${payload}`)
    return data
}

const putProduct = async (id: string, payload: InputsI) => {
    const {data} = await axios.put(`http://localhost:5000/products/:${id}`, payload)
    return data
}

function* getProducts({payload}:any) {
    try {
        yield put(setLoading())
        const products:ProductI[] = yield call(fetchProducts, payload)
        yield put(setProducts(products)) 
    } catch (error) {
        yield put(setError(String(error) || "An unknown error occurred"))
    }
}

function* addProduct({payload}: AddProductAction) {
    try {
        yield put(setLoading())
        yield call(postProduct, payload)
        yield call(getProducts, '')
    } catch (error) {
        yield put(setError(String(error) || "An unknown error occurred"))
    }
}

function* deleteProduct({payload}: DeleteProductAction) {
    try {
        yield put(setLoading())
        yield call(removeProduct, payload)
        yield call(getProducts, '')
    } catch (error) {
        yield put(setError(String(error) || "An unknown error occurred"))
    }   
}

function* editProduct({payload, id}: EditProductAction) {
    try {
        yield put(setLoading())
        yield call(putProduct, id, payload)
        yield call(getProducts, '')
    } catch (error) {
        yield put(setError(String(error) || "An unknown error occurred"))
    }
}

export function* productWatcher() {
    yield takeEvery(ActionTypes.FETCH_PRODUCTS, getProducts)
    yield takeEvery(ActionTypes.ADD_PRODUCT, addProduct)
    yield takeEvery(ActionTypes.DELETE_PRODUCT, deleteProduct)
    yield takeEvery(ActionTypes.EDIT_PRODUCT, editProduct)
}
