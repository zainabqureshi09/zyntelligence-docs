import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CppFunctions() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-blue-600/10 text-blue-600 dark:text-blue-400">
            C++
          </span>
        </div>

        <h1 className="doc-heading">C++ Functions</h1>

        <p className="doc-paragraph">
          Functions are reusable blocks of code that perform specific tasks. They help organize
          code, improve readability, and enable code reuse.
        </p>

        <h2 className="doc-subheading">Function Declaration and Definition</h2>

        <CodeBlock
          language="cpp"
          title="Basic functions"
          code={`#include <iostream>
using namespace std;

// Function declaration (prototype)
void greet();
int add(int a, int b);

// Function definitions
void greet() {
    cout << "Hello, World!" << endl;
}

int add(int a, int b) {
    return a + b;
}

int main() {
    greet();                     // Call void function
    int sum = add(5, 3);         // Call with return value
    cout << "Sum: " << sum << endl;
    
    return 0;
}`}
        />

        <h2 className="doc-subheading">Parameters and Return Values</h2>

        <CodeBlock
          language="cpp"
          title="Parameters"
          code={`// Multiple parameters
double calculate(double price, int quantity, double taxRate) {
    return price * quantity * (1 + taxRate);
}

// Default parameters
void greet(string name = "Guest") {
    cout << "Hello, " << name << "!" << endl;
}

greet();           // Hello, Guest!
greet("Alice");    // Hello, Alice!

// Multiple return values using references
void getMinMax(int arr[], int size, int& min, int& max) {
    min = max = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }
}

int numbers[] = {3, 1, 4, 1, 5, 9};
int minVal, maxVal;
getMinMax(numbers, 6, minVal, maxVal);`}
        />

        <h2 className="doc-subheading">Pass by Value vs Reference</h2>

        <CodeBlock
          language="cpp"
          title="Passing mechanisms"
          code={`// Pass by value (copy)
void doubleValue(int x) {
    x = x * 2;  // Only affects local copy
}

int a = 5;
doubleValue(a);
cout << a;  // Still 5

// Pass by reference
void doubleRef(int& x) {
    x = x * 2;  // Modifies original
}

int b = 5;
doubleRef(b);
cout << b;  // Now 10

// Pass by const reference (efficient, no copy, read-only)
void display(const vector<int>& vec) {
    for (int v : vec) {
        cout << v << " ";
    }
    // vec.push_back(1);  // Error: cannot modify
}

// Pass by pointer
void doublePtr(int* x) {
    *x = *x * 2;
}

int c = 5;
doublePtr(&c);
cout << c;  // Now 10`}
        />

        <h2 className="doc-subheading">Function Overloading</h2>

        <CodeBlock
          language="cpp"
          title="Overloading"
          code={`// Same name, different parameters
int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}

int add(int a, int b, int c) {
    return a + b + c;
}

string add(string a, string b) {
    return a + b;
}

// Usage
cout << add(1, 2) << endl;           // 3 (int version)
cout << add(1.5, 2.5) << endl;       // 4.0 (double version)
cout << add(1, 2, 3) << endl;        // 6 (three int version)
cout << add("Hello", "World");       // HelloWorld (string version)`}
        />

        <h2 className="doc-subheading">Lambda Functions (C++11)</h2>

        <CodeBlock
          language="cpp"
          title="Lambda expressions"
          code={`#include <algorithm>
#include <vector>

// Basic lambda
auto greet = []() {
    cout << "Hello!" << endl;
};
greet();

// Lambda with parameters
auto add = [](int a, int b) {
    return a + b;
};
cout << add(3, 4) << endl;  // 7

// Lambda with capture
int factor = 10;
auto multiply = [factor](int x) {
    return x * factor;
};
cout << multiply(5) << endl;  // 50

// Capture by reference
int counter = 0;
auto increment = [&counter]() {
    counter++;
};
increment();
cout << counter << endl;  // 1

// With STL algorithms
vector<int> nums = {3, 1, 4, 1, 5, 9};

// Sort descending
sort(nums.begin(), nums.end(), [](int a, int b) {
    return a > b;
});

// Find first even
auto it = find_if(nums.begin(), nums.end(), [](int n) {
    return n % 2 == 0;
});`}
        />

        <h2 className="doc-subheading">Recursive Functions</h2>

        <CodeBlock
          language="cpp"
          title="Recursion"
          code={`// Factorial
int factorial(int n) {
    if (n <= 1) return 1;          // Base case
    return n * factorial(n - 1);    // Recursive call
}

cout << factorial(5) << endl;  // 120

// Fibonacci
int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Binary search
int binarySearch(int arr[], int left, int right, int target) {
    if (left > right) return -1;
    
    int mid = left + (right - left) / 2;
    
    if (arr[mid] == target) return mid;
    if (arr[mid] > target) 
        return binarySearch(arr, left, mid - 1, target);
    return binarySearch(arr, mid + 1, right, target);
}`}
        />

        <h2 className="doc-subheading">Inline Functions</h2>

        <CodeBlock
          language="cpp"
          title="Inline functions"
          code={`// Inline suggestion for small functions
inline int square(int x) {
    return x * x;
}

// Compiler may inline automatically for small functions
// Inline reduces function call overhead

// constexpr for compile-time evaluation
constexpr int factorial(int n) {
    return (n <= 1) ? 1 : n * factorial(n - 1);
}

// Computed at compile time
constexpr int result = factorial(5);  // 120`}
        />

        <div className="flex justify-between mt-8">
          <Button variant="outline" asChild>
            <Link to="/docs/cpp/loops">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Loops
            </Link>
          </Button>
          <Button asChild>
            <Link to="/docs/cpp/examples">
              Next: Examples
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
