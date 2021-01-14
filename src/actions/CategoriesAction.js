import axios from "axios";
import CONST from "../consts";


export const getCategories = (lang) => {
    return (dispatch) => {
        axios({
            url         : CONST.url + 'categories',
            method      : 'GET',
            params      : { lang },
        }).then(response => {
            dispatch({type: 'getCategories', payload: response.data});
        });
    }
};

export const getProviders = (lang , category_id) => {
    return (dispatch) => {
        axios({
            url         : CONST.url + 'providers',
            method      : 'POST',
            params      : { lang},
            data        : { category_id }
        }).then(response => {
            dispatch({type: 'getProviders', payload: response.data});
        });
    }
};


export const getProviderDetails = (lang , id) => {
    return (dispatch) => {
        axios({
            url         : CONST.url + 'provider-details',
            method      : 'POST',
            params      : { lang},
            data        : { id }
        }).then(response => {
            dispatch({type: 'getProviderDetails', payload: response.data});
        });
    }
};
