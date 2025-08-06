import {legacy_createStore as createStore} from "redux";
import {shmidterReducer} from "../reducers/shmidterReducer.js";


const initialState = {
    user: {
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    },
    stats: {
        followers: 42,
        followings: 10
    }

}
export const store = createStore(shmidterReducer, initialState);