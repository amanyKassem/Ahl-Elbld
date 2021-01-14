const INITIAL_STATE = { categories : [], providers : [] ,  providerDetails : null, loader : false };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'getCategories':
            return {
                categories: action.payload.data,
                loader: action.payload.success
            };
        case 'getProviders':
            return {
                providers: action.payload.data,
                loader: action.payload.success
            };
        case 'getProviderDetails':
            return {
                providerDetails: action.payload.data,
                loader: action.payload.success
            };
        default:
            return state;
    }
};
