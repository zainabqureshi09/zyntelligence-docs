import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function JavaScriptVariables() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-yellow-400/10 text-yellow-500">
            JavaScript
          </span>
        </div>

        <h1 className="doc-heading">JavaScript Variables</h1>

        <p className="doc-paragraph">
          Variables are containers for storing data values. JavaScript has three ways to declare
          variables: <code className="inline-code">var</code>, <code className="inline-code">let</code>, and <code className="inline-code">const</code>.
        </p>

        <h2 className="doc-subheading">let, const, and var</h2>

        <CodeBlock
          language="javascript"
          title="Variable declarations"
          code={`// let - block scoped, can be reassigned
let age = 25;
age = 26; // OK

// const - block scoped, cannot be reassigned
const name = "John";
// name = "Jane"; // Error: Assignment to constant

// var - function scoped (older, avoid using)
var oldWay = "deprecated";

// Best practice: use const by default, let when reassignment needed`}
        />

        <h2 className="doc-subheading">Declaring Variables</h2>

        <CodeBlock
          language="javascript"
          title="Declaration patterns"
          code={`// Declare and assign
let message = "Hello";

// Declare without value (undefined)
let uninitialized;
console.log(uninitialized); // undefined

// Declare multiple variables
let firstName = "John", lastName = "Doe", fullName;
fullName = firstName + " " + lastName;

// Or on separate lines (preferred for readability)
let a = 1;
let b = 2;
let c = 3;`}
        />

        <h2 className="doc-subheading">Data Types</h2>

        <p className="doc-paragraph">
          JavaScript has 8 data types. Variables can hold any type:
        </p>

        <CodeBlock
          language="javascript"
          title="Data types"
          code={`// Primitive Types

// String
let text = "Hello World";
let template = \`Hello \${text}\`;  // Template literal

// Number (integers and floats)
let integer = 42;
let decimal = 3.14;
let negative = -10;

// BigInt (for very large numbers)
let bigNumber = 9007199254740991n;

// Boolean
let isActive = true;
let isComplete = false;

// Undefined
let notDefined;
console.log(notDefined); // undefined

// Null (intentional absence of value)
let emptyValue = null;

// Symbol (unique identifier)
let sym = Symbol("description");

// Object Types

// Object
let person = {
    name: "John",
    age: 30
};

// Array
let colors = ["red", "green", "blue"];

// Function
let greet = function() {
    return "Hello!";
};`}
        />

        <h2 className="doc-subheading">typeof Operator</h2>

        <p className="doc-paragraph">
          Use <code className="inline-code">typeof</code> to check a variable's type:
        </p>

        <CodeBlock
          language="javascript"
          title="typeof operator"
          code={`console.log(typeof "John");      // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (quirk in JS)
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"
console.log(typeof function(){}); // "function"
console.log(typeof Symbol());    // "symbol"
console.log(typeof 10n);         // "bigint"`}
        />

        <h2 className="doc-subheading">Type Conversion</h2>

        <CodeBlock
          language="javascript"
          title="Type conversion"
          code={`// To String
let num = 123;
String(num);          // "123"
num.toString();       // "123"
num + "";             // "123"

// To Number
let str = "123";
Number(str);          // 123
parseInt(str);        // 123 (integer)
parseFloat("3.14");   // 3.14
+str;                 // 123 (unary plus)

// To Boolean
Boolean(1);           // true
Boolean(0);           // false
Boolean("");          // false
Boolean("hello");     // true
Boolean(null);        // false
Boolean(undefined);   // false

// Automatic (implicit) conversion
"5" + 2;              // "52" (string)
"5" - 2;              // 3 (number)
"5" * "2";            // 10 (number)`}
        />

        <h2 className="doc-subheading">Scope</h2>

        <CodeBlock
          language="javascript"
          title="Variable scope"
          code={`// Global scope
const globalVar = "I'm global";

function example() {
    // Function scope
    const functionVar = "I'm in a function";
    
    if (true) {
        // Block scope
        let blockVar = "I'm in a block";
        const alsoBlock = "Me too";
        var notBlock = "I ignore blocks!"; // var is function-scoped
        
        console.log(blockVar);    // OK
    }
    
    // console.log(blockVar);    // Error: not defined
    console.log(notBlock);       // OK (var ignores block scope)
}

console.log(globalVar);          // OK
// console.log(functionVar);     // Error: not defined`}
        />

        <h2 className="doc-subheading">Destructuring</h2>

        <CodeBlock
          language="javascript"
          title="Destructuring assignment"
          code={`// Array destructuring
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
console.log(first);  // "red"

// Skip elements
const [, , last] = colors;
console.log(last);   // "blue"

// Object destructuring
const person = { name: "John", age: 30, city: "NYC" };
const { name, age } = person;
console.log(name);   // "John"

// Rename variables
const { name: userName, age: userAge } = person;

// Default values
const { country = "USA" } = person;
console.log(country); // "USA"`}
        />

        <div className="flex justify-between mt-8">
          <Button variant="outline" asChild>
            <Link to="/docs/javascript/syntax">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Syntax
            </Link>
          </Button>
          <Button asChild>
            <Link to="/docs/javascript/conditions">
              Next: Conditions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
