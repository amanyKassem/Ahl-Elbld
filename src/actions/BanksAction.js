import axios from "axios";
import CONST from "../consts";
import {Toast} from "native-base";

export const getBanks = (lang) => {
    return (dispatch) => {
        axios({
            url         : CONST.url + 'banks',
            method      : 'GET',
            params      : {lang},
        }).then(response => {
            dispatch({type: 'getBanks', payload: response.data});
        });
    }
};


export const sendTrans = (lang , bank_name , account_name ,account_number , total , bank_id , image , token, navigation ) => {
    return async (dispatch) => {
        await axios({
            url: CONST.url + 'send-transfer',
            method      : 'POST',
            params      : { lang },
            headers     : {Authorization: 'Bearer ' + token},
            data        : { bank_name , account_name ,account_number , total , bank_id , image  }
        }).then(response => {

            if (response.data.success) {
                navigation.navigate('home');
            }

            Toast.show({
                text        : response.data.message,
                type        : response.data.success ? "success" : "danger",
                duration    : 3000,
                textStyle       : {
                    color           : "white",
                    fontFamily      : 'flatRegular',
                    textAlign       : 'center'
                }
            });

        })
    }
}
