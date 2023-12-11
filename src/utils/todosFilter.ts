import { Filter } from '../types/Enum';
import { Todo } from '../types/Todo';

export function filteredTodos(todos: Todo[], selectedFilter: string) {
  switch (selectedFilter) {
    case Filter.Active:
      return todos.filter(item => !item.completed);
    case Filter.Complited:
      return todos.filter(item => item.completed);
    default:
      return todos;
  }
}
