import axios from 'axios';
import { GET_ALL } from '../types/userTypes';

export const getAll = () => async (dispatch) => {
    try {
        const resp = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        dispatch({
            type: GET_ALL,
            payload: resp.data
        })
    } catch (error){
        console.log("Error: ", error.message)
    }

}