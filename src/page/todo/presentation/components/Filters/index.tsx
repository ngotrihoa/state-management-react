import { SyntheticEvent, useState } from 'react';
import Select from 'react-select';
import { convertObjectToArray } from '../../../../../utils';
import { StatusTypeEnum } from '../../../domain/model/todo.model';
import { PRIORITY } from '../../constants';
import { useTodoContext } from '../../context/hooks';
import { colourStyles } from './const';

const priorityArr = convertObjectToArray(PRIORITY);

const Filters = () => {
  const { filters, onChangeFilter } = useTodoContext();
  const [searchValue, setSearchValue] = useState(filters.key);

  const handleSearch = (e: SyntheticEvent) => {
    e.preventDefault();

    onChangeFilter((prev) => ({ ...prev, key: searchValue }));
  };

  const onChangeStatusFilter = (status: StatusTypeEnum | 'ALL') => {
    onChangeFilter((prev) => ({ ...prev, status }));
  };

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
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            value={searchValue}
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
              checked={filters.status === 'ALL'}
              onChange={() => {
                onChangeStatusFilter('ALL');
              }}
            />
            <label htmlFor='all'>All</label>
          </div>
          <div className='flex items-center gap-2'>
            <input
              type='radio'
              name='status'
              id='completed'
              checked={filters.status === StatusTypeEnum.COMPLETED}
              onChange={() => {
                onChangeStatusFilter(StatusTypeEnum.COMPLETED);
              }}
            />
            <label htmlFor='completed'>Completed</label>
          </div>
          <div className='flex items-center gap-2'>
            <input
              type='radio'
              name='status'
              id='todo'
              checked={filters.status === StatusTypeEnum.TODO}
              onChange={() => {
                onChangeStatusFilter(StatusTypeEnum.TODO);
              }}
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
            onChangeFilter((prev) => ({
              ...prev,
              priorities: value.map((item: any) => item.value),
            }));
          }}
          styles={colourStyles}
          options={priorityArr}
        />
      </div>
    </div>
  );
};

export default Filters;
