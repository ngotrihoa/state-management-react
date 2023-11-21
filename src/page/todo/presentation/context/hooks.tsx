import React from 'react';
import TodoContext from './context';

export const useTodoContext = () => {
  const context = React.useContext(TodoContext);
  if (!context) {
    throw new Error(
      'useTodoContext must be used within an TodoContextProvider'
    );
  }
  return context;
};
