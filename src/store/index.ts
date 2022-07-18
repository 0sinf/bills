import { Action, createStore } from "redux";

interface CustomAction extends Action {
  data: string;
}

const initialState = "";

const modifier = (input = initialState, action: CustomAction) => {
  switch (action.type) {
    case "calculate":
      return action.data;
    case "reset":
      return "";
    default:
      return input;
  }
};

const store = createStore(modifier);

export default store;
