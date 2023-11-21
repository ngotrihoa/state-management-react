import Loading from '../../../components/Loading';
import Filters from './components/Filters';
import FormTodo from './components/FormTodo';
import TodoList from './components/TodoList';
import { TodoContextProvider } from './context';
import { useTodoContext } from './context/hooks';

const TodoPageWrapper = () => {
  return (
    <TodoContextProvider>
      <TodoPage />
    </TodoContextProvider>
  );
};

const TodoPage = () => {
  const { isFetching } = useTodoContext();
  return (
    <>
      <div className='w-[500px] mt-[5vh] mx-auto p-5 rounded-md h-[90vh] bg-white shadow-[0_0_10px_4px_#bfbfbf] flex flex-col '>
        <h1 className='text-3xl font-bold text-center'>
          TODO APP
          <br />
          CLEAN ARCHITECTURE
        </h1>
        <Filters />
        <div className='w-full h-[1px] bg-gray-200 my-6'></div>
        <TodoList />
        <FormTodo />
      </div>
      {isFetching && <Loading />}
    </>
  );
};

export default TodoPageWrapper;
