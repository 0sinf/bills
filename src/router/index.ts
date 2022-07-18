import Home from "../pages/Home";
import Result from "../pages/Result";

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
  const base = process.env.NODE_ENV === "development" ? "/" : "/bills/";
  window.history.pushState("", document.title, `${base}${path}`);

  route();
}

function route() {
  const base = process.env.NODE_ENV === "development" ? "/" : "/bills/";
  const path = window.location.pathname.split(base)[1];
  console.log(path);

  render(path);
}

function render(page: string) {
  const root = document.getElementById("root");

  if (!root) {
    return;
  }

  switch (page) {
    case "":
      root.innerHTML = "";
      const home = Home();
      root.append(home);
      break;
    case "result":
      root.innerHTML = "";
      const result = Result();
      root.append(result);
      break;
    default:
      console.log("error");
  }
}
