import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem/TodoItem';
import { TempoTodoItem } from '../TempoTodoItem/TempoTodoItem';
import { filteredTodos } from '../../utils/todosFilter';

type Props = {
  todos: Todo[];
  selectedFilter: string;
  tempoTodo: Todo | null;
};

export const TodoList: React.FC<Props> = ({
  todos,
  selectedFilter,
  tempoTodo,
}) => {
  const updatedTodos = filteredTodos(todos, selectedFilter);

  return (
    <section className="todoapp__main">
      {updatedTodos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
      {!!tempoTodo && (
        <TempoTodoItem tempoTodo={tempoTodo} key={tempoTodo.id} />
      )}
    </section>
  );
};
