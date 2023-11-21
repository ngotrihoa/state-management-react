import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import Select from 'react-select';
import { convertObjectToArray } from '../../../../../utils';
import { PRIORITY, StatusTodoType } from '../../constants';
import { colourStyles } from './const';

const priorityArr = convertObjectToArray(PRIORITY);

const Filters = () => {
  const keyRef = useRef<HTMLInputElement | null>(null);

  const [statusRadioValue, setStatusRadioValue] = useState<
    StatusTodoType | 'all'
  >('all');

  // const dispatch = useDispatch();

  const handleSearch = (e: SyntheticEvent) => {
    e.preventDefault();

    const key = keyRef.current!.value.trim().toLowerCase();
    // key === '' && dispatch(filterByKey(key));
  };

  useEffect(() => {
    // dispatch(filterByStatus(statusRadioValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusRadioValue]);

  return (
    <div className='mt-8'>
      <form onSubmit={handleSearch}>
        <label htmlFor='search' className='font-semibold'>
          Search
        </label>
        <div className='flex mt-2'>
          <input
            type='text'
            id='search'
            className='flex-1 border px-3 py-1'
            placeholder='Type to search...'
            onChange={() => {
              // dispatch(filterByKey(keyRef.current!.value.trim().toLowerCase()))
            }}
            ref={keyRef}
          />
          <button
            type='submit'
            className='text-center text-white bg-blue-500 px-3'
          >
            Search
          </button>
        </div>
      </form>
      <div className='mt-4'>
        <label htmlFor='' className='font-semibold'>
          Filter By Status
        </label>
        <div className='flex gap-10 mt-2'>
          <div className='flex items-center gap-2'>
            <input
              type='radio'
              name='status'
              id='all'
              checked={statusRadioValue === 'all'}
              onChange={() => setStatusRadioValue('all')}
            />
            <label htmlFor='all'>All</label>
          </div>
          <div className='flex items-center gap-2'>
            <input
              type='radio'
              name='status'
              id='completed'
              checked={statusRadioValue === 'completed'}
              onChange={() => setStatusRadioValue('completed')}
            />
            <label htmlFor='completed'>Completed</label>
          </div>
          <div className='flex items-center gap-2'>
            <input
              type='radio'
              name='status'
              id='todo'
              checked={statusRadioValue === 'todo'}
              onChange={() => setStatusRadioValue('todo')}
            />
            <label htmlFor='todo'>Todo</label>
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <label htmlFor='' className='font-semibold'>
          Filter By Priority
        </label>
        <Select
          closeMenuOnSelect={false}
          isMulti
          placeholder='Select priority...'
          className='mt-2'
          onChange={(value) => {
            // dispatch(filterByPriority(value.map((item: any) => item.value)));
          }}
          styles={colourStyles}
          options={priorityArr}
        />
      </div>
    </div>
  );
};

export default Filters;
