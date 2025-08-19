import { CheckSquare } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { TodoForm } from './TodoForm';
import { TodoItem } from './TodoItem';
import { TodoFilters } from './TodoFilters';
import { useTodos } from '@/hooks/useTodos';

export const TodoApp = () => {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    editTodo,
    deleteTodo,
    clearCompleted,
    stats
  } = useTodos();

  return (
    <div className="min-h-screen gradient-surface">
      <div className="container max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 gradient-bg rounded-xl shadow-primary">
              <CheckSquare className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Modern Todo</h1>
              <p className="text-sm text-muted-foreground">Stay organized and productive</p>
            </div>
          </div>
          <ThemeToggle />
        </div>

        {/* Add Todo Form */}
        <TodoForm onAdd={addTodo} />

        {/* Filters */}
        <div className="mb-6">
          <TodoFilters
            currentFilter={filter}
            onFilterChange={setFilter}
            stats={stats}
            onClearCompleted={clearCompleted}
          />
        </div>

        {/* Todo List */}
        <div className="space-y-3">
          {todos.length === 0 ? (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <CheckSquare className="h-10 w-10 text-muted-foreground" />
              </div>
              <p className="text-lg font-medium text-foreground mb-2">
                {filter === 'completed' && stats.completed === 0
                  ? 'No completed tasks yet'
                  : filter === 'active' && stats.active === 0
                  ? 'All tasks completed! 🎉'
                  : 'No tasks yet'}
              </p>
              <p className="text-muted-foreground">
                {filter === 'all' && stats.total === 0
                  ? 'Add your first task to get started'
                  : filter === 'completed' && stats.completed === 0
                  ? 'Complete some tasks to see them here'
                  : filter === 'active' && stats.active === 0
                  ? 'Great job on staying productive!'
                  : ''}
              </p>
            </div>
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onEdit={editTodo}
                onDelete={deleteTodo}
              />
            ))
          )}
        </div>

        {/* Footer Stats */}
        {stats.total > 0 && (
          <div className="mt-8 text-center text-sm text-muted-foreground animate-fade-in">
            {stats.active} of {stats.total} tasks remaining
          </div>
        )}
      </div>
    </div>
  );
};