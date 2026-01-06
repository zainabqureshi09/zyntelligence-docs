import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function JavaScriptLoops() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-yellow-400/10 text-yellow-500">
            JavaScript
          </span>
        </div>

        <h1 className="doc-heading">JavaScript Loops</h1>

        <p className="doc-paragraph">
          Loops execute a block of code repeatedly. JavaScript provides several types of loops
          for different use cases.
        </p>

        <h2 className="doc-subheading">For Loop</h2>

        <p className="doc-paragraph">
          The <code className="inline-code">for</code> loop is ideal when you know how many times to iterate:
        </p>

        <CodeBlock
          language="javascript"
          title="for loop"
          code={`// Basic for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Output: 0 1 2 3 4

// Loop through an array
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Counting backwards
for (let i = 5; i > 0; i--) {
    console.log(i);
}
// Output: 5 4 3 2 1

// Skip by 2
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}
// Output: 0 2 4 6 8 10`}
        />

        <h2 className="doc-subheading">For...of Loop</h2>

        <p className="doc-paragraph">
          Use <code className="inline-code">for...of</code> to iterate over iterable objects (arrays, strings, etc.):
        </p>

        <CodeBlock
          language="javascript"
          title="for...of loop"
          code={`// Iterate over array values
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(color);
}
// Output: red green blue

// Iterate over string characters
const word = "Hello";
for (const char of word) {
    console.log(char);
}
// Output: H e l l o

// With index using entries()
for (const [index, color] of colors.entries()) {
    console.log(\`\${index}: \${color}\`);
}
// Output: 0: red  1: green  2: blue`}
        />

        <h2 className="doc-subheading">For...in Loop</h2>

        <p className="doc-paragraph">
          Use <code className="inline-code">for...in</code> to iterate over object properties:
        </p>

        <CodeBlock
          language="javascript"
          title="for...in loop"
          code={`const person = {
    name: "John",
    age: 30,
    city: "NYC"
};

for (const key in person) {
    console.log(\`\${key}: \${person[key]}\`);
}
// Output:
// name: John
// age: 30
// city: NYC

// Note: Avoid using for...in with arrays
// Use for...of instead for arrays`}
        />

        <h2 className="doc-subheading">While Loop</h2>

        <CodeBlock
          language="javascript"
          title="while loop"
          code={`// Basic while loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}
// Output: 0 1 2 3 4

// Unknown number of iterations
let number = 1;
while (number < 100) {
    number *= 2;
    console.log(number);
}
// Output: 2 4 8 16 32 64 128`}
        />

        <h2 className="doc-subheading">Do...While Loop</h2>

        <p className="doc-paragraph">
          The <code className="inline-code">do...while</code> loop executes at least once before checking the condition:
        </p>

        <CodeBlock
          language="javascript"
          title="do...while loop"
          code={`// Executes at least once
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
// Output: 0 1 2 3 4

// Even if condition is false initially
let x = 10;
do {
    console.log("This runs once");
    x++;
} while (x < 5);
// Output: This runs once`}
        />

        <h2 className="doc-subheading">Break and Continue</h2>

        <CodeBlock
          language="javascript"
          title="break and continue"
          code={`// break - exit the loop entirely
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}
// Output: 0 1 2 3 4

// continue - skip current iteration
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i);
}
// Output: 0 1 3 4

// Find first match with break
const numbers = [1, 3, 5, 8, 10];
let firstEven;
for (const num of numbers) {
    if (num % 2 === 0) {
        firstEven = num;
        break;
    }
}
console.log(firstEven); // 8`}
        />

        <h2 className="doc-subheading">Labeled Statements</h2>

        <CodeBlock
          language="javascript"
          title="Labeled statements"
          code={`// Break from nested loops
outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop;
        }
        console.log(\`i=\${i}, j=\${j}\`);
    }
}
// Output:
// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=1, j=0`}
        />

        <h2 className="doc-subheading">Array Methods (Modern Looping)</h2>

        <p className="doc-paragraph">
          Modern JavaScript prefers array methods over traditional loops:
        </p>

        <CodeBlock
          language="javascript"
          title="Array methods"
          code={`const numbers = [1, 2, 3, 4, 5];

// forEach - execute function for each element
numbers.forEach((num, index) => {
    console.log(\`Index \${index}: \${num}\`);
});

// map - transform each element
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter - keep elements that pass test
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// reduce - accumulate to single value
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

// find - first element that passes test
const firstOver3 = numbers.find(num => num > 3);
console.log(firstOver3); // 4

// some - check if any element passes
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true

// every - check if all elements pass
const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true`}
        />

        <div className="flex justify-between mt-8">
          <Button variant="outline" asChild>
            <Link to="/docs/javascript/conditions">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Conditions
            </Link>
          </Button>
          <Button asChild>
            <Link to="/docs/javascript/functions">
              Next: Functions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
