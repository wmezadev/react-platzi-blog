import axios from 'axios';

export const getAll = () => async (dispatch) => {
    const resp = await axios.get(`https://jsonplaceholder.typicode.com/users`);

    dispatch({
        type: 'get_users',
        payload: resp.data
    })
}