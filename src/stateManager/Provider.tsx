import React from 'react';
import Context from './Context';
import { createStore } from './pubsub-createStore';

type Store = ReturnType<typeof createStore>;

interface ProviderProps {
  store: Store;
  children: React.ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children, store }) => {
  return <Context.Provider value={store}>{children}</Context.Provider>;
};

export default Provider;
