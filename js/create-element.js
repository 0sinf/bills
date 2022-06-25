function createElem(type, className, option) {
  const elem = document.createElement(type);
  elem.classList.add(className);

  if (!option) {
    return elem;
  }

  Object.entries(option).forEach(([key, value]) => {
    elem[key] = value;
  });

  return elem;
}
