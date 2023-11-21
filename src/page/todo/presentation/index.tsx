import Filters from './components/Filters';
import FormTodo from './components/FormTodo';
import TodoList from './components/TodoList';
import { TodoContextProvider } from './context';

const TodoPage = () => {
  return (
    <TodoContextProvider>
      <div className='w-[500px] mt-[5vh] mx-auto p-5 rounded-md h-[90vh] bg-white shadow-[0_0_10px_4px_#bfbfbf] flex flex-col '>
        <h1 className='text-3xl font-bold text-center'>
          TODO APP
          {/* <br />
        CLEAN ARCHITECTURE */}
        </h1>
        <Filters />
        <div className='w-full h-[1px] bg-gray-200 my-6'></div>
        <TodoList />
        <FormTodo />
      </div>
    </TodoContextProvider>
  );
};

export default TodoPage;
