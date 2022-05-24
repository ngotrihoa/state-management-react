import { TodoTypes } from './actionType';
import { TodoListProps } from '../../reducer/todo';

export const addTodo = (payload: TodoListProps) => {
  return {
    type: TodoTypes.ADD_TODO,
    payload,
  };
};
