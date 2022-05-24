import { TodoTypes } from '../../action';
import { initialState } from './state';

export const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TodoTypes.ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };

    default:
      return initialState;
  }
};
