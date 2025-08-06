

import {useDispatch, useSelector} from "react-redux";
import {changeAvatar} from "../actions/userActions.js";

const Avatar = ({size}) => {
    const {avatar, name} = useSelector(state => state.user);
    const dispatch = useDispatch();

    return (
        <img
            onClick={() => {
                const url = prompt('Enter new avatar url');
                dispatch(changeAvatar(url));
            }}
            className={`user-avatar ${size ?? ''}`}
            src={avatar}
            alt={name}
        />
    );
};

export default Avatar;