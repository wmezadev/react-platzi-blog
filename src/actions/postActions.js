import axios from 'axios';
import { ERROR, GET_BY_USER, LOADING } from '../types/postTypes';
import * as userTypes from '../types/userTypes';

const { GET_ALL: USERS_GET_ALL } = userTypes;

export const getByUser = (key) => async (dispatch, getState) => {
    dispatch({
        type: LOADING
    });
    const { users } = getState().userReducer;
    const { posts } = getState().postsReducer;
    const user_id = users[key].id;

    try {
        const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);
        const updated_posts = [
            ...posts,
            resp.data
        ];

        const posts_key = updated_posts.length - 1;
        const updated_users = [ ...users];
        updated_users[key] = {
            ...users[key],
            posts_key
        }

        dispatch({
            type: GET_BY_USER,
            payload: updated_posts
        });

        dispatch({
            type: USERS_GET_ALL,
            payload: updated_users
        });

    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Post no available, try again later.'
        })
    }
}