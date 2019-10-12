"use strict";
function findScrollBottom(elem) {
  const scrollTop = elem.scrollTop;
  if (scrollTop === elem.scrollHeight) {
    return 0;
  }

  const scrollBottom = elem.scrollHeight - scrollTop;

  return scrollBottom;
}

const elem = document.getElementById("container-elem");
const display = document.createElement("p");
display.textContent = `${findScrollBottom(elem)}`;
document.body.append(display);
