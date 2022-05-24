import { useContext, useEffect, useState } from 'react';
import Context from './Context';
import { createStore } from './pubsub-createStore';

type Store = ReturnType<typeof createStore>;

export const useSelector = (selector: (state: any) => any) => {
  const store = useContext(Context) as Store;

  const [value, setValue] = useState(selector(store.getState()));
  useEffect(() => {
    const subcribed = store.subscribe(() => {
      const newValue = selector(store.getState());
      setValue(newValue);
    });

    return () => subcribed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return value;
};

export const useDispatch = () => {
  const store = useContext(Context) as Store;

  return store.dispatch;
};
