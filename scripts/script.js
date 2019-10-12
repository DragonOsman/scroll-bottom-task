"use strict";
function findScrollBottom() {
  const elem = document.getElementById("container-elem");
  if (elem.scrollTop === elem.scrollHeight) {
    return 0;
  }

  return elem.scrollHeight - elem.scrollTop;
}

const displayPara = document.createElement("p");
displayPara.textContent = `${findScrollBottom()}`;
const containerElem = document.getElementById("container-elem");
containerElem.insertAdjacentElement("afterend", displayPara);
