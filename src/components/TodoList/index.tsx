import React from 'react';
import { useSelector } from '../../stateManager';
import TodoItem from '../TodoItem';

const TodoList = () => {
  const todoListStore = useSelector((state) => state.todo.todoList);
  console.log('🚀 ~ todoListStore', todoListStore);
  return (
    <div className='flex-1 flex flex-col  gap-1 overflow-y-auto'>
      {todoListStore.map((todo: any) => (
        <TodoItem
          key={todo.id}
          content={todo.content}
          id={todo.id}
          priority={todo.priority}
          status={todo.status}
        />
      ))}
    </div>
  );
};

export default TodoList;
