import axios from "axios";
import CONST from "../consts";
import {Toast} from "native-base";



export const getPlaces = (lang , token) => {
    return (dispatch) => {
        Places(lang, token, dispatch)
    }
};



export const deletePlace = (lang , id , token ) => {
    return (dispatch) => {
        axios({
            url         : CONST.url + 'delete-place',
            method      : 'POST',
            data        : {id},
            params      : { lang },
            headers     : {Authorization: 'Bearer ' + token}
        }).then(response => {
            Places(lang , token , dispatch);
            Toast.show({
                text        : response.data.message,
                type        : response.data.success ? "success" : "danger",
                duration    : 3000,
                textStyle   : {
                    color       : "white",
                    fontFamily  : 'flatRegular',
                    textAlign   : 'center'
                }
            });
        });

    }
};


const Places = (lang , token , dispatch ) => {
    axios({
        url         : CONST.url + 'places',
        method      : 'POST',
        params      : { lang },
        headers     : {Authorization: 'Bearer ' + token}
    }).then(response => {
        dispatch({type: 'getPlaces', payload: response.data});
    });
};
