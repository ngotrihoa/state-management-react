import { TodoModel } from '../model';

export interface TodoRepository {
  getTodo: () => Promise<TodoModel[]>;
  createTodo: (payload: TodoModel) => Promise<TodoModel>;
  removeTodo: (id: TodoModel['id']) => Promise<boolean>;
}
