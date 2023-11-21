import TodoItem from '../TodoItem';

const TodoList = () => {
  const todoListStore = [];
  const todoFilter = [];
  const todoListFiltered: any[] = [];
  // const todoListFiltered = todoListStore.filter((todo: TodoListProps) => {
  //   let check = true;
  //   if (todoFilter.key && todoFilter.key !== '')
  //     check = todo.content.toLowerCase().includes(todoFilter.key);

  //   if (todoFilter.status !== 'all')
  //     check = check && todo.status === todoFilter.status;

  //   if (todoFilter.priorities && todoFilter.priorities.length > 0)
  //     check = check && todoFilter.priorities.includes(todo.priority);

  //   return check;
  // });

  const handleChange = (id: string) => {
    // dispatch(toggleStatusTodo(id));
  };

  return (
    <div className='flex-1 flex flex-col gap-1 overflow-y-auto'>
      {todoListFiltered.map((todo: any) => (
        <TodoItem
          key={todo.id}
          content={todo.content}
          id={todo.id}
          order={todo.numOrder}
          onChange={() => {
            // handleChange(todo.id)
          }}
          priority={todo.priority}
          status={todo.status}
          onDelete={() => {
            // dispatch(deleteTodoById(todo.id));
          }}
        />
      ))}
    </div>
  );
};

export default TodoList;
