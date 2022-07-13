export default function createElem(
  type: string,
  className: string,
  options: any
): HTMLElement {
  const elem = document.createElement(type);

  elem.classList.add(className);

  if (!options) {
    return elem;
  }

  Object.entries(options).forEach(([key, value]) => {
    elem[key] = value;
  });

  return elem;
}
