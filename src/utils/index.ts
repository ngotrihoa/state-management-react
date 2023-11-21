export const convertObjectToArray = (obj: Object) => {
  let res = [];
  for (const value of Object.values(obj)) {
    res.push(value);
  }
  return res;
};

export const delay = <T>(callback: Function, ms: number = 1000): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback());
    }, ms);
  });
};
