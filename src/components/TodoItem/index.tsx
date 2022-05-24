import React from 'react';
import { PRIORITY, PriotityType } from '../../constants/const';
import BoxStatus from '../BoxStatus';

interface TodoItemProps {
  id: string;
  content: string;
  status: string;
  numOrder: number;
  priority: PriotityType;
  onChange: Function;
  onDelete: Function;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  content,
  status,
  priority,
  numOrder,
  onChange,
  onDelete,
}) => {
  return (
    <div className='flex gap-2'>
      <div
        className={`flex flex-1 items-center gap-2 ${
          status === 'completed' ? 'opacity-40 line-through' : ''
        }`}
      >
        <input
          type='checkbox'
          name=''
          id={id}
          checked={status === 'completed'}
          onChange={() => onChange()}
          className='w-4 h-4'
        />
        <label htmlFor={id} className='inline-block flex-1 text-[18px]'>
          <span className='text-blue-400 pr-1'>#{numOrder} </span>
          <span className='capitalize'>{content}</span>
        </label>
        <BoxStatus color={PRIORITY[priority].color}>
          {PRIORITY[priority].label}
        </BoxStatus>
      </div>
      <div className='cursor-pointer' onClick={() => onDelete()}>
        x
      </div>
    </div>
  );
};

export default TodoItem;
