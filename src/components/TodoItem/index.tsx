import React, { useState } from 'react';
import { PriorityItemProps } from '../../constants/const';
import BoxStatus from '../BoxStatus';

interface TodoItemProps {
  id: string;
  content: string;
  status: string;
  priority: PriorityItemProps;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  content,
  status,
  priority,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(status === 'completed');
  const handleChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div
      className={`flex items-center gap-2 ${
        isChecked ? 'opacity-40 line-through' : ''
      }`}
    >
      <input
        type='checkbox'
        name=''
        id={id}
        checked={isChecked}
        onChange={handleChange}
      />
      <label htmlFor={id} className='inline-block flex-1 text-[18px]'>
        {content}
      </label>
      <BoxStatus color={priority.color}>{priority.label}</BoxStatus>
    </div>
  );
};

export default TodoItem;
