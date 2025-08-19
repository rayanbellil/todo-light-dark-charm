import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TodoFilter } from '@/types/todo';
import { cn } from '@/lib/utils';

interface TodoFiltersProps {
  currentFilter: TodoFilter;
  onFilterChange: (filter: TodoFilter) => void;
  stats: {
    total: number;
    active: number;
    completed: number;
  };
  onClearCompleted: () => void;
}

export const TodoFilters = ({
  currentFilter,
  onFilterChange,
  stats,
  onClearCompleted
}: TodoFiltersProps) => {
  const filters: { key: TodoFilter; label: string; count: number }[] = [
    { key: 'all', label: 'All', count: stats.total },
    { key: 'active', label: 'Active', count: stats.active },
    { key: 'completed', label: 'Completed', count: stats.completed }
  ];

  return (
    <div className="flex items-center justify-between p-4 bg-card border border-border rounded-lg animate-fade-in">
      <div className="flex items-center gap-2">
        {filters.map(({ key, label, count }) => (
          <Button
            key={key}
            onClick={() => onFilterChange(key)}
            variant={currentFilter === key ? 'default' : 'ghost'}
            size="sm"
            className={cn(
              'h-8 px-3 rounded-md transition-all duration-200',
              currentFilter === key
                ? 'gradient-bg shadow-primary text-primary-foreground'
                : 'hover:bg-accent'
            )}
          >
            {label}
            <Badge
              variant="secondary"
              className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
            >
              {count}
            </Badge>
          </Button>
        ))}
      </div>

      {stats.completed > 0 && (
        <Button
          onClick={onClearCompleted}
          variant="ghost"
          size="sm"
          className="text-destructive hover:bg-destructive/10 hover:text-destructive"
        >
          Clear completed
        </Button>
      )}
    </div>
  );
};