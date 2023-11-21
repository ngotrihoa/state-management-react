import { useEffect } from 'react';
import { useTodoContext } from '../../context/hooks';
import TodoItem from '../TodoItem';
import { TodoModel } from '../../../domain/model/todo.model';

const TodoList = () => {
  const { filters, todoList, removeTodoById, getTodo, toggleStatusTodo } =
    useTodoContext();

  const todoListFiltered = todoList.filter((todo: TodoModel) => {
    let check = true;
    if (filters.key && filters.key !== '')
      check = todo.content.toLowerCase().includes(filters.key);

    if (filters.status !== 'ALL')
      check = check && todo.status === filters.status;

    if (filters.priorities && filters.priorities.length > 0)
      check = check && filters.priorities.includes(todo.priority);

    return check;
  });

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div className='flex-1 flex flex-col gap-1 overflow-y-auto'>
      {todoListFiltered.map((todo) => (
        <TodoItem
          key={todo.id}
          content={todo.content}
          id={todo.id}
          order={todo.order}
          onChange={() => {
            toggleStatusTodo(todo.id);
          }}
          priority={todo.priority}
          status={todo.status}
          onDelete={() => {
            removeTodoById(todo.id);
          }}
        />
      ))}
    </div>
  );
};

export default TodoList;
