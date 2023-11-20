import { TodoModel } from '../model';

export interface ITodoRepository {
  getTodo: () => Promise<TodoModel[]>;
  createTodo: () => Promise<TodoModel>;
  removeTodo: () => Promise<boolean>;
}
