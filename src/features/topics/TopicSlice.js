import { createSlice } from "@reduxjs/toolkit";
export const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic(state, action) {
      state.topics = {
        ...state.topics,
        [action.payload.id]: {
            ...action.payload,
            quizIds:[]
        }
      };
    },
    addQuizId(state, action){
      state.topics[action.payload.topicId].quizIds.push(action.payload.id);
    }

  }
});
export const {addTopic, addQuizId} = topicsSlice.actions;
export default topicsSlice.reducer;
