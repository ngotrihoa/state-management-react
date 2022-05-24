import React, { useState } from 'react';
import { PriotityType, PRIORITY } from '../../constants/const';
import BoxStatus from '../BoxStatus';

interface TodoItemProps {
  id: string;
  content: string;
  status: string;
  priority: PriotityType;
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
        className='w-4 h-4'
      />
      <label
        htmlFor={id}
        className='inline-block flex-1 text-[18px] capitalize'
      >
        {content}
      </label>
      <BoxStatus color={PRIORITY[priority].color}>
        {PRIORITY[priority].label}
      </BoxStatus>
    </div>
  );
};

export default TodoItem;
