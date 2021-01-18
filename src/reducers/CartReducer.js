const INITIAL_STATE = {cart : [] , cartDetails:null ,validationCoupon:0 , loader : false };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'getCart':
            return {
                cart: action.payload.data,
                loader: action.payload.success
            };
        case 'getCartDetails':
            return {
                cartDetails: action.payload.data,
                loader: action.payload.success
            };
        case 'ValidationCoupon':
            return {
                ...state,
                validationCoupon: action.payload.data.discount,
                loader: action.payload.success
            };
        default:
            return state;
    }
};
