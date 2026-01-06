import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CppVariables() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-blue-600/10 text-blue-600 dark:text-blue-400">
            C++
          </span>
        </div>

        <h1 className="doc-heading">C++ Variables</h1>

        <p className="doc-paragraph">
          Variables in C++ are containers for storing data values. C++ is a statically-typed
          language, meaning you must declare the type of a variable before using it.
        </p>

        <h2 className="doc-subheading">Data Types</h2>

        <CodeBlock
          language="cpp"
          title="Fundamental data types"
          code={`// Integer types
int a = 42;              // At least 16 bits
short b = 100;           // At least 16 bits
long c = 100000L;        // At least 32 bits
long long d = 9000000000LL;  // At least 64 bits

// Unsigned versions (no negative values)
unsigned int e = 100;
unsigned long f = 100000;

// Floating-point types
float g = 3.14f;         // Single precision
double h = 3.14159265;   // Double precision
long double i = 3.14159265358979L;

// Character types
char j = 'A';            // Single character
char k = 65;             // ASCII value for 'A'

// Boolean type
bool l = true;
bool m = false;

// String (from <string> header)
#include <string>
std::string name = "John";`}
        />

        <h2 className="doc-subheading">Variable Declaration</h2>

        <CodeBlock
          language="cpp"
          title="Declaration and initialization"
          code={`// Declaration
int number;

// Declaration with initialization
int count = 0;

// Multiple declarations
int x, y, z;
int a = 1, b = 2, c = 3;

// Constant variables
const int MAX_VALUE = 100;
const double PI = 3.14159;

// constexpr (compile-time constant)
constexpr int SIZE = 10;

// Auto type deduction (C++11)
auto value = 42;         // int
auto price = 19.99;      // double
auto letter = 'A';       // char
auto text = "Hello";     // const char*

// Type aliases
using Integer = int;
typedef int Integer;     // Older syntax
Integer myNum = 5;`}
        />

        <h2 className="doc-subheading">Type Modifiers</h2>

        <CodeBlock
          language="cpp"
          title="Type modifiers"
          code={`#include <iostream>
#include <climits>
using namespace std;

int main() {
    // Size of types
    cout << "int: " << sizeof(int) << " bytes" << endl;
    cout << "long: " << sizeof(long) << " bytes" << endl;
    cout << "double: " << sizeof(double) << " bytes" << endl;
    
    // Value ranges
    cout << "int max: " << INT_MAX << endl;
    cout << "int min: " << INT_MIN << endl;
    
    // signed vs unsigned
    signed int negative = -42;    // Can be negative
    unsigned int positive = 42;   // Only positive
    
    // short vs long
    short small = 100;
    long large = 1000000;
    
    return 0;
}`}
        />

        <h2 className="doc-subheading">Type Conversion</h2>

        <CodeBlock
          language="cpp"
          title="Type casting"
          code={`// Implicit conversion (automatic)
int a = 10;
double b = a;  // int to double (safe)

double x = 9.8;
int y = x;     // double to int (loses decimal)

// Explicit conversion (casting)

// C-style cast
int c = (int)3.14;

// C++ static_cast (preferred)
double pi = 3.14159;
int rounded = static_cast<int>(pi);

// Other C++ casts
// dynamic_cast - for polymorphic types
// const_cast - remove/add const
// reinterpret_cast - low-level reinterpretation

// String conversions
#include <string>
string numStr = "123";
int num = stoi(numStr);        // string to int
double d = stod("3.14");       // string to double

int value = 42;
string str = to_string(value); // int to string`}
        />

        <h2 className="doc-subheading">References and Pointers</h2>

        <CodeBlock
          language="cpp"
          title="References and pointers"
          code={`// References (alias to variable)
int original = 100;
int& ref = original;    // ref is alias for original

ref = 200;              // Changes original
cout << original;       // 200

// Pointers (store memory addresses)
int value = 42;
int* ptr = &value;      // ptr holds address of value

cout << ptr << endl;    // Memory address
cout << *ptr << endl;   // 42 (dereferenced value)

*ptr = 100;             // Changes value through pointer
cout << value << endl;  // 100

// Null pointer
int* nullPtr = nullptr;

// Dynamic memory allocation
int* dynamic = new int(50);
cout << *dynamic << endl;
delete dynamic;         // Free memory

// Arrays
int* arr = new int[5];
arr[0] = 1;
delete[] arr;           // Free array memory`}
        />

        <h2 className="doc-subheading">Scope and Lifetime</h2>

        <CodeBlock
          language="cpp"
          title="Variable scope"
          code={`#include <iostream>
using namespace std;

// Global variable
int globalVar = 100;

void function() {
    // Local variable
    int localVar = 50;
    cout << localVar << endl;
    
    // Access global
    cout << globalVar << endl;
}

int main() {
    // Block scope
    {
        int blockVar = 10;
        cout << blockVar << endl;
    }
    // blockVar not accessible here
    
    // Static local variable
    for (int i = 0; i < 3; i++) {
        static int counter = 0;  // Initialized once
        counter++;
        cout << counter << endl;  // 1, 2, 3
    }
    
    return 0;
}`}
        />

        <div className="flex justify-between mt-8">
          <Button variant="outline" asChild>
            <Link to="/docs/cpp/syntax">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Syntax
            </Link>
          </Button>
          <Button asChild>
            <Link to="/docs/cpp/conditions">
              Next: Conditions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
