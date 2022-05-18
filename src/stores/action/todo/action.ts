import { TodoTypes } from './actionType';
export const addTodo = (payload: any) => {
  return {
    type: TodoTypes.ADD_TODO,
    payload,
  };
};
