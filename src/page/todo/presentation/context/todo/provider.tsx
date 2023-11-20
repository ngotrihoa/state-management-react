import { useState } from 'react';
import TodoContext, { SetState } from './context';

export const TodoContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [inputValue, setInputValue] = useState<string>();

  return (
    <TodoContext.Provider
      value={{
        inputValue,
        onChangeInputValue: setInputValue as SetState<string>,
        addTodo: () => {},
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
