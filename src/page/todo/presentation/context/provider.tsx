import { useState } from 'react';
import { Updater } from '../../../../types';
import {
  StatusTypeEnum,
  TodoModel,
  TodoPayload,
} from '../../domain/model/todo.model';
import TodoContext, { TodoContextValue } from './context';
import { TodoServiceImpl } from '../../di';

export const TodoContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [todoList, setTodoList] = useState<TodoModel[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  const [filters, setFilters] = useState<TodoContextValue['filters']>({
    key: '',
    status: 'ALL',
    priorities: [],
  });

  const onChangeTodoList = (updater: Updater<TodoModel[]>) => {
    setTodoList(updater);
  };

  const onChangeFilter = (updater: Updater<TodoContextValue['filters']>) => {
    setFilters(updater);
  };

  const getTodo = async () => {
    setIsFetching(true);
    try {
      const data = await TodoServiceImpl.getAllTodo();
      setTodoList(data);
    } catch (error) {
      console.log('🚀  error:', error);
    }

    setIsFetching(false);
  };

  const addTodo = async (payload: TodoPayload) => {
    setIsFetching(true);
    try {
      const data = await TodoServiceImpl.createTodo(payload);
      setTodoList((prev) => [...prev, data]);
    } catch (error) {
      console.log('🚀  error:', error);
    }

    setIsFetching(false);
  };

  const updateTodoById = async (id: string, payload: TodoPayload) => {
    setIsFetching(true);
    try {
      const data = await TodoServiceImpl.updateTodoById(id, payload);
      setTodoList((prev) => [...prev, data]);
    } catch (error) {
      console.log('🚀  error:', error);
    }

    setIsFetching(false);
  };

  const removeTodoById = async (id: string) => {
    setIsFetching(true);
    try {
      const response = await TodoServiceImpl.removeTodo(id);
      if (response) {
        setTodoList((prev) => prev.filter((item) => item.id !== id));
      }
    } catch (error) {
      console.log('🚀  error:', error);
    }

    setIsFetching(false);
  };

  const toggleStatusTodo = async (id: string) => {
    setIsFetching(true);
    try {
      const response = await TodoServiceImpl.toggleStatusTodo(id);
      if (response) {
        const nextTodoList = [...todoList];
        const item = nextTodoList.find((item) => item.id === id);
        item!.status =
          item!.status === StatusTypeEnum.COMPLETED
            ? StatusTypeEnum.TODO
            : StatusTypeEnum.COMPLETED;

        setTodoList(nextTodoList);
      }
    } catch (error) {
      console.log('🚀  error:', error);
    }

    setIsFetching(false);
  };

  return (
    <TodoContext.Provider
      value={{
        filters,
        todoList,
        isFetching,
        onChangeTodoList,
        getTodo,
        addTodo,
        updateTodoById,
        removeTodoById,
        toggleStatusTodo,
        onChangeFilter,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
