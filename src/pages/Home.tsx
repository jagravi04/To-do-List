
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Plus, Trash2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

const Home: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (!newTodo.trim()) {
      toast({
        title: "Error",
        description: "Todo item cannot be empty",
        variant: "destructive",
      });
      return;
    }

    const newItem: TodoItem = {
      id: Date.now(),
      text: newTodo,
      completed: false
    };

    setTodos([...todos, newItem]);
    setNewTodo('');
    
    toast({
      title: "Success",
      description: "Todo added successfully",
    });
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
    
    toast({
      title: "Success",
      description: "Todo removed successfully",
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Simple Todo App</h1>
      
      <div className="max-w-md mx-auto">
        <Card className="mb-8">
          <CardHeader className="pb-4">
            <h2 className="text-2xl font-semibold">Add New Todo</h2>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Enter a todo..."
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                className="flex-grow"
              />
              <Button onClick={addTodo} className="bg-brand-600 hover:bg-brand-700">
                <Plus className="h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {todos.length === 0 ? (
            <p className="text-center text-gray-500">No todos yet. Add some!</p>
          ) : (
            todos.map(todo => (
              <Card key={todo.id} className="border-l-4 border-l-brand-600">
                <CardContent className="p-4 flex items-center justify-between">
                  <div 
                    className="flex-grow cursor-pointer"
                    onClick={() => toggleTodo(todo.id)}
                  >
                    <p className={`${todo.completed ? 'line-through text-gray-400' : ''}`}>
                      {todo.text}
                    </p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => deleteTodo(todo.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
