import { ITodoRepository } from '../repositories';

export interface ITodoServices {
  createTodo: (payload: any) => void;
}

class TodoServices {
  constructor(private todoRepository: ITodoRepository) {
    this.todoRepository = todoRepository;
  }
  createTodo: () => {};
}

export default TodoServices;
