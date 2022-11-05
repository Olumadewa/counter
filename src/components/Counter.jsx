import React, { useState } from "react";
import { useStateHook } from "../hooks/stateHook";
import { initialState } from "../state/state";
import Button from "./Button";
import CounterDisplay from "./CounterDisplay";

const Counter = () => {
  const { state, increment, decrement, reset, setValue } =
    useStateHook(initialState);
  const [value, setTextValue] = useState("");
  return (
    <div className="flex flex-col justify-center items-center">
      <section>
        <CounterDisplay value={state.count} cornerRadius={"rounded-lg"}>
          <p className="text-white text-4xl">{state.count}</p>
        </CounterDisplay>
      </section>
      <section className="space-x-8 flex mt-7">
        <Button onClick={() => decrement()}>
          <p className="text-white text-4xl">-</p>
        </Button>
        <Button onClick={() => increment()}>
          <p className="text-white text-4xl">+</p>
        </Button>
        <Button onClick={() => reset()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Button>
      </section>
      <section className="mt-10 flex space-x-4">
        <input
          type={"number"}
          value={value}
          placeholder={"Enter a number"}
          onChange={(e) => setTextValue(e.target.value)}
          className="morph-fixed px-3 text-white outline-none rounded-lg"
          style={{ color: "white" }}
        />
        <Button
          onClick={() => {
            setValue(parseFloat(value) ?? 0);
            setTextValue(0);
          }}
          cornerRadius={"rounded-lg"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </Button>
      </section>
    </div>
  );
};

export default Counter;
