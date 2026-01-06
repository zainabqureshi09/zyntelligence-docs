import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PythonExamples() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">
            Python
          </span>
        </div>

        <h1 className="doc-heading">Python Examples</h1>

        <p className="doc-paragraph">
          Here are practical examples that combine everything you've learned. These examples
          demonstrate real-world applications of Python concepts.
        </p>

        <h2 className="doc-subheading">Example 1: Calculator</h2>

        <p className="doc-paragraph">
          A simple calculator that performs basic arithmetic operations:
        </p>

        <CodeBlock
          language="python"
          title="calculator.py"
          code={`def calculator():
    """A simple calculator with basic operations."""
    
    def add(x, y):
        return x + y
    
    def subtract(x, y):
        return x - y
    
    def multiply(x, y):
        return x * y
    
    def divide(x, y):
        if y == 0:
            return "Error: Division by zero"
        return x / y
    
    # Get user input
    print("Select operation:")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")
    
    choice = input("Enter choice (1-4): ")
    
    if choice in ('1', '2', '3', '4'):
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))
        
        if choice == '1':
            print(f"{num1} + {num2} = {add(num1, num2)}")
        elif choice == '2':
            print(f"{num1} - {num2} = {subtract(num1, num2)}")
        elif choice == '3':
            print(f"{num1} × {num2} = {multiply(num1, num2)}")
        elif choice == '4':
            print(f"{num1} ÷ {num2} = {divide(num1, num2)}")
    else:
        print("Invalid input")

# Run the calculator
calculator()`}
        />

        <h2 className="doc-subheading">Example 2: Guess the Number Game</h2>

        <CodeBlock
          language="python"
          title="guess_game.py"
          code={`import random

def guess_the_number():
    """A number guessing game."""
    
    secret = random.randint(1, 100)
    attempts = 0
    max_attempts = 10
    
    print("Welcome to Guess the Number!")
    print(f"I'm thinking of a number between 1 and 100.")
    print(f"You have {max_attempts} attempts.")
    
    while attempts < max_attempts:
        try:
            guess = int(input("\\nYour guess: "))
            attempts += 1
            
            if guess < secret:
                print("Too low! Try higher.")
            elif guess > secret:
                print("Too high! Try lower.")
            else:
                print(f"\\nCongratulations! You got it in {attempts} attempts!")
                return
            
            remaining = max_attempts - attempts
            if remaining > 0:
                print(f"Attempts remaining: {remaining}")
        
        except ValueError:
            print("Please enter a valid number.")
    
    print(f"\\nGame over! The number was {secret}.")

guess_the_number()`}
        />

        <h2 className="doc-subheading">Example 3: To-Do List</h2>

        <CodeBlock
          language="python"
          title="todo_list.py"
          code={`def todo_app():
    """A simple to-do list application."""
    
    tasks = []
    
    def show_menu():
        print("\\n--- To-Do List ---")
        print("1. Add task")
        print("2. View tasks")
        print("3. Complete task")
        print("4. Delete task")
        print("5. Exit")
    
    def add_task():
        task = input("Enter task: ")
        tasks.append({"task": task, "done": False})
        print(f"Added: {task}")
    
    def view_tasks():
        if not tasks:
            print("No tasks yet!")
            return
        
        print("\\nYour tasks:")
        for i, t in enumerate(tasks, 1):
            status = "✓" if t["done"] else " "
            print(f"  {i}. [{status}] {t['task']}")
    
    def complete_task():
        view_tasks()
        if tasks:
            try:
                num = int(input("Task number to complete: "))
                if 1 <= num <= len(tasks):
                    tasks[num-1]["done"] = True
                    print("Task marked as complete!")
            except ValueError:
                print("Invalid input")
    
    def delete_task():
        view_tasks()
        if tasks:
            try:
                num = int(input("Task number to delete: "))
                if 1 <= num <= len(tasks):
                    removed = tasks.pop(num-1)
                    print(f"Deleted: {removed['task']}")
            except ValueError:
                print("Invalid input")
    
    while True:
        show_menu()
        choice = input("\\nChoice: ")
        
        if choice == "1":
            add_task()
        elif choice == "2":
            view_tasks()
        elif choice == "3":
            complete_task()
        elif choice == "4":
            delete_task()
        elif choice == "5":
            print("Goodbye!")
            break

todo_app()`}
        />

        <h2 className="doc-subheading">Example 4: Fibonacci Sequence</h2>

        <CodeBlock
          language="python"
          title="fibonacci.py"
          code={`def fibonacci(n):
    """
    Generate Fibonacci sequence up to n numbers.
    
    The Fibonacci sequence: each number is the sum 
    of the two preceding numbers.
    """
    
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    
    sequence = [0, 1]
    
    while len(sequence) < n:
        next_num = sequence[-1] + sequence[-2]
        sequence.append(next_num)
    
    return sequence

# Generate first 15 Fibonacci numbers
fib_numbers = fibonacci(15)
print("Fibonacci sequence:")
print(fib_numbers)

# Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]

# Recursive version
def fib_recursive(n):
    """Calculate nth Fibonacci number recursively."""
    if n <= 1:
        return n
    return fib_recursive(n-1) + fib_recursive(n-2)

# Print first 10 using recursive function
print("\\nUsing recursion:")
for i in range(10):
    print(fib_recursive(i), end=" ")`}
        />

        <h2 className="doc-subheading">Example 5: Word Counter</h2>

        <CodeBlock
          language="python"
          title="word_counter.py"
          code={`def word_counter(text):
    """
    Analyze text and return word statistics.
    """
    
    # Clean and split text
    words = text.lower().split()
    
    # Remove punctuation from words
    clean_words = []
    for word in words:
        clean = ''.join(c for c in word if c.isalnum())
        if clean:
            clean_words.append(clean)
    
    # Count word frequency
    word_freq = {}
    for word in clean_words:
        word_freq[word] = word_freq.get(word, 0) + 1
    
    # Sort by frequency
    sorted_words = sorted(
        word_freq.items(), 
        key=lambda x: x[1], 
        reverse=True
    )
    
    return {
        "total_words": len(clean_words),
        "unique_words": len(word_freq),
        "top_words": sorted_words[:5],
        "word_frequency": word_freq
    }

# Example usage
sample_text = """
Python is a great programming language. 
Python is easy to learn. Programming with Python is fun.
Learning Python opens many opportunities in programming.
"""

result = word_counter(sample_text)

print(f"Total words: {result['total_words']}")
print(f"Unique words: {result['unique_words']}")
print("\\nTop 5 words:")
for word, count in result['top_words']:
    print(f"  '{word}': {count} times")`}
        />

        <div className="mt-8 p-6 rounded-lg bg-primary/5 border border-primary/20">
          <h3 className="font-semibold text-foreground mb-2">Practice Makes Perfect</h3>
          <p className="text-muted-foreground mb-4">
            Try modifying these examples or creating your own variations. 
            The best way to learn programming is by writing code!
          </p>
        </div>

        <div className="flex justify-start mt-8">
          <Button variant="outline" asChild>
            <Link to="/docs/python/functions">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Functions
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
