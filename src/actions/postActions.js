import axios from 'axios';
import { GET_ALL, ERROR } from '../types/postTypes';

export const getAll = () => async (dispatch) => {
    try {
        const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts`);   
        dispatch({
            type: GET_ALL,
            payload: resp.data
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Something is wrong, try again later.'
        })
    }
}