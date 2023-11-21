import {
  PriotityType,
  StatusTodoType,
} from '../../../page/todo/presentation/constants';

export interface TodoListProps {
  id: string;
  numOrder: number;
  content: string;
  status: StatusTodoType;
  priority: PriotityType;
}

interface FilterProps {
  key: string;
  status: StatusTodoType | 'all';
  priorities: PriotityType[];
}

export interface StateTodoProps {
  todoList: TodoListProps[];
  totalTodo: number;
  filters: FilterProps;
}

const todoListSerialize = localStorage.getItem('TODO_LIST_STATE');
const allData = todoListSerialize ? JSON.parse(todoListSerialize) : [];

export const initialState: StateTodoProps = {
  todoList: allData?.todo?.todoList || [],
  totalTodo: allData?.todo?.totalTodo ?? 0,
  filters: {
    key: '',
    status: 'all',
    priorities: [],
  },
};
