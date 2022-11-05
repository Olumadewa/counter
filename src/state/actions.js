import { DECREMENT, INCREMENT, RESET, SET_VALUE } from "./constants";

const incrementAction = () => ({ type: INCREMENT });
const decrementAction = () => ({ type: DECREMENT });
const resetAction = () => ({ type: RESET });
const setValueAction = (value) => ({ type: SET_VALUE, payload: value });

export { incrementAction, decrementAction, resetAction, setValueAction };
