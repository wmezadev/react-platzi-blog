import axios from 'axios';
import { GET_ALL } from '../types/userTypes';

export const getAll = () => async (dispatch) => {
    const resp = await axios.get(`https://jsonplaceholder.typicode.com/users`);

    dispatch({
        type: GET_ALL,
        payload: resp.data
    })
}