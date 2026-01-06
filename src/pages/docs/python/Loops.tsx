import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PythonLoops() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">
            Python
          </span>
        </div>

        <h1 className="doc-heading">Python Loops</h1>

        <p className="doc-paragraph">
          Loops are used to execute a block of code repeatedly. Python has two primitive loop
          commands: <code className="inline-code">for</code> loops and <code className="inline-code">while</code> loops.
        </p>

        <h2 className="doc-subheading">For Loop</h2>

        <p className="doc-paragraph">
          A <code className="inline-code">for</code> loop iterates over a sequence (list, tuple, string, etc.):
        </p>

        <CodeBlock
          language="python"
          title="For loop basics"
          code={`# Loop through a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# Output:
# apple
# banana
# cherry

# Loop through a string
for char in "Python":
    print(char)

# Output: P y t h o n (each on new line)`}
        />

        <h2 className="doc-subheading">The range() Function</h2>

        <p className="doc-paragraph">
          To loop through a set of code a specified number of times, use the <code className="inline-code">range()</code> function:
        </p>

        <CodeBlock
          language="python"
          title="Using range()"
          code={`# range(stop) - 0 to stop-1
for i in range(5):
    print(i)
# Output: 0 1 2 3 4

# range(start, stop)
for i in range(2, 6):
    print(i)
# Output: 2 3 4 5

# range(start, stop, step)
for i in range(0, 10, 2):
    print(i)
# Output: 0 2 4 6 8

# Counting backwards
for i in range(5, 0, -1):
    print(i)
# Output: 5 4 3 2 1`}
        />

        <h2 className="doc-subheading">While Loop</h2>

        <p className="doc-paragraph">
          A <code className="inline-code">while</code> loop executes as long as a condition is True:
        </p>

        <CodeBlock
          language="python"
          title="While loop"
          code={`# Basic while loop
count = 0
while count < 5:
    print(count)
    count += 1

# Output: 0 1 2 3 4

# Using while with user input (conceptual)
password = ""
while password != "secret":
    password = input("Enter password: ")
print("Access granted!")`}
        />

        <h2 className="doc-subheading">Break Statement</h2>

        <p className="doc-paragraph">
          The <code className="inline-code">break</code> statement stops the loop before it has looped through all items:
        </p>

        <CodeBlock
          language="python"
          title="Break statement"
          code={`# Break out of a for loop
for i in range(10):
    if i == 5:
        break
    print(i)
# Output: 0 1 2 3 4

# Break out of a while loop
count = 0
while True:
    print(count)
    count += 1
    if count >= 3:
        break
# Output: 0 1 2`}
        />

        <h2 className="doc-subheading">Continue Statement</h2>

        <p className="doc-paragraph">
          The <code className="inline-code">continue</code> statement skips the current iteration and moves to the next:
        </p>

        <CodeBlock
          language="python"
          title="Continue statement"
          code={`# Skip even numbers
for i in range(6):
    if i % 2 == 0:
        continue
    print(i)
# Output: 1 3 5

# Skip a specific value
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    if fruit == "banana":
        continue
    print(fruit)
# Output: apple cherry`}
        />

        <h2 className="doc-subheading">Else in Loops</h2>

        <p className="doc-paragraph">
          Python allows an <code className="inline-code">else</code> block after loops, which executes when the loop
          completes normally (without a break):
        </p>

        <CodeBlock
          language="python"
          title="Else with loops"
          code={`# Else with for loop
for i in range(5):
    print(i)
else:
    print("Loop completed!")

# Output: 0 1 2 3 4 Loop completed!

# Else doesn't run with break
for i in range(5):
    if i == 3:
        break
    print(i)
else:
    print("This won't print")

# Output: 0 1 2`}
        />

        <h2 className="doc-subheading">Nested Loops</h2>

        <CodeBlock
          language="python"
          title="Nested loops"
          code={`# Multiplication table
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i} x {j} = {i*j}")
    print()  # Empty line between groups

# Output:
# 1 x 1 = 1
# 1 x 2 = 2
# 1 x 3 = 3
#
# 2 x 1 = 2
# 2 x 2 = 4
# 2 x 3 = 6
# ... etc`}
        />

        <div className="flex justify-between mt-8">
          <Button variant="outline" asChild>
            <Link to="/docs/python/conditions">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Conditions
            </Link>
          </Button>
          <Button asChild>
            <Link to="/docs/python/functions">
              Next: Functions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
