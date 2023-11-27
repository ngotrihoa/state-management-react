import React from 'react';
import { PRIORITY } from '../../constants';
import BoxStatus from '../../../../../components/BoxStatus';
import { StatusTypeEnum, TodoModel } from '../../../domain/model/todo.model';
import { Draggable } from 'react-beautiful-dnd';

interface TodoItemProps extends TodoModel {
  onChange: Function;
  onDelete: Function;
  index: number;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  content,
  status,
  priority,
  order,
  onChange,
  onDelete,
  index,
}) => {
  return (
    <Draggable draggableId={`draggableId-${id}`} index={index}>
      {(provider) => (
        <div
          className='flex gap-2'
          ref={provider.innerRef}
          {...provider.dragHandleProps}
          {...provider.draggableProps}
        >
          <div
            className={`flex flex-1 items-center gap-2 ${
              status === StatusTypeEnum.COMPLETED
                ? 'opacity-40 line-through'
                : ''
            }`}
          >
            <input
              type='checkbox'
              name=''
              id={id}
              checked={status === StatusTypeEnum.COMPLETED}
              onChange={() => onChange()}
              className='w-4 h-4'
            />
            <label htmlFor={id} className='inline-block flex-1 text-[18px]'>
              <span className='text-blue-400 pr-1'>#{order} </span>
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
      )}
    </Draggable>
  );
};

export default TodoItem;
