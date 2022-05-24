import { statusTodoType } from '../../../constants/const';
import { TodoTypes } from '../../action';
import { initialState, StateTodoProps } from './state';

const handleAddTodo = (state: StateTodoProps, payload: any) => {
  return {
    ...state,
    totalTodo: state.totalTodo + 1,
    todoList: [...state.todoList, payload],
  };
};

const handleDeleteTodoById = (state: StateTodoProps, payload: any) => {
  return {
    ...state,
    todoList: [...state.todoList.filter((item) => item.id !== payload)],
  };
};

const handleToggleStatusTodo = (state: StateTodoProps, payload: any) => {
  const newTodo = state.todoList.map((item) => {
    if (item.id === payload) {
      item.status === statusTodoType.COMPLETED
        ? (item.status = statusTodoType.TODO)
        : (item.status = statusTodoType.COMPLETED);
    }
    return item;
  });

  return { ...state, todoList: newTodo };
};

const handleFilterByKey = (state: StateTodoProps, payload: any) => {
  const filters = { ...state.filters, key: payload };

  return { ...state, filters };
};

const handleFilterByStatus = (state: StateTodoProps, payload: any) => {
  const filters = { ...state.filters, status: payload };

  return { ...state, filters };
};

const handleFilterByPriorities = (state: StateTodoProps, payload: any) => {
  const filters = { ...state.filters, priorities: payload };

  return { ...state, filters };
};

export const todoReducer = (
  state: StateTodoProps = initialState,
  action: any
) => {
  switch (action.type) {
    case TodoTypes.ADD_TODO:
      return handleAddTodo(state, action.payload);

    case TodoTypes.DELETE_TODO:
      return handleDeleteTodoById(state, action.payload);

    case TodoTypes.TOGGLE_STATUS_TODO:
      return handleToggleStatusTodo(state, action.payload);

    case TodoTypes.FILTER_BY_KEY:
      return handleFilterByKey(state, action.payload);

    case TodoTypes.FILTER_BY_STATUS:
      return handleFilterByStatus(state, action.payload);

    case TodoTypes.FILTER_BY_PRIORITIES:
      return handleFilterByPriorities(state, action.payload);

    default:
      return initialState;
  }
};
