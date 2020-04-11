import { LOADING, ERROR, UPDATE_POSTS } from '../types/postTypes';

const INITIAL_STATE = {
    posts: [],
    loading: false,
    error: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOADING:
            return { ...state, loading: true };
        case ERROR:
            return { ...state, error: action.payload, loading: false }
        case UPDATE_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false,
                error: ''
            }
        default: return state;
    }
}