import { GET_TASKS, ADD_TASK, DELETE_TASK, LOADING_TASKS} from '../actions/types';

const initialState = {
    tasks: [],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_TASKS:
            return {
                ...state,
                tasks: action.payload,
                loading: false
            };

        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task._id !== action.payload )
            }

        case ADD_TASK:
            return {
                ...state,
                tasks: [action.payload, ...state.tasks]
            }

        case LOADING_TASKS:
            return {
                ...state,
                loading: true
            }
            default:
                return state;
    }
}