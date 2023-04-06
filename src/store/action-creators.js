import { TYPE_DECREMENT, TYPE_INCREMENT } from "./action-types";

const initialState = {
  counter: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
      case TYPE_DECREMENT:
          return {
              ...state,
              counter: state.counter - 1,
          };
      case TYPE_INCREMENT:
          return {
              ...state,
              counter: state.counter + 1,
          };
      default:
          return state;
  }
};