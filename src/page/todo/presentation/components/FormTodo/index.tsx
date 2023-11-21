import { SyntheticEvent, useState } from 'react';
import Select from 'react-select';
import { convertObjectToArray } from '../../../../../utils';
import {
  PriorityTypeEnum,
  StatusTypeEnum,
} from '../../../domain/model/todo.model';
import { PRIORITY } from '../../constants';
import { colorStyles } from './const';
import { useTodoContext } from '../../context/hooks';

const priorityArr = convertObjectToArray(PRIORITY);

const FormTodo = () => {
  const { todoList, addTodo } = useTodoContext();
  const [content, setContent] = useState<string>('');

  const [prioritySelected, setPrioritySelected] = useState<PriorityTypeEnum>(
    PriorityTypeEnum.HIGH
  );

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (content === '') return;

    addTodo({
      content: content,
      order: todoList.length + 1,
      priority: prioritySelected,
      status: StatusTypeEnum.TODO,
    });

    //reset
    setContent('');
  };
  return (
    <form className='flex items-stretch' onSubmit={handleSubmit}>
      <input
        type='text'
        name=''
        id=''
        className='flex-1 border px-3 py-1'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Select
        defaultValue={priorityArr[0]}
        menuPlacement='top'
        menuPosition='absolute'
        placeholder='Select priority...'
        onChange={(priority) => setPrioritySelected(priority.value)}
        styles={colorStyles}
        options={priorityArr}
      />
      <button type='submit' className='text-center text-white bg-blue-500 px-4'>
        Add
      </button>
    </form>
  );
};

export default FormTodo;
