import { Todo } from "@/types/todos";

const TodoItem = ({ todo }: { todo: Todo }) => {
  const { id, title, completed } = todo;

  return (
    <div className="p-4">
      <p>Todo #{id}</p>
      <p>{title}</p>
      <p>was completed: {completed}</p>
    </div>
  );
};

export default TodoItem;
