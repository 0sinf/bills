export function initializeRouter() {
  if (window.location.hash) {
    window.history.replaceState(null, "", " ");
  }

  route();
}

export function addClickEvent(elem: HTMLElement, path: string) {
  elem.addEventListener("click", (event) => {
    event.preventDefault();
    updatePath(path);
  });
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
      console.log("home");
      break;
    case "result":
      console.log("result");
      break;
    default:
      console.log("error");
  }
}
