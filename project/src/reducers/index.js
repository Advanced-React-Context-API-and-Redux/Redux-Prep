// import action types from './actions'
import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    POST_START,
    POST_SUCCESS,
    POST_FAILURE
} from "../actions"

// set initialState
const initialState = {
    players: [],
    isFetching: false,
    error: ''
}

// pass state (setting it to initialState) and an action
const reducer = ( state = initialState, action ) => {
    // set the switch to look for the action type
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                players: action.payload,
                isFetching: false,
                error: ''
            };
        case FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case POST_START:
            return {
                ...state,
                players: [
                    ...state.players
                ],
                isFetching: true,
                error: ''
            };
        case POST_SUCCESS:
            return {
                ...state,
                players: action.payload,
                isFetching: false,
                error: '',
            };
        case POST_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state
    }
}

export default reducer;