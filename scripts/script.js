"use strict";
function findScrollBottom(elem) {
  if (elem.scrolTop === (elem.scrollHeight - elem.offsetHeight)) {
    return 0;
  }

  return (elem.scrollHeight - elem.scrollTop - elem.clientHeight);
}

const containerElem = document.getElementById("container-elem");
const displayPara = document.createElement("p");
displayPara.textContent = `${findScrollBottom(containerElem)}`;
containerElem.insertAdjacentElement("afterend", displayPara);
