import { createContext } from 'react';
import { createStore } from './pubsub-createStore';
type Store = ReturnType<typeof createStore>;

const Context = createContext<Store | null>(null);

export default Context;
