export const convertObjectToArray = (obj: Object) => {
  let res = [];
  for (const value of Object.values(obj)) {
    res.push(value);
  }
  return res;
};
