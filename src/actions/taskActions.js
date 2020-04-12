import axios from 'axios';
import { GET_ALL, LOADING, ERROR } from '../types/taskTypes';

export const getAll = () => async (dispatch) => {
    dispatch({
        type: LOADING
    });
    try {
        const resp = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
        dispatch({
            type: GET_ALL,
            payload: resp.data
        });
    } catch (error){
        dispatch({
            type: ERROR,
            payload: 'Tasks info is wrong, try again later.'
        });
    }

}