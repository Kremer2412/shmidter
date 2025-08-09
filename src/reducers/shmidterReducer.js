import {
    CHANGE_AVATAR,
    CHANGE_NAME,
    CHANGE_FOLLOWERS_UP,
    CHANGE_FOLLOWERS_DOWN,
    CHANGE_FOLLOWING_UP,
    CHANGE_FOLLOWING_DOWN,
} from "../actions/userActions.js";


export const shmidterReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {...state, user: {...state.user, name: action.payload || state.user.name}};
        case CHANGE_AVATAR:
            return {...state, user: {...state.user, avatar: action.payload || state.user.avatar}};
        case CHANGE_FOLLOWERS_UP:
            return {...state, stats: {...state.stats, followers: state.stats.followers + 1}};
        case CHANGE_FOLLOWERS_DOWN:
            return {...state, stats: {...state.stats, followers:
                        state.stats.followers > 0 ? state.stats.followers - 1 : state.stats.followers}};
        case CHANGE_FOLLOWING_UP:
            return {...state, stats: {...state.stats, followings: state.stats.followings + 1}};
        case CHANGE_FOLLOWING_DOWN:
            return {...state, stats: {...state.stats, followings:
                        state.stats.followings > 0 ? state.stats.followings - 1 : state.stats.followings}};
            default:
            return state;
    }
};