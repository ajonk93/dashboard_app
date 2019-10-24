import axios from 'axios';
import { GET_TASKS, ADD_TASK, DELETE_TASK, LOADING_TASKS} from './types';


export const getTasks = () => dispatch => {
    dispatch(setTaskLoading());
    axios
    .get('/api/tasks')
    .then( res => 
        dispatch({
            type: GET_TASKS,
            payload: res.data
        })
    )
}

export const addTask = task => (dispatch) => {
   axios
   .post('/api/tasks', task )
   .then( res => 
    dispatch({
        type: ADD_TASK,
        payload: res.data
    })
    )
}

export const deleteTask = (id) => dispatch => {
    axios.delete(`/api/tasks/${id}`).then( res =>
        dispatch({
            type: DELETE_TASK,
            payload: id
        })
        )
}



export const setTaskLoading = () => {
    return {
        type: LOADING_TASKS
    };
}