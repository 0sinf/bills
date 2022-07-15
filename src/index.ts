import { initializeRouter, go } from "./router";
import createElem from "./utils/create-elem";
import "./index.css";

initializeRouter();

function main() {
  const root = document.getElementById("root");

  if (!root) {
    return;
  }

  const button = createElem(
    "button",
    { className: ["button"], events: { type: "click", action: go("/result") } },
    "go result"
  );

  root.append(button);
}

main();
