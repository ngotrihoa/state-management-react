import React, { SyntheticEvent, useRef } from 'react';
import Select from 'react-select';
import { priority } from '../../constants/const';
import { convertObjectToArray } from '../../utils';
import { colourStyles } from './const';

const priorityArr = convertObjectToArray(priority);

const FormTodo = () => {
  const inputValue = useRef<HTMLInputElement | null>(null);
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(inputValue.current!.value);
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
        className=''
        styles={colourStyles}
        options={priorityArr}
      />
      <button type='submit' className='text-center text-white bg-blue-500 px-4'>
        Add
      </button>
    </form>
  );
};

export default FormTodo;
