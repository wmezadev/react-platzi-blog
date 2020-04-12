import axios from 'axios';
import { GET_ALL, LOADING, ERROR, SET_USER_ID, SET_TITLE, TASK_SAVED } from '../types/taskTypes';

export const getAll = () => async (dispatch) => {
    dispatch({
        type: LOADING
    });
    try {
        const resp = await axios.get(`https://jsonplaceholder.typicode.com/todos`);

        const tasks = {};
        resp.data.map((ele) => (
            tasks[ele.userId] = {
                ...tasks[ele.userId],
                [ele.id]: {
                    ...ele
                }
            }
        ))

        dispatch({
            type: GET_ALL,
            payload: tasks
        });
    } catch (error){
        dispatch({
            type: ERROR,
            payload: 'Tasks info is wrong, try again later.'
        });
    }

}

export const setUserId = (user_id) => (dispatch) => {
    dispatch({
        type: SET_USER_ID,
        payload: user_id
    })
}

export const setTitle = (title) => (dispatch) => {
    dispatch({
        type: SET_TITLE,
        payload: title
    })
}

export const saveTask = (new_task) => async (dispatch) => {
    dispatch({
        type: LOADING
    })

    try {
        const resp = await axios.post(`https:/jsonplaceholder.typicode.com/todos`, new_task);
        console.log(resp.data);
        dispatch({
            type: TASK_SAVED
        })
    }
    catch (error) {
        console.log(error.message);
        dispatch({
            type: ERROR,
            payload: 'Submit task is wrong, try again later.'
        });
    }
}