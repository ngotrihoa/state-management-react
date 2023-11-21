import { delay } from './../../../../utils/index';
import LocalDB from '../../../../localDB';
import { TodoEntity } from '../entity/todo.entity';

export interface ITodoApi {
  getAllTodo: () => Promise<TodoEntity[]>;
  getTodoById: (id: string) => Promise<TodoEntity[]>;
  createTodo: (payload: Partial<TodoEntity>) => Promise<TodoEntity>;
  updateTodoById: (
    id: string,
    payload: Partial<TodoEntity>
  ) => Promise<TodoEntity>;
  removeTodoById: (id: string) => Promise<boolean>;
  toggleStatusTodo: (id: string) => Promise<boolean>;
}

class TodoApi implements ITodoApi {
  constructor(private apiInstance: LocalDB<TodoEntity>) {
    // apiInstance ở đây là axiosInstance. Trong source này api instance là localDB
    this.apiInstance = apiInstance;
  }

  public getAllTodo = () => {
    return delay<TodoEntity[]>(() => this.apiInstance.getAll());
  };

  public getTodoById = (id: string) => {
    return delay<TodoEntity[]>(() => this.apiInstance.getById(id));
  };

  public createTodo = async (payload: Partial<TodoEntity>) => {
    return delay<TodoEntity>(() => this.apiInstance.create(payload));
  };

  public updateTodoById = async (id: string, payload: Partial<TodoEntity>) => {
    return delay<TodoEntity>(() => this.apiInstance.updateById(id, payload));
  };

  public removeTodoById = async (id: string) => {
    return delay<boolean>(() => this.apiInstance.removeById(id));
  };

  public toggleStatusTodo = async (id: string) => {
    // Bình thường đến đây chỉ cần call api để toggle status là xong
    // return delay<boolean>(() => this.apiInstance.toggleStatus(id));

    //Nhưng ở đây đây dùng localDB nên em sẽ query và update ở đây cho nhanh
    const item = this.apiInstance.getById(id);
    if (item!.status === 'COMPLETED') item!.status = 'TODO';
    else item!.status = 'COMPLETED';
    this.apiInstance.updateById(id, item!);
    return delay<boolean>(() => true);
  };
}

export default TodoApi;
