import {
    FETCH_USERS,
    NEW_USER,
    DELETE_USER,
    LOGIN_USER,
    UPDATE_PASSWORD,
    UPDATE_ACCOUNT,
    PIC_UPDATE
} from '../actions/types';

const initialState = {
    users: [],
    user: {},
    result: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                users: action.payload
            };
        case NEW_USER:
            return {
                ...state,
                result: action.payload,
                user: action.user
            }
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload.user,
                result: action.payload.result
            }

        case DELETE_USER:
            return {
                ...state,
                user: {},
                result: action.payload
            }
        case UPDATE_PASSWORD:
            return {
                ...state,
                result: action.payload,
            }
        case UPDATE_ACCOUNT:
            return {
                ...state,
                result: action.payload
            }
        case PIC_UPDATE:
            return {
                ...state,
                url: action.payload.url,
                result: {
                    "status": action.payload.status,
                    "message": action.payload.message
                }
            }
        default:
            return state;
    }
}


