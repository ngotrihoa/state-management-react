import { v4 as uuidv4 } from 'uuid';
import { ITodoApi } from '../../data/api/todo.api';
import { Todo, TodoModel } from '../../domain/model/todo.model';
import { TodoEntity } from '../../data/entity/todo.entity';
export interface ITodoRepository {
  getTodo: () => Promise<TodoModel[]>;
  getTodoById: (id: string) => Promise<TodoModel[]>;
  createTodo: (payload: Partial<TodoModel>) => Promise<TodoModel>;
  removeTodo: (id: string) => Promise<boolean>;
  updateTodo: (id: string, payload: Partial<TodoModel>) => Promise<TodoModel>;
  toggleStatusTodo: (id: string) => Promise<boolean>;
}

class TodoRepository implements ITodoRepository {
  constructor(private apiInstance: ITodoApi) {
    this.apiInstance = apiInstance;
  }

  private initTodoByTodoEntity = (entity: TodoEntity) => {
    return new Todo({
      id: entity.id,
      content: entity.content,
      order: entity.num_order,
      priority: entity.priority as any,
      status: entity.status as any,
    });
  };

  createTodo = async (payload: Partial<TodoModel>): Promise<TodoModel> => {
    const todo = await this.apiInstance.createTodo({
      id: payload.id || uuidv4(),
      content: payload.content,
      num_order: payload.order,
      priority: payload.priority,
      status: payload.status as any,
      create_at: new Date(),
      create_by: 'hoangotri',
    });

    return this.initTodoByTodoEntity(todo);
  };

  getTodo = async (): Promise<TodoModel[]> => {
    const data = await this.apiInstance.getAllTodo();
    const mappedData: TodoModel[] = data.map((item) =>
      this.initTodoByTodoEntity(item)
    );

    return mappedData;
  };

  getTodoById = async (id: string): Promise<TodoModel[]> => {
    const data = await this.apiInstance.getTodoById(id);
    const mappedData: TodoModel[] = data.map((item) =>
      this.initTodoByTodoEntity(item)
    );

    return mappedData;
  };

  removeTodo = async (id: string): Promise<boolean> => {
    return await this.apiInstance.removeTodoById(id);
  };

  updateTodo = async (
    id: string,
    payload: Partial<TodoModel>
  ): Promise<TodoModel> => {
    const mappedPayload: any = { ...payload };
    if (payload.order) {
      mappedPayload.num_order = payload.order;
      delete mappedPayload.order;
    }
    const updatedItem = await this.apiInstance.updateTodoById(
      id,
      mappedPayload
    );

    return this.initTodoByTodoEntity(updatedItem);
  };

  toggleStatusTodo = async (id: string): Promise<boolean> => {
    return await this.apiInstance.toggleStatusTodo(id);
  };
}

export default TodoRepository;
