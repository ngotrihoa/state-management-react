import { TodoModel, TodoPayload } from '../model/todo.model';
import { ITodoRepository } from '../repositories/todo.repositories';

export interface ITodoServices {
  createTodo: (payload: TodoPayload) => Promise<TodoModel>;
  getAllTodo: () => Promise<TodoModel[]>;
  getTodoById: (id: string) => Promise<TodoModel[]>;
  updateTodoById: (id: string, payload: TodoPayload) => Promise<TodoModel>;
  removeTodo: (id: string, payload: TodoPayload) => Promise<boolean>;
  toggleStatusTodo: (id: string) => Promise<boolean>;
}

class TodoServices implements ITodoServices {
  constructor(private todoRepository: ITodoRepository) {
    this.todoRepository = todoRepository;
  }

  createTodo = async (payload: TodoPayload) => {
    const todo = await this.todoRepository.createTodo(payload);
    return todo;
  };

  getAllTodo = async (): Promise<TodoModel[]> => {
    return await this.todoRepository.getTodo();
  };

  getTodoById = async (id: string): Promise<TodoModel[]> => {
    return await this.todoRepository.getTodoById(id);
  };

  updateTodoById = async (
    id: string,
    payload: TodoPayload
  ): Promise<TodoModel> => {
    return await this.todoRepository.updateTodo(id, payload);
  };

  removeTodo = async (id: string): Promise<boolean> => {
    return await this.todoRepository.removeTodo(id);
  };

  toggleStatusTodo = async (id: string): Promise<boolean> => {
    return await this.todoRepository.toggleStatusTodo(id);
  };
}

export default TodoServices;
