import { createSlice } from "@reduxjs/toolkit";

export const CardSlice = createSlice({
    name: "cards",
    initialState:{
        cards:{}
    },
    reducers:{
        addCard:(state, action)=>{
            state.cards = {
                ...state.cards,
                [action.payload.id]:action.payload
            }
        }
    }
})
export const {addCard} = CardSlice.actions;
export default CardSlice.reducer;