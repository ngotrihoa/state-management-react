import { createStore } from './../stateManager/pubsub-createStore';
import rootReducer from './reducer';

const store = createStore(rootReducer);

store.subscribe(() => {
  localStorage.setItem('TODO_LIST_STATE', JSON.stringify(store.getState()));
});

export default store;
