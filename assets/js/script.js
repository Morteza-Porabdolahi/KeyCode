let $ = document;

const bodyElem = $.body;
const eventElements = $.querySelectorAll(".event");
const container = $.querySelector(".content-container");

bodyElem.addEventListener("keydown", handlePressedKey);

function handlePressedKey(e) {
  e.preventDefault();

  eventElements.forEach(function (eventElem) {
    eventElem.textContent = e[eventElem.id];
  });

  if (container.classList.contains("starter")) {
    container.classList.remove("starter");
  }
}
