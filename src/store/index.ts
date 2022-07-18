import { Action, createStore } from "redux";

const modifier = (input: string, action: Action) => {
  switch (action.type) {
    case "calculate":
      return input;
    case "reset":
      return "";
    default:
      return input;
  }
};

const store = createStore(modifier);

export default store;
