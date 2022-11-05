import { DECREMENT, INCREMENT, RESET, SET_VALUE } from "./constants";

export default function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      if (state.count == 0) {
        return state;
      } else {
        return { ...state, count: state.count - 1 };
      }
    case RESET:
      return { ...state, count: 0 };
    case SET_VALUE:
      if (!isNaN(action.payload)) {
        return { ...state, count: action.payload };
      } else {
        return state;
      }
    default:
      return state;
  }
}
