import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PythonVariables() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">
            Python
          </span>
        </div>

        <h1 className="doc-heading">Python Variables</h1>

        <p className="doc-paragraph">
          Variables are containers for storing data values. In Python, you don't need to declare
          a variable before using it or specify its type. A variable is created the moment you
          first assign a value to it.
        </p>

        <h2 className="doc-subheading">Creating Variables</h2>

        <CodeBlock
          language="python"
          title="Creating variables"
          code={`# String variable
name = "Alice"

# Integer variable
age = 25

# Float variable
height = 5.9

# Boolean variable
is_student = True

# Print all variables
print(name)      # Output: Alice
print(age)       # Output: 25
print(height)    # Output: 5.9
print(is_student) # Output: True`}
        />

        <h2 className="doc-subheading">Variable Naming Rules</h2>

        <ul className="doc-list">
          <li>Must start with a letter or underscore (_)</li>
          <li>Cannot start with a number</li>
          <li>Can only contain alphanumeric characters and underscores</li>
          <li>Case-sensitive (age, Age, and AGE are different variables)</li>
          <li>Cannot be a Python keyword</li>
        </ul>

        <CodeBlock
          language="python"
          title="Valid variable names"
          code={`# Valid variable names
myvar = "John"
my_var = "John"
_my_var = "John"
myVar = "John"
MYVAR = "John"
myvar2 = "John"

# Invalid variable names (would cause errors)
# 2myvar = "John"    # Cannot start with number
# my-var = "John"    # Hyphens not allowed
# my var = "John"    # Spaces not allowed`}
        />

        <h2 className="doc-subheading">Multiple Assignment</h2>

        <p className="doc-paragraph">
          Python allows you to assign values to multiple variables in one line:
        </p>

        <CodeBlock
          language="python"
          title="Multiple assignment"
          code={`# Assign different values
x, y, z = "Orange", "Banana", "Cherry"
print(x)  # Output: Orange
print(y)  # Output: Banana
print(z)  # Output: Cherry

# Assign same value
a = b = c = "Same"
print(a)  # Output: Same
print(b)  # Output: Same
print(c)  # Output: Same`}
        />

        <h2 className="doc-subheading">Data Types</h2>

        <p className="doc-paragraph">
          Python has several built-in data types. You can check a variable's type using the
          <code className="inline-code">type()</code> function:
        </p>

        <CodeBlock
          language="python"
          title="Data types"
          code={`# Numeric types
integer_num = 10          # int
float_num = 10.5          # float
complex_num = 1 + 2j      # complex

# Sequence types
my_string = "Hello"       # str
my_list = [1, 2, 3]       # list
my_tuple = (1, 2, 3)      # tuple

# Mapping type
my_dict = {"name": "John", "age": 25}  # dict

# Boolean type
is_valid = True           # bool

# Check types
print(type(integer_num))  # <class 'int'>
print(type(my_string))    # <class 'str'>
print(type(my_list))      # <class 'list'>
print(type(my_dict))      # <class 'dict'>`}
        />

        <h2 className="doc-subheading">Type Conversion</h2>

        <p className="doc-paragraph">
          You can convert between data types using built-in functions:
        </p>

        <CodeBlock
          language="python"
          title="Type conversion"
          code={`# String to Integer
x = int("10")
print(x, type(x))  # 10 <class 'int'>

# Integer to String
y = str(100)
print(y, type(y))  # 100 <class 'str'>

# Integer to Float
z = float(5)
print(z, type(z))  # 5.0 <class 'float'>

# Float to Integer (truncates decimal)
a = int(3.7)
print(a, type(a))  # 3 <class 'int'>`}
        />

        <div className="flex justify-between mt-8">
          <Button variant="outline" asChild>
            <Link to="/docs/python/syntax">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Syntax
            </Link>
          </Button>
          <Button asChild>
            <Link to="/docs/python/conditions">
              Next: Conditions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
