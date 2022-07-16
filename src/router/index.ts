import Home from "../pages/Home";
export function initializeRouter() {
  if (window.location.hash) {
    window.history.replaceState(null, "", " ");
  }

  route();
}

export function go(path: string): EventListener {
  return (evt: Event) => updatePath(path);
}

export function updatePath(path: string) {
  window.history.pushState("", document.title, path);

  route();
}

function route() {
  const path = window.location.pathname.split("/")[1];

  render(path);
}

function render(page: string) {
  const root = document.getElementById("root");

  if (!root) {
    return;
  }

  switch (page) {
    case "":
      const home = Home();
      root.append(home);
      break;
    case "result":
      console.log("result");
      break;
    default:
      console.log("error");
  }
}
