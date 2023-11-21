import {
  StatusTodoType,
  PriotityType,
} from '../../../page/todo/presentation/constants';
import { TodoTypes } from './actionType';
import { TodoListProps } from '../../reducer/todo';

export const addTodo = (payload: TodoListProps) => {
  return {
    type: TodoTypes.ADD_TODO,
    payload,
  };
};

export const deleteTodoById = (id: string) => {
  return {
    type: TodoTypes.DELETE_TODO,
    payload: id,
  };
};

export const toggleStatusTodo = (id: string) => {
  return {
    type: TodoTypes.TOGGLE_STATUS_TODO,
    payload: id,
  };
};

export const filterByStatus = (status: StatusTodoType | 'all') => {
  return {
    type: TodoTypes.FILTER_BY_STATUS,
    payload: status,
  };
};

export const filterByKey = (key: string) => {
  return {
    type: TodoTypes.FILTER_BY_KEY,
    payload: key,
  };
};

export const filterByPriority = (priorities: PriotityType[]) => {
  return {
    type: TodoTypes.FILTER_BY_PRIORITIES,
    payload: priorities,
  };
};
