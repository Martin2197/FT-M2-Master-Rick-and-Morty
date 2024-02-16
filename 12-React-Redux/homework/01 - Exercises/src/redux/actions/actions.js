import {ADD_PRODUCT, DELETE_PRODUCT, GET_STORE_NAME} from "../actions/types";
import axios from "axios";


export function addProduct(product){
    return {
        type: ADD_PRODUCT,
        payload: product,
    };
};

export function deleteProduct(id){
    return {
        type: DELETE_PRODUCT,
        payload: id,
    };
};


export function getStoreName () {
    return async (dispatch) => {
            const response = await axios.get('http://localhost:3001/store');
            dispatch({
              type: GET_STORE_NAME,
              payload: response.data,
            });
    return dispatch();
    }
    };