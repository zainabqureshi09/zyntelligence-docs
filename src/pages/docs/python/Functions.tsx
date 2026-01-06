import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PythonFunctions() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">
            Python
          </span>
        </div>

        <h1 className="doc-heading">Python Functions</h1>

        <p className="doc-paragraph">
          A function is a block of reusable code that performs a specific task. Functions help
          organize code, make it reusable, and easier to understand.
        </p>

        <h2 className="doc-subheading">Defining a Function</h2>

        <p className="doc-paragraph">
          Use the <code className="inline-code">def</code> keyword to define a function:
        </p>

        <CodeBlock
          language="python"
          title="Basic function"
          code={`# Define a function
def greet():
    print("Hello, World!")

# Call the function
greet()  # Output: Hello, World!

# Functions can be called multiple times
greet()  # Output: Hello, World!
greet()  # Output: Hello, World!`}
        />

        <h2 className="doc-subheading">Parameters and Arguments</h2>

        <p className="doc-paragraph">
          Functions can accept parameters to make them more flexible:
        </p>

        <CodeBlock
          language="python"
          title="Function parameters"
          code={`# Function with one parameter
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")  # Output: Hello, Alice!
greet("Bob")    # Output: Hello, Bob!

# Function with multiple parameters
def add_numbers(a, b):
    result = a + b
    print(f"{a} + {b} = {result}")

add_numbers(5, 3)   # Output: 5 + 3 = 8
add_numbers(10, 20) # Output: 10 + 20 = 30`}
        />

        <h2 className="doc-subheading">Default Parameters</h2>

        <CodeBlock
          language="python"
          title="Default parameter values"
          code={`# Default parameter value
def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet("Alice")              # Output: Hello, Alice!
greet("Bob", "Good morning") # Output: Good morning, Bob!

# Multiple defaults
def create_user(name, age=0, country="Unknown"):
    print(f"Name: {name}, Age: {age}, Country: {country}")

create_user("Alice")
create_user("Bob", 25)
create_user("Charlie", 30, "USA")`}
        />

        <h2 className="doc-subheading">Return Values</h2>

        <p className="doc-paragraph">
          Functions can return values using the <code className="inline-code">return</code> statement:
        </p>

        <CodeBlock
          language="python"
          title="Return values"
          code={`# Function that returns a value
def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # Output: 8

# Return in expressions
total = add(10, 20) + add(5, 5)
print(total)  # Output: 40

# Return multiple values
def get_min_max(numbers):
    return min(numbers), max(numbers)

minimum, maximum = get_min_max([3, 1, 4, 1, 5, 9])
print(f"Min: {minimum}, Max: {maximum}")
# Output: Min: 1, Max: 9`}
        />

        <h2 className="doc-subheading">Keyword Arguments</h2>

        <CodeBlock
          language="python"
          title="Keyword arguments"
          code={`def describe_pet(animal, name):
    print(f"I have a {animal} named {name}")

# Positional arguments (order matters)
describe_pet("cat", "Whiskers")

# Keyword arguments (order doesn't matter)
describe_pet(name="Buddy", animal="dog")

# Mix of both (positional first)
describe_pet("hamster", name="Fluffy")`}
        />

        <h2 className="doc-subheading">*args and **kwargs</h2>

        <p className="doc-paragraph">
          Use <code className="inline-code">*args</code> for variable positional arguments and
          <code className="inline-code">**kwargs</code> for variable keyword arguments:
        </p>

        <CodeBlock
          language="python"
          title="*args and **kwargs"
          code={`# *args - accepts any number of positional arguments
def sum_all(*args):
    return sum(args)

print(sum_all(1, 2, 3))        # Output: 6
print(sum_all(1, 2, 3, 4, 5))  # Output: 15

# **kwargs - accepts any number of keyword arguments
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=25, city="NYC")
# Output:
# name: Alice
# age: 25
# city: NYC

# Combining both
def combined(*args, **kwargs):
    print(f"Args: {args}")
    print(f"Kwargs: {kwargs}")

combined(1, 2, 3, name="Alice", age=25)`}
        />

        <h2 className="doc-subheading">Lambda Functions</h2>

        <p className="doc-paragraph">
          Lambda functions are small anonymous functions defined with the <code className="inline-code">lambda</code> keyword:
        </p>

        <CodeBlock
          language="python"
          title="Lambda functions"
          code={`# Basic lambda
square = lambda x: x ** 2
print(square(5))  # Output: 25

# Lambda with multiple arguments
add = lambda a, b: a + b
print(add(3, 4))  # Output: 7

# Common use: sorting
students = [
    {"name": "Alice", "grade": 85},
    {"name": "Bob", "grade": 92},
    {"name": "Charlie", "grade": 78}
]

# Sort by grade
sorted_students = sorted(students, key=lambda x: x["grade"])
for student in sorted_students:
    print(f"{student['name']}: {student['grade']}")`}
        />

        <h2 className="doc-subheading">Docstrings</h2>

        <CodeBlock
          language="python"
          title="Function documentation"
          code={`def calculate_area(length, width):
    """
    Calculate the area of a rectangle.
    
    Parameters:
        length (float): The length of the rectangle
        width (float): The width of the rectangle
    
    Returns:
        float: The area of the rectangle
    """
    return length * width

# Access the docstring
print(calculate_area.__doc__)

# Use help() to see documentation
help(calculate_area)`}
        />

        <div className="flex justify-between mt-8">
          <Button variant="outline" asChild>
            <Link to="/docs/python/loops">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Loops
            </Link>
          </Button>
          <Button asChild>
            <Link to="/docs/python/examples">
              Next: Examples
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
