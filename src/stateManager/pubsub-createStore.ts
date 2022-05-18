type Reducer = (state: any, action: any) => any;

interface rootReducerType<T> {
  [name: string]: T;
}

//pubsub parttern
export const createStore = <T extends Reducer>(
  rootReducer: rootReducerType<T>
): {
  subscribe: (listener: Function) => () => void;
  dispatch: (action: Parameters<T>[1]) => void; // like publisher
  getState: () => Parameters<T>[0];
} => {
  let storeListeners: Function[] = [];
  const state: { [name: string]: any } = {};

  for (const [name, reducer] of Object.entries(rootReducer)) {
    state[name] = reducer(undefined, {});
  }

  const subscribe = (listener: Function) => {
    storeListeners.push(listener);

    return () => {
      storeListeners = storeListeners.filter((item) => item !== listener);
    };
  };

  const dispatch = (action: Parameters<T>[1]) => {
    const [typeReducer] = action.type.split('/');
    state[typeReducer] = rootReducer[typeReducer](state[typeReducer], action);
    storeListeners.forEach((listener) => listener());
  };

  const getState = () => state;

  return { subscribe, dispatch, getState };
};
