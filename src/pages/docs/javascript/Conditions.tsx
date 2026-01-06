import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function JavaScriptConditions() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-yellow-400/10 text-yellow-500">
            JavaScript
          </span>
        </div>

        <h1 className="doc-heading">JavaScript Conditions</h1>

        <p className="doc-paragraph">
          Conditional statements control the flow of your program based on different conditions.
          JavaScript supports several types of conditional statements.
        </p>

        <h2 className="doc-subheading">Comparison Operators</h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold">Operator</th>
                <th className="text-left py-3 px-4 font-semibold">Description</th>
                <th className="text-left py-3 px-4 font-semibold">Example</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['==', 'Equal (value)', '5 == "5" → true'],
                ['===', 'Strict equal (value + type)', '5 === "5" → false'],
                ['!=', 'Not equal', '5 != 3 → true'],
                ['!==', 'Strict not equal', '5 !== "5" → true'],
                ['>', 'Greater than', '5 > 3 → true'],
                ['<', 'Less than', '5 < 3 → false'],
                ['>=', 'Greater or equal', '5 >= 5 → true'],
                ['<=', 'Less or equal', '5 <= 3 → false'],
              ].map(([op, desc, example]) => (
                <tr key={op} className="border-b border-border">
                  <td className="py-3 px-4 font-mono text-primary">{op}</td>
                  <td className="py-3 px-4 text-muted-foreground">{desc}</td>
                  <td className="py-3 px-4 font-mono">{example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="doc-subheading">If Statement</h2>

        <CodeBlock
          language="javascript"
          title="if statement"
          code={`const age = 18;

if (age >= 18) {
    console.log("You are an adult");
}

// Single line (no braces needed, but not recommended)
if (age >= 18) console.log("Adult");`}
        />

        <h2 className="doc-subheading">If-Else Statement</h2>

        <CodeBlock
          language="javascript"
          title="if-else statement"
          code={`const temperature = 25;

if (temperature > 30) {
    console.log("It's hot!");
} else {
    console.log("It's comfortable");
}

// Output: It's comfortable`}
        />

        <h2 className="doc-subheading">Else If Statement</h2>

        <CodeBlock
          language="javascript"
          title="else if statement"
          code={`const score = 85;
let grade;

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

console.log(\`Your grade: \${grade}\`); // Your grade: B`}
        />

        <h2 className="doc-subheading">Logical Operators</h2>

        <CodeBlock
          language="javascript"
          title="Logical operators"
          code={`const age = 25;
const hasLicense = true;
const hasInsurance = true;

// AND (&&) - all conditions must be true
if (age >= 18 && hasLicense && hasInsurance) {
    console.log("You can drive legally");
}

// OR (||) - at least one condition must be true
const day = "Saturday";
if (day === "Saturday" || day === "Sunday") {
    console.log("It's the weekend!");
}

// NOT (!) - reverses the boolean
const isLoggedIn = false;
if (!isLoggedIn) {
    console.log("Please log in");
}`}
        />

        <h2 className="doc-subheading">Switch Statement</h2>

        <CodeBlock
          language="javascript"
          title="switch statement"
          code={`const day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
    case 7:
        dayName = "Weekend";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName); // Wednesday`}
        />

        <h2 className="doc-subheading">Ternary Operator</h2>

        <CodeBlock
          language="javascript"
          title="Ternary operator"
          code={`const age = 20;

// condition ? valueIfTrue : valueIfFalse
const status = age >= 18 ? "adult" : "minor";
console.log(status); // adult

// Nested ternary (use sparingly)
const score = 85;
const grade = score >= 90 ? "A" 
            : score >= 80 ? "B"
            : score >= 70 ? "C"
            : "F";

// Ternary in template literals
console.log(\`You are \${age >= 18 ? "an adult" : "a minor"}\`);`}
        />

        <h2 className="doc-subheading">Truthy and Falsy Values</h2>

        <CodeBlock
          language="javascript"
          title="Truthy and falsy"
          code={`// Falsy values (evaluate to false)
if (false) {}
if (0) {}
if (-0) {}
if ("") {}
if (null) {}
if (undefined) {}
if (NaN) {}

// Everything else is truthy
if (true) {}
if (1) {}
if ("hello") {}
if ([]) {}       // Empty array is truthy!
if ({}) {}       // Empty object is truthy!
if (function(){}) {}

// Practical example
const username = "";
if (username) {
    console.log(\`Hello, \${username}\`);
} else {
    console.log("Please enter a username");
}`}
        />

        <h2 className="doc-subheading">Nullish Coalescing</h2>

        <CodeBlock
          language="javascript"
          title="Nullish coalescing (??)"
          code={`// ?? returns right side only if left is null or undefined
const value1 = null ?? "default";      // "default"
const value2 = undefined ?? "default"; // "default"
const value3 = 0 ?? "default";         // 0
const value4 = "" ?? "default";        // ""

// Compare with OR operator
const orValue = 0 || "default";        // "default" (0 is falsy)
const nullish = 0 ?? "default";        // 0 (only null/undefined triggers)

// Practical example
function greet(name) {
    const displayName = name ?? "Guest";
    console.log(\`Hello, \${displayName}\`);
}

greet("John");     // Hello, John
greet(null);       // Hello, Guest
greet(undefined);  // Hello, Guest`}
        />

        <h2 className="doc-subheading">Optional Chaining</h2>

        <CodeBlock
          language="javascript"
          title="Optional chaining (?.)"
          code={`const user = {
    name: "John",
    address: {
        city: "NYC"
    }
};

// Without optional chaining (can error)
// const zip = user.address.zipCode.value; // Error!

// With optional chaining
const zip = user?.address?.zipCode?.value; // undefined (no error)

// With function calls
const result = user.getName?.();  // undefined if getName doesn't exist

// With arrays
const arr = [1, 2, 3];
const item = arr?.[5];  // undefined

// Combining with nullish coalescing
const city = user?.address?.city ?? "Unknown";
console.log(city);  // "NYC"`}
        />

        <div className="flex justify-between mt-8">
          <Button variant="outline" asChild>
            <Link to="/docs/javascript/variables">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Variables
            </Link>
          </Button>
          <Button asChild>
            <Link to="/docs/javascript/loops">
              Next: Loops
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
