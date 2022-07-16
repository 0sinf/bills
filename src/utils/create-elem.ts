interface EventType {
  type: string;
  action: EventListenerOrEventListenerObject;
}

interface Attributes {
  className?: string[];
  events?: EventType;
  type?: string;
  href?: string;
  target?: string;
  placeholder?: string;
}

export default function createElement(
  type: string,
  attributes: Attributes,
  child: HTMLElement[] | string | null
) {
  const elem = document.createElement(type);

  Object.entries(attributes).forEach(([key, value]) => {
    if (key === undefined) {
      return;
    }

    if (key === "className") {
      elem.className = value.join().replace(",", " ");
    }

    if (key === "events") {
      const { type, action } = value as EventType;
      elem.addEventListener(type, action);
    }

    if (key !== "className" && key !== "events") {
      elem.setAttribute(key, value);
    }
  });

  if (!child) {
    return elem;
  }

  if (typeof child === "string") {
    elem.innerText = child;
  } else {
    // FIXME: If use babel, TS Error
    elem.append(...child);
  }

  return elem;
}
