import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CppSyntax() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-blue-600/10 text-blue-600 dark:text-blue-400">
            C++
          </span>
        </div>

        <h1 className="doc-heading">C++ Syntax</h1>

        <p className="doc-paragraph">
          Understanding C++ syntax is essential for writing correct programs. C++ uses curly
          braces to define code blocks and semicolons to end statements.
        </p>

        <h2 className="doc-subheading">Basic Syntax Rules</h2>

        <CodeBlock
          language="cpp"
          title="Syntax basics"
          code={`#include <iostream>
using namespace std;

int main() {
    // Statements end with semicolons
    int x = 10;
    cout << x << endl;
    
    // Code blocks use curly braces
    if (x > 5) {
        cout << "x is greater than 5" << endl;
    }
    
    // C++ is case sensitive
    int myVar = 1;
    int MyVar = 2;  // Different variable
    
    return 0;
}`}
        />

        <h2 className="doc-subheading">Comments</h2>

        <CodeBlock
          language="cpp"
          title="Comments"
          code={`// Single-line comment

/* Multi-line comment
   spanning multiple
   lines */

/**
 * Documentation comment
 * @param x The first number
 * @param y The second number
 * @return The sum of x and y
 */
int add(int x, int y) {
    return x + y;
}`}
        />

        <h2 className="doc-subheading">Input and Output</h2>

        <CodeBlock
          language="cpp"
          title="I/O operations"
          code={`#include <iostream>
using namespace std;

int main() {
    // Output with cout
    cout << "Hello, World!" << endl;
    cout << "Number: " << 42 << endl;
    
    // Multiple outputs
    int a = 5, b = 10;
    cout << "a = " << a << ", b = " << b << endl;
    
    // Input with cin
    int age;
    cout << "Enter your age: ";
    cin >> age;
    cout << "You are " << age << " years old" << endl;
    
    // Multiple inputs
    int x, y;
    cout << "Enter two numbers: ";
    cin >> x >> y;
    cout << "Sum: " << x + y << endl;
    
    // String input
    string name;
    cout << "Enter your name: ";
    cin >> name;  // Reads until whitespace
    
    // Read entire line
    string fullName;
    cout << "Enter full name: ";
    cin.ignore();  // Clear buffer
    getline(cin, fullName);
    
    return 0;
}`}
        />

        <h2 className="doc-subheading">Operators</h2>

        <CodeBlock
          language="cpp"
          title="C++ operators"
          code={`// Arithmetic operators
int a = 10, b = 3;
cout << a + b << endl;   // 13 (addition)
cout << a - b << endl;   // 7 (subtraction)
cout << a * b << endl;   // 30 (multiplication)
cout << a / b << endl;   // 3 (integer division)
cout << a % b << endl;   // 1 (modulus)

// Increment/Decrement
int x = 5;
x++;    // x = 6
++x;    // x = 7
x--;    // x = 6

// Compound assignment
x += 5;  // x = x + 5
x -= 2;  // x = x - 2
x *= 3;  // x = x * 3
x /= 2;  // x = x / 2

// Comparison operators
bool result;
result = (5 == 5);   // true
result = (5 != 3);   // true
result = (5 > 3);    // true
result = (5 < 3);    // false
result = (5 >= 5);   // true
result = (5 <= 3);   // false

// Logical operators
bool p = true, q = false;
cout << (p && q) << endl;  // 0 (AND)
cout << (p || q) << endl;  // 1 (OR)
cout << (!p) << endl;      // 0 (NOT)`}
        />

        <h2 className="doc-subheading">Preprocessor Directives</h2>

        <CodeBlock
          language="cpp"
          title="Preprocessor"
          code={`// Include header files
#include <iostream>     // Standard library
#include <vector>
#include "myheader.h"   // Local header

// Define constants
#define PI 3.14159
#define MAX_SIZE 100
#define SQUARE(x) ((x) * (x))

// Conditional compilation
#ifdef DEBUG
    cout << "Debug mode" << endl;
#endif

#ifndef HEADER_H
#define HEADER_H
// Header content
#endif

// Pragma directives
#pragma once           // Include guard alternative`}
        />

        <h2 className="doc-subheading">Namespaces</h2>

        <CodeBlock
          language="cpp"
          title="Namespaces"
          code={`#include <iostream>

// Using entire namespace (not recommended for large projects)
using namespace std;

// Using specific elements (preferred)
using std::cout;
using std::endl;

// Custom namespace
namespace MySpace {
    int value = 42;
    
    void display() {
        std::cout << "Value: " << value << std::endl;
    }
}

int main() {
    cout << "Hello" << endl;
    
    // Access namespace members
    cout << MySpace::value << endl;
    MySpace::display();
    
    return 0;
}`}
        />

        <div className="flex justify-between mt-8">
          <Button variant="outline" asChild>
            <Link to="/docs/cpp/introduction">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Introduction
            </Link>
          </Button>
          <Button asChild>
            <Link to="/docs/cpp/variables">
              Next: Variables
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
