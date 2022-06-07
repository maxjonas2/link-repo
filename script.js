function qs(selector, element = document) {
  return element.querySelector(selector);
}

function qsa(selector, element = document) {
  return Array.from(element.querySelectorAll(selector));
}

qsa(".container-links > a").forEach(anchor => {
  anchor.setAttribute("target", "_blank");
});
