import axios from 'axios';

// actions : simply dispatch object (key, value)
export const onUserLogin = ({ email, password}) => { // kinda web service
    return async (dispatch) => {

        try{
            const response = await axios.post('https://netflix-example.herokuapp.com/user/mock-login',
            { email, password }
            );
            dispatch({ type: 'DO_LOGIN', payload: response.data });
        } catch (error){
            dispatch({ type: 'ON_ERROR', payload: error });

        }
   };
};

export const oonFetchProduct = () => { // kinda web service
    return async (dispatch) => {

        try{
            const response = {data: [
                {name: 'Acer Aspire 3', price: 'Rp9000000'},
                {name: 'iPhone', price: 'Rp7000000'},
                {name: 'Nexus', price: 'Rp5000000'},
                
            ]}
            dispatch({ type: 'FETCH_PRODUCTS', payload: response.data });
        } catch (error){
            dispatch({ type: 'ON_ERROR', payload: error });

        }
   };
};