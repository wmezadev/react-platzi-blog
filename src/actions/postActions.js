import axios from 'axios';
import { ERROR, GET_BY_USER, LOADING } from '../types/postTypes';

export const getByUser = (id) => async (dispatch, getState) => {
    dispatch({
        type: LOADING
    });
    const { users } = getState().userReducer;
    const { posts } = getState().postsReducer;
    const user_id = users[id].id;

    try {
        const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);
        const updated_posts = [
            ...posts,
            resp.data
        ];
        dispatch({
            type: GET_BY_USER,
            payload: updated_posts
        })
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Something is wrong, try again later.'
        })
    }
}