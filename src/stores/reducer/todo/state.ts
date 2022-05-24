import { PriotityType, StatusTodoType } from './../../../constants/const';

export interface TodoListProps {
  id: string;
  content: string;
  status: StatusTodoType;
  priority: PriotityType;
}

interface StateProps {
  todoList: TodoListProps[];
}

export const initialState: StateProps = {
  todoList: [],
};
