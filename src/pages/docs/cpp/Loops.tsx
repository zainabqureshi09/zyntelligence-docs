import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CppLoops() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-blue-600/10 text-blue-600 dark:text-blue-400">
            C++
          </span>
        </div>

        <h1 className="doc-heading">C++ Loops</h1>

        <p className="doc-paragraph">
          Loops allow you to execute a block of code repeatedly. C++ provides several types
          of loops for different use cases.
        </p>

        <h2 className="doc-subheading">For Loop</h2>

        <CodeBlock
          language="cpp"
          title="for loop"
          code={`// Basic for loop
for (int i = 0; i < 5; i++) {
    cout << i << " ";
}
// Output: 0 1 2 3 4

// Counting backwards
for (int i = 5; i > 0; i--) {
    cout << i << " ";
}
// Output: 5 4 3 2 1

// Step by 2
for (int i = 0; i <= 10; i += 2) {
    cout << i << " ";
}
// Output: 0 2 4 6 8 10

// Multiple variables
for (int i = 0, j = 10; i < j; i++, j--) {
    cout << i << "," << j << " ";
}
// Output: 0,10 1,9 2,8 3,7 4,6`}
        />

        <h2 className="doc-subheading">Range-Based For Loop (C++11)</h2>

        <CodeBlock
          language="cpp"
          title="Range-based for"
          code={`#include <vector>
#include <string>

// Array
int numbers[] = {1, 2, 3, 4, 5};
for (int n : numbers) {
    cout << n << " ";
}

// Vector
vector<string> fruits = {"apple", "banana", "cherry"};
for (const string& fruit : fruits) {
    cout << fruit << endl;
}

// With auto
vector<int> values = {10, 20, 30};
for (auto v : values) {
    cout << v << " ";
}

// Modifying elements (use reference)
for (auto& v : values) {
    v *= 2;  // Double each element
}

// String characters
string text = "Hello";
for (char c : text) {
    cout << c << " ";
}
// Output: H e l l o`}
        />

        <h2 className="doc-subheading">While Loop</h2>

        <CodeBlock
          language="cpp"
          title="while loop"
          code={`// Basic while loop
int count = 0;
while (count < 5) {
    cout << count << " ";
    count++;
}
// Output: 0 1 2 3 4

// Unknown iterations
int number = 1;
while (number < 100) {
    cout << number << " ";
    number *= 2;
}
// Output: 1 2 4 8 16 32 64

// Reading input until condition
int input;
cout << "Enter numbers (0 to stop): ";
while (cin >> input && input != 0) {
    cout << "You entered: " << input << endl;
}`}
        />

        <h2 className="doc-subheading">Do-While Loop</h2>

        <CodeBlock
          language="cpp"
          title="do-while loop"
          code={`// Executes at least once
int count = 0;
do {
    cout << count << " ";
    count++;
} while (count < 5);
// Output: 0 1 2 3 4

// Even if condition is initially false
int x = 10;
do {
    cout << "This runs once!" << endl;
    x++;
} while (x < 5);

// Menu example
int choice;
do {
    cout << "1. Option A" << endl;
    cout << "2. Option B" << endl;
    cout << "3. Exit" << endl;
    cout << "Choice: ";
    cin >> choice;
    
    switch (choice) {
        case 1: cout << "Selected A" << endl; break;
        case 2: cout << "Selected B" << endl; break;
        case 3: cout << "Goodbye!" << endl; break;
        default: cout << "Invalid" << endl;
    }
} while (choice != 3);`}
        />

        <h2 className="doc-subheading">Break and Continue</h2>

        <CodeBlock
          language="cpp"
          title="break and continue"
          code={`// break - exit loop entirely
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    cout << i << " ";
}
// Output: 0 1 2 3 4

// continue - skip current iteration
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue;  // Skip even numbers
    }
    cout << i << " ";
}
// Output: 1 3 5 7 9

// Break with search
vector<int> numbers = {3, 7, 2, 9, 4};
int target = 9;
bool found = false;

for (int n : numbers) {
    if (n == target) {
        found = true;
        break;
    }
}

cout << (found ? "Found!" : "Not found") << endl;`}
        />

        <h2 className="doc-subheading">Nested Loops</h2>

        <CodeBlock
          language="cpp"
          title="Nested loops"
          code={`// Multiplication table
for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= 5; j++) {
        cout << i * j << "\\t";
    }
    cout << endl;
}

// Pattern printing
int rows = 5;
for (int i = 1; i <= rows; i++) {
    for (int j = 1; j <= i; j++) {
        cout << "* ";
    }
    cout << endl;
}
/*
* 
* * 
* * * 
* * * * 
* * * * * 
*/

// Break from nested loops (using flag)
bool shouldBreak = false;
for (int i = 0; i < 3 && !shouldBreak; i++) {
    for (int j = 0; j < 3; j++) {
        if (i == 1 && j == 1) {
            shouldBreak = true;
            break;
        }
        cout << i << "," << j << " ";
    }
}`}
        />

        <h2 className="doc-subheading">Infinite Loops</h2>

        <CodeBlock
          language="cpp"
          title="Infinite loops"
          code={`// Intentional infinite loop (use with break)
while (true) {
    string input;
    cout << "Enter 'quit' to exit: ";
    cin >> input;
    
    if (input == "quit") {
        break;
    }
    
    cout << "You entered: " << input << endl;
}

// For loop version
for (;;) {
    // ... same as while(true)
    break;  // Don't forget to break!
}

// Game loop example
bool gameRunning = true;
while (gameRunning) {
    // Process input
    // Update game state
    // Render
    
    // Check for exit condition
    if (/* exit condition */) {
        gameRunning = false;
    }
}`}
        />

        <div className="flex justify-between mt-8">
          <Button variant="outline" asChild>
            <Link to="/docs/cpp/conditions">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Conditions
            </Link>
          </Button>
          <Button asChild>
            <Link to="/docs/cpp/functions">
              Next: Functions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
