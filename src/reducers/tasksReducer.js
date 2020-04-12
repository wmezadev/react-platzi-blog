import { 
    GET_ALL, 
    LOADING, 
    ERROR, 
    SET_USER_ID, 
    SET_TITLE, 
    TASK_SAVED, 
    TASK_UPDATE 
} from '../types/taskTypes';

const INITIAL_STATE = {
    tasks: {},
    loading: false,
    error: '',
    user_id: '',
    title: '',
    go_back: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_ALL:
            return { ...state, tasks: action.payload, loading: false , error: '', go_back: false};
        case SET_USER_ID:
            return { ...state, user_id: action.payload };
        case SET_TITLE:
            return { ...state, title: action.payload };
        case TASK_SAVED:
            return { ...state, tasks: {}, loading: false, error: '', go_back: true, user_id: '', title: '' };
        case TASK_UPDATE:
            return { ...state, tasks: action.payload };
        case LOADING:
            return { ...state, loading: true };
        case ERROR:
            return { ...state, error: action.payload, loading: false }
        default: return state;
    }
}