import { TodoTypes } from '../../action';

const initState = {
  todoList: [],
  message: 'init state in todo',
};

const todoReducer = (state = initState, action: any) => {
  switch (action.type) {
    case TodoTypes.ADD_TODO:
      return {
        ...state,
        message: 'Update state when dispatch action add.......',
      };

    default:
      return initState;
  }
};

export default todoReducer;
