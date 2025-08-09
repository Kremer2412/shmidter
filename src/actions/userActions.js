export const CHANGE_AVATAR = "CHANGE_AVATAR";
export const CHANGE_NAME = "CHANGE_NAME";
export const CHANGE_FOLLOWERS_UP = "CHANGE_FOLLOWERS_UP";
export const CHANGE_FOLLOWERS_DOWN = "CHANGE_FOLLOWERS_DOWN";
export const CHANGE_FOLLOWING_UP = "CHANGE_FOLLOWING_UP";
export const CHANGE_FOLLOWING_DOWN = "CHANGE_FOLLOWING_DOWN";


export const changeAvatar =url => ({
    type: CHANGE_AVATAR,
    payload: url
});

export const changeName = name => ({
    type: CHANGE_NAME,
    payload: name
})

export const changeFollowersUp = followers => ({
    type: CHANGE_FOLLOWERS_UP,
    payload: followers
})
export const changeFollowersDown = followers => ({
    type: CHANGE_FOLLOWERS_DOWN,
    payload: followers
})

export const changeFollowingUp = following => ({
    type: CHANGE_FOLLOWING_UP,
    payload: following
})


export const changeFollowingDown = following => ({
    type: CHANGE_FOLLOWING_DOWN,
    payload: following
})
