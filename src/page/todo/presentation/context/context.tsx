import React from 'react';
import { SetState } from '../../../../types';
import {
  PriorityTypeEnum,
  StatusTypeEnum,
  TodoModel,
  TodoPayload,
} from '../../domain/model/todo.model';

export interface TodoContextValue {
  filters: {
    key: string;
    status: StatusTypeEnum | 'ALL';
    priorities: PriorityTypeEnum[];
  };
  onChangeFilter: SetState<TodoContextValue['filters']>;
  todoList: TodoModel[];
  isFetching: boolean;
  onChangeTodoList: SetState<TodoModel[]>;
  getTodo: () => Promise<void>;
  addTodo: (payload: TodoPayload) => Promise<void>;
  updateTodoById: (id: string, payload: TodoPayload) => Promise<void>;
  removeTodoById: (id: string) => Promise<void>;
  toggleStatusTodo: (id: string) => Promise<void>;
}

const TodoContext = React.createContext<TodoContextValue | null>(null);

export default TodoContext;
