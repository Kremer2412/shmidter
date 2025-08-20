import {changeAvatar, changeName} from "../features/user/userSlice.ts";
import {useAppDispatch, useAppSelector} from "../app/hooks.ts";

interface Avatar {
    size?: string;
}

const Avatar = ({size} : Avatar) => {
    const {avatar, name} = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    return (
        <img
            onClick={() => {
                const url = prompt('Enter new avatar url');
                dispatch(changeAvatar(url));
            }}
            onContextMenu={(e) => {
                e.preventDefault();
                const name = prompt('Enter name');
                dispatch(changeName(name))
            }}
            className={`user-avatar ${size ?? ''}`}
            src={avatar}
            alt={name}
        />
    );
};

export default Avatar;