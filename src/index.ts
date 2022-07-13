import createElem from "./utils/create-elem";

import "./index.css";

function main() {
  const root = document.getElementById("root");

  if (!root) {
    return;
  }

  const h = createElem("h1", "title", { innerText: "Hello!!" });
  root.appendChild(h);
}

main();
