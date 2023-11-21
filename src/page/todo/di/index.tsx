import LocalDB from '../../../localDB';
import TodoApi from '../data/api/todo.api';
import { TodoEntity } from '../data/entity/todo.entity';
import TodoRepository from '../domain/repositories/todo.repositories';
import TodoServices from '../domain/services/todo.services';

const db = new LocalDB<TodoEntity>('Todo');

const TodoApiImpl = new TodoApi(db);

const TodoRepositoryImpl = new TodoRepository(TodoApiImpl);

export const TodoServiceImpl = new TodoServices(TodoRepositoryImpl);
