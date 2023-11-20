import React from 'react';
import { TodoModel } from '../../../domain/model';

type Updater<T> = T | ((prevValue: T) => T);

export type SetState<T> = (updater: Updater<T>) => void;

interface TodoContextValue {
  inputValue?: string;
  onChangeInputValue: SetState<string>;
  addTodo: (payload: TodoModel) => void;
}

const TodoContext = React.createContext<TodoContextValue | null>(null);

export default TodoContext;
