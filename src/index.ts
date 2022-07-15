import { addClickEvent, initializeRouter } from "./router";

import "./index.css";
import createElem from "./utils/create-elem";

initializeRouter();

function main() {
  const root = document.getElementById("root");

  if (!root) {
    return;
  }

  const btn = createElem("button", "button", null);
  addClickEvent(btn, "/result");

  root.append(btn);
}

main();
