import { useEffect } from 'react';
import { useTodoContext } from '../../context/hooks';
import TodoItem from '../TodoItem';
import { TodoModel } from '../../../domain/model/todo.model';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

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

  const onDragEnd = () => {};

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='2'>
        {(provider) => (
          <div
            className='flex-1 flex flex-col gap-1 overflow-y-auto'
            ref={provider.innerRef}
            {...provider.droppableProps}
          >
            {todoListFiltered.map((todo, index) => (
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
                index={index}
              />
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
