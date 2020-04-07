import { GET_ALL, LOADING, ERROR } from '../types/postTypes';

const INITIAL_STATE = {
    posts: [],
    loading: false,
    error: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_ALL:
            return {
                ...state,
                posts: action.payload,
                loading: false
            };
        case LOADING:
            return { ...state, loading: true };
        case ERROR:
            return { ...state, error: action.payload, loading: false }
        default: return state;
    }
}