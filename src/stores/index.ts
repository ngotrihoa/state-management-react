import { createStore } from './../stateManager/pubsub-createStore';
import rootReducer from './reducer';

const store = createStore(rootReducer);

export default store;
