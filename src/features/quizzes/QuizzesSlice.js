import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/TopicSlice";
export const addNewQuiz = (payload)=>{
    return (dispatch)=>{
        dispatch(QuizzesSlice.actions.addQuiz(payload));
        dispatch(addQuizId(payload))
    }
}

export const QuizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      state.quizzes = {
        ...state.quizzes,
        [action.payload.id]: {
          ...action.payload
        }
      };
    }
  }
});

export default QuizzesSlice.reducer;

