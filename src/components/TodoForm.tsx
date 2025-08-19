import { useState, KeyboardEvent } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Todo } from '@/types/todo';

interface TodoFormProps {
  onAdd: (text: string, priority: Todo['priority']) => void;
}

export const TodoForm = ({ onAdd }: TodoFormProps) => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<Todo['priority']>('medium');

  const handleSubmit = () => {
    if (text.trim()) {
      onAdd(text, priority);
      setText('');
      setPriority('medium');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="flex gap-3 mb-6 animate-fade-in">
      <div className="flex-1">
        <Input
          type="text"
          placeholder="Add a new task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          className="h-12 text-base border-border bg-card focus:ring-2 focus:ring-primary/20 transition-all duration-200"
        />
      </div>
      <Select value={priority} onValueChange={(value: Todo['priority']) => setPriority(value)}>
        <SelectTrigger className="w-32 h-12 bg-card border-border">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="low">Low</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="high">High</SelectItem>
        </SelectContent>
      </Select>
      <Button
        onClick={handleSubmit}
        className="h-12 px-6 gradient-bg hover:gradient-hover shadow-primary"
        disabled={!text.trim()}
      >
        <Plus className="h-5 w-5 mr-2" />
        Add
      </Button>
    </div>
  );
};