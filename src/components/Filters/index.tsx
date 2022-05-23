import React from 'react';

const Filters = () => {
  return (
    <div className='mt-8'>
      <div className=''>
        <label htmlFor='search' className='font-semibold'>
          Search
        </label>
        <div className='flex mt-1'>
          <input type='text' id='search' className='flex-1 border px-3 py-1' />
          <button className='text-center text-white bg-blue-500 px-3'>
            Search
          </button>
        </div>
      </div>
      <div className='mt-4'>
        <label htmlFor='' className='font-semibold'>
          Filter By Status
        </label>
        <div className='flex gap-10'>
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
        <select name='cars' id='cars' multiple className='flex'>
          <option value='volvo'>Volvo</option>
          <option value='saab'>Saab</option>
          <option value='opel'>Opel</option>
          <option value='audi'>Audi</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
