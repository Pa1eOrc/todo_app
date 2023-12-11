import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem/TodoItem';
import { TempoTodoItem } from '../TempoTodoItem/TempoTodoItem';
import { filteredTodos } from '../../utils/todosFilter';

import './TodoList.scss';

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
      <TransitionGroup>
        {updatedTodos.map(todo => (
          <CSSTransition
            key={todo.id}
            classNames="todo"
            timeout={300}
          >
            <TodoItem todo={todo} />
          </CSSTransition>
        ))}
      </TransitionGroup>
      {!!tempoTodo && (
        <CSSTransition key={tempoTodo.id} classNames="todo" timeout={500}>
          <TempoTodoItem tempoTodo={tempoTodo} />
        </CSSTransition>
      )}
    </section>
  );
};
