import { useReducer } from "react";
import {
  decrementAction,
  incrementAction,
  resetAction,
  setValueAction,
} from "../state/actions";
import counterReducer from "../state/reducer";

function useStateHook(initialValue) {
  const [state, dispatch] = useReducer(counterReducer, initialValue);
  const increment = () => dispatch(incrementAction());
  const decrement = () => dispatch(decrementAction());
  const reset = () => dispatch(resetAction());
  const setValue = (value) => dispatch(setValueAction(value));
  return { state, increment, decrement, reset, setValue };
}

export { useStateHook };
