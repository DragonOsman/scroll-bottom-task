"use strict";
function findScrollBottom(elem) {
  return (elem.scrollHeight - elem.scrollTop - elem.clientHeight);
}

const containerElem = document.getElementById("container-elem");
const displayPara = document.createElement("p");
displayPara.textContent = `${findScrollBottom(containerElem)}`;
containerElem.insertAdjacentElement("afterend", displayPara);
