import React, { SyntheticEvent, useRef } from 'react';
import Select from 'react-select';
import { PRIORITY } from '../../constants/const';
import { convertObjectToArray } from '../../utils';
import { colourStyles } from './const';

const priorityArr = convertObjectToArray(PRIORITY);

const Filters = () => {
  const keySeach = useRef<HTMLInputElement | null>(null);
  const handleSearch = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log('🚀 ~ keySeach', keySeach.current!.value);
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
            ref={keySeach}
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
            <input type='radio' name='status' id='all' />
            <label htmlFor='all'>All</label>
          </div>
          <div className='flex items-center gap-2'>
            <input type='radio' name='status' id='completed' />
            <label htmlFor='completed'>Completed</label>
          </div>
          <div className='flex items-center gap-2'>
            <input type='radio' name='status' id='todo' />
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
          styles={colourStyles}
          options={priorityArr}
        />
      </div>
    </div>
  );
};

export default Filters;
