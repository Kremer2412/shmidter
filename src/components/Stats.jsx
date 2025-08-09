import Avatar from "./Avatar.jsx";
import {useDispatch, useSelector} from "react-redux";
import {changeFollowersDown, changeFollowersUp, changeFollowingDown, changeFollowingUp} from "../actions/userActions.js";


const Stats = () => {
   const {followers, followings} = useSelector(state => state.stats);
   const {name} = useSelector(state => state.user);
   const dispatch = useDispatch();

    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {name}
            </div>
            <div className={'stats'}>
                <div
                    onClick={() => dispatch(changeFollowersUp())}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(changeFollowersDown());
                    }}
                >
                    Followers: {followers}
                </div>

                <div
                    onClick={() => dispatch(changeFollowingUp())}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(changeFollowingDown());
                    }}
                >
                    Following: {followings}
                </div>
            </div>
        </div>
    );
};

export default Stats;