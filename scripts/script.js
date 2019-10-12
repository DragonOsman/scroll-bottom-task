"use strict";
function findScrollBottom(elem) {
  const scrollTop = elem.scrollTop;
  if (scrollTop === elem.scrollHeight) {
    return 0;
  }

  const scrollBottom = elem.scrollHeight - scrollTop;

  return scrollBottom;
}