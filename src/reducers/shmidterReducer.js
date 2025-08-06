import {CHANGE_AVATAR} from "../actions/userActions.js";

export const shmidterReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_AVATAR:
            return { ...state, user: {...state.user, avatar: action.payload || state.user.avatar}};
        default:
            return state;
    }
}