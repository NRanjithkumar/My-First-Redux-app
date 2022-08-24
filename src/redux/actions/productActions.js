import { ActionTypes } from "../contants/action-types";
import fetchStoreApi from "../../api/fetchStoreApi";

export const fetchProducts = () =>  async (dispatch) => {
        const response= await fetchStoreApi.get("/products"); //This is the middleware thunk used to make async api call
        dispatch({type:ActionTypes.FETCH_PRODUCTS,payload:response.data});
    };

    export const fetchProduct = (id) =>  async (dispatch) => {
        const response= await fetchStoreApi.get(`/products/${id}`); //This is the middleware thunk used to make async api call
        dispatch({type:ActionTypes.SELECTED_PRODUCTS,payload:response.data});
    };

export const setProducts = (products) => {
    return{
    type:ActionTypes.SET_PRODUCTS,
    payload:products,
    };
};

export const selectedProducts = (product) => {
    return{
    type:ActionTypes.SELECTED_PRODUCTS,
    payload:product,
    };
};

export const removedSelectedProducts = () => {
    return{
    type:ActionTypes.REMOVED_SELECTED_PRODUCTS,
    
    };
};