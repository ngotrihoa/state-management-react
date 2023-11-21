import { SyntheticEvent, useRef, useState } from 'react';
import Select from 'react-select';
import { convertObjectToArray } from '../../../../../utils';
import { PRIORITY } from '../../constants';
import { colorStyles } from './const';
import { PriorityTypeEnum } from '../../../domain/model';

const priorityArr = convertObjectToArray(PRIORITY);

const FormTodo = () => {
  const inputValue = useRef<HTMLInputElement | null>(null);

  // const todoStore = useSelector((state) => state.todo);

  const [prioritySelected, setPrioritySelected] = useState<PriorityTypeEnum>(
    PriorityTypeEnum.HIGH
  );

  // const dispatch = useDispatch();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const value = inputValue.current!.value.trim();
    if (value === '') return;

    // dispatch(
    //   addTodo({
    //     id: uuidv4(),
    //     content: value,
    //     numOrder: todoStore.totalTodo + 1,
    //     priority: prioritySelected,
    //     status: 'todo',
    //   })
    // );

    //reset
    inputValue.current!.value = '';
  };
  return (
    <form className='flex items-stretch' onSubmit={handleSubmit}>
      <input
        type='text'
        name=''
        id=''
        className='flex-1 border px-3 py-1'
        ref={inputValue}
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
