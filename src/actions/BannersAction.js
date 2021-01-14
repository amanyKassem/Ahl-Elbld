import axios from "axios";
import CONST from "../consts";


export const getBanners = (lang) => {
    return (dispatch) => {
        axios({
            url         : CONST.url + 'banners',
            method      : 'GET',
            params      : { lang },
        }).then(response => {
            dispatch({type: 'getBanners', payload: response.data});
        });
    }
};
