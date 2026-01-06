import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function JavaScriptFunctions() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-yellow-400/10 text-yellow-500">
            JavaScript
          </span>
        </div>

        <h1 className="doc-heading">JavaScript Functions</h1>

        <p className="doc-paragraph">
          Functions are reusable blocks of code that perform specific tasks. They are fundamental
          to JavaScript and can be defined in several ways.
        </p>

        <h2 className="doc-subheading">Function Declaration</h2>

        <CodeBlock
          language="javascript"
          title="Function declaration"
          code={`// Basic function declaration
function greet() {
    console.log("Hello, World!");
}

greet(); // Call the function

// Function with parameters
function greetPerson(name) {
    console.log(\`Hello, \${name}!\`);
}

greetPerson("Alice"); // Hello, Alice!

// Function with return value
function add(a, b) {
    return a + b;
}

const sum = add(5, 3);
console.log(sum); // 8`}
        />

        <h2 className="doc-subheading">Function Expression</h2>

        <CodeBlock
          language="javascript"
          title="Function expression"
          code={`// Anonymous function expression
const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(4, 5)); // 20

// Named function expression
const factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
};

console.log(factorial(5)); // 120`}
        />

        <h2 className="doc-subheading">Arrow Functions</h2>

        <p className="doc-paragraph">
          Arrow functions provide a shorter syntax and don't have their own <code className="inline-code">this</code>:
        </p>

        <CodeBlock
          language="javascript"
          title="Arrow functions"
          code={`// Basic arrow function
const greet = () => {
    console.log("Hello!");
};

// With parameters
const add = (a, b) => {
    return a + b;
};

// Single parameter - parentheses optional
const square = x => {
    return x * x;
};

// Implicit return (single expression)
const double = x => x * 2;
const sum = (a, b) => a + b;

console.log(double(5));  // 10
console.log(sum(3, 4));  // 7

// Returning objects (wrap in parentheses)
const createUser = (name, age) => ({
    name: name,
    age: age
});

console.log(createUser("John", 25));`}
        />

        <h2 className="doc-subheading">Default Parameters</h2>

        <CodeBlock
          language="javascript"
          title="Default parameters"
          code={`// Default parameter values
function greet(name = "Guest", greeting = "Hello") {
    console.log(\`\${greeting}, \${name}!\`);
}

greet();                    // Hello, Guest!
greet("Alice");             // Hello, Alice!
greet("Bob", "Hi");         // Hi, Bob!

// With arrow functions
const multiply = (a, b = 1) => a * b;
console.log(multiply(5));    // 5
console.log(multiply(5, 3)); // 15

// Default using expressions
function getDefault() {
    return 42;
}
const example = (value = getDefault()) => value;`}
        />

        <h2 className="doc-subheading">Rest Parameters</h2>

        <CodeBlock
          language="javascript"
          title="Rest parameters"
          code={`// Collect remaining arguments into array
function sumAll(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sumAll(1, 2, 3));       // 6
console.log(sumAll(1, 2, 3, 4, 5)); // 15

// Rest with other parameters
function greetAll(greeting, ...names) {
    names.forEach(name => {
        console.log(\`\${greeting}, \${name}!\`);
    });
}

greetAll("Hello", "Alice", "Bob", "Charlie");
// Hello, Alice!
// Hello, Bob!
// Hello, Charlie!`}
        />

        <h2 className="doc-subheading">Spread Operator in Function Calls</h2>

        <CodeBlock
          language="javascript"
          title="Spread operator"
          code={`// Spread array as arguments
function add(a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3];
console.log(add(...numbers)); // 6

// Combine with regular arguments
console.log(add(10, ...numbers.slice(0, 2))); // 10 + 1 + 2 = 13

// With Math functions
const values = [5, 3, 8, 1, 9];
console.log(Math.max(...values)); // 9
console.log(Math.min(...values)); // 1`}
        />

        <h2 className="doc-subheading">Higher-Order Functions</h2>

        <CodeBlock
          language="javascript"
          title="Higher-order functions"
          code={`// Function that takes a function as argument
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, console.log); // 0 1 2

// Function that returns a function
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15

// Arrow function version
const adder = amount => value => value + amount;
const add10 = adder(10);
console.log(add10(5));   // 15`}
        />

        <h2 className="doc-subheading">Closures</h2>

        <CodeBlock
          language="javascript"
          title="Closures"
          code={`// Closure - function remembers its outer scope
function createCounter() {
    let count = 0;
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount());  // 1

// Private variables pattern
function createPerson(name) {
    let _name = name;  // Private
    
    return {
        getName: () => _name,
        setName: (newName) => { _name = newName; }
    };
}

const person = createPerson("John");
console.log(person.getName()); // John
person.setName("Jane");
console.log(person.getName()); // Jane`}
        />

        <h2 className="doc-subheading">IIFE (Immediately Invoked Function Expression)</h2>

        <CodeBlock
          language="javascript"
          title="IIFE"
          code={`// Immediately executed function
(function() {
    console.log("This runs immediately!");
})();

// With parameters
(function(name) {
    console.log(\`Hello, \${name}!\`);
})("World");

// Arrow function IIFE
(() => {
    console.log("Arrow IIFE");
})();

// Practical use: avoid polluting global scope
const result = (() => {
    const privateData = [1, 2, 3, 4, 5];
    return privateData.reduce((a, b) => a + b);
})();

console.log(result); // 15
// privateData is not accessible here`}
        />

        <div className="flex justify-between mt-8">
          <Button variant="outline" asChild>
            <Link to="/docs/javascript/loops">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Loops
            </Link>
          </Button>
          <Button asChild>
            <Link to="/docs/javascript/examples">
              Next: Examples
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
