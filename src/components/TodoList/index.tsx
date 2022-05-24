import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { priority, statusTodoType } from '../../constants/const';
import TodoItem from '../TodoItem';

const DUMMY_TODO = [
  {
    id: uuidv4(),
    content: 'To do Reactjs',
    status: statusTodoType.COMPLETED,
    priority: priority.HIGH,
  },
  {
    id: uuidv4(),
    content: 'To do Reactjs',
    status: statusTodoType.TODO,
    priority: priority.MEDIUM,
  },
  {
    id: uuidv4(),
    content: 'To do Reactjs',
    status: statusTodoType.TODO,
    priority: priority.LOW,
  },
];

const TodoList = () => {
  return (
    <div className='flex-1 flex flex-col  gap-1 overflow-y-auto'>
      {DUMMY_TODO.map((todo) => (
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
