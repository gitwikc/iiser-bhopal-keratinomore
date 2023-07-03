export const getScrollDistanceToBottom: () => number = () => {
  const windowHeight = window.innerHeight;
  const documentHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );

  const scrollTop = document.documentElement.scrollTop;
  const scrollDistanceToBottom = documentHeight - (scrollTop + windowHeight);

  return scrollDistanceToBottom;
};
