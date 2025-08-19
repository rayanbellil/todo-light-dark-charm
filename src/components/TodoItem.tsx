import { useState, KeyboardEvent } from 'react';
import { Check, Edit2, Trash2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Todo } from '@/types/todo';
import { cn } from '@/lib/utils';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = ({ todo, onToggle, onEdit, onDelete }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim() && editText !== todo.text) {
      onEdit(todo.id, editText);
    }
    setIsEditing(false);
    setEditText(todo.text);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditText(todo.text);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  const getPriorityColor = (priority: Todo['priority']) => {
    switch (priority) {
      case 'high':
        return 'bg-destructive text-destructive-foreground';
      case 'medium':
        return 'bg-yellow-500 text-white';
      case 'low':
        return 'bg-success text-success-foreground';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <div
      className={cn(
        'todo-item animate-scale-in group',
        todo.completed && 'todo-item-completed'
      )}
    >
      <div className="flex items-center gap-3">
        {/* Checkbox */}
        <button
          onClick={() => onToggle(todo.id)}
          className={cn(
            'flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all duration-200',
            todo.completed
              ? 'bg-success border-success text-success-foreground'
              : 'border-border hover:border-primary'
          )}
          aria-label={`Mark as ${todo.completed ? 'incomplete' : 'complete'}`}
        >
          {todo.completed && <Check className="h-4 w-4" />}
        </button>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {isEditing ? (
            <Input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={handleKeyDown}
              onBlur={handleEdit}
              className="h-8 text-sm"
              autoFocus
            />
          ) : (
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  'text-sm transition-all duration-200',
                  todo.completed
                    ? 'line-through text-muted-foreground'
                    : 'text-foreground'
                )}
              >
                {todo.text}
              </span>
              {todo.priority && (
                <Badge
                  variant="secondary"
                  className={cn('text-xs px-2 py-0.5', getPriorityColor(todo.priority))}
                >
                  {todo.priority}
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {isEditing ? (
            <>
              <Button
                onClick={handleEdit}
                size="sm"
                variant="ghost"
                className="h-8 w-8 p-0 hover:bg-success/10"
              >
                <Check className="h-4 w-4 text-success" />
              </Button>
              <Button
                onClick={handleCancel}
                size="sm"
                variant="ghost"
                className="h-8 w-8 p-0 hover:bg-destructive/10"
              >
                <X className="h-4 w-4 text-destructive" />
              </Button>
            </>
          ) : (
            <>
              <Button
                onClick={() => setIsEditing(true)}
                size="sm"
                variant="ghost"
                className="h-8 w-8 p-0 hover:bg-accent"
                disabled={todo.completed}
              >
                <Edit2 className="h-4 w-4" />
              </Button>
              <Button
                onClick={() => onDelete(todo.id)}
                size="sm"
                variant="ghost"
                className="h-8 w-8 p-0 hover:bg-destructive/10"
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};