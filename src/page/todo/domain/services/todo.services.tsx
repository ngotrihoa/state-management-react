import { v4 as uuidv4 } from 'uuid';
import { PriorityTypeEnum, StatusTypeEnum, Todo, TodoModel } from '../model';
import { TodoRepository } from '../repositories';

interface TodoPayload extends Partial<TodoModel> {
  content: TodoModel['content'];
}
export interface ITodoServices {
  createTodo: (payload: TodoPayload) => Promise<TodoModel>;
}

class TodoServices implements ITodoServices {
  constructor(private todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }

  createTodo = async (payload: TodoPayload) => {
    const todo = new Todo({
      id: payload.id || uuidv4(),
      content: payload.content,
      order: payload.order || 0,
      priority: payload.priority || PriorityTypeEnum.HIGH,
      status: payload.status || StatusTypeEnum.TODO,
    });

    return await this.todoRepository.createTodo(todo);
  };
}

export default TodoServices;
