import counterReducer from './counter';
import todoReducer from './todo';

const rootReducer = {
  todo: todoReducer,
  counter: counterReducer,
};

export default rootReducer;
