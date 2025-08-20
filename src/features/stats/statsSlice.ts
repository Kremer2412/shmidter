import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

type StatsType = "followers" | "following";

interface StatsState {
    followers: number;
    following: number;
}

const initialState: StatsState = {
    followers: 0,
    following: 0,
};

const statsSlice = createSlice({
    name: "stats",
    initialState,
    reducers: {
        changeStats: {
            reducer: (
                state,
                action: PayloadAction<{ statsType: StatsType; sum: number }>
            ) => {
                const { statsType, sum } = action.payload;
                const res = state[statsType] + sum;
                state[statsType] = res >= 0 ? res : 0;
            },
            prepare: (statsType: StatsType, sum: number) => ({
                payload: { statsType, sum },
            }),
        },
    },
});

export const { changeStats } = statsSlice.actions;
export default statsSlice.reducer;