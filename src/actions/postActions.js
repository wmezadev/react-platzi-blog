import axios from 'axios';
import { ERROR, UPDATE_POSTS, LOADING, UPDATE_COMMENTS, COM_LOADING, COM_ERROR } from '../types/postTypes';
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

        const new_posts  = resp.data.map((post) => ({
            ...post,
            comments: [],
            opened: false
        }));

        const updated_posts = [
            ...posts,
            new_posts
        ];

        const posts_key = updated_posts.length - 1;
        const updated_users = [ ...users];
        updated_users[key] = {
            ...users[key],
            posts_key
        }

        dispatch({
            type: UPDATE_POSTS,
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

export const togglePost = (posts_key, com_key) => (dispatch , getState) => {

    const { posts } = getState().postsReducer;
    const selected = posts[posts_key][com_key];

    const updated = {
        ...selected,
        opened: !selected.opened
    }

    const updatedPosts = [...posts];
    updatedPosts[posts_key] = [
        ...posts[posts_key]
    ];

    updatedPosts[posts_key][com_key] = updated;

    dispatch({
        type: UPDATE_POSTS,
        payload: updatedPosts
    });

}

export const getComments = (posts_key, com_key) => async (dispatch, getState) => {
    dispatch({
        type: COM_LOADING
    });
    
    const { posts } = getState().postsReducer;
    const selected = posts[posts_key][com_key];
    try {
        const resp = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${selected.id}`);
        const updated = {
            ...selected,
            comments: resp.data
        }
        const updatedPosts = [...posts];
        updatedPosts[posts_key] = [
            ...posts[posts_key]
        ];
        updatedPosts[posts_key][com_key] = updated;
        dispatch({
            type: UPDATE_COMMENTS,
            payload: updatedPosts
        });
        
    } catch (error) {
        dispatch({
            type: COM_ERROR,
            payload: 'Comments no available, try again later.'
        })
    }

}