export const convertArrayToObjectByKey = (list, mapKey) => {
  return list.reduce((prevValue, nextValue) => {
    prevValue[nextValue[mapKey]] = nextValue;
    return prevValue;
  }, {});
};
