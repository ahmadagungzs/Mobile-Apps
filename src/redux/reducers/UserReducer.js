// reducers : pure function that taking some input and output and catch the actions

export const userReducer = (state={}, action) => {
    switch(action.payload){
        case 'DO_LOGIN':
            return {
                ...state,
                user: action.payload,
            };
        case 'FETCH_PRODUCTS':
            return {
                ...state,
                products: action.payload,
            };
        case 'ON_ERROR':
            return {
            ...state,
            appError: action.payload,
            };
        default:
            return state;
    }
};