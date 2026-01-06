import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CppConditions() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-blue-600/10 text-blue-600 dark:text-blue-400">
            C++
          </span>
        </div>

        <h1 className="doc-heading">C++ Conditions</h1>

        <p className="doc-paragraph">
          Conditional statements allow you to execute different code based on different conditions.
          C++ provides several ways to implement conditional logic.
        </p>

        <h2 className="doc-subheading">If Statement</h2>

        <CodeBlock
          language="cpp"
          title="if statement"
          code={`#include <iostream>
using namespace std;

int main() {
    int age = 18;
    
    // Simple if
    if (age >= 18) {
        cout << "You are an adult" << endl;
    }
    
    // Single statement (no braces needed, but recommended)
    if (age >= 18)
        cout << "Adult" << endl;
    
    return 0;
}`}
        />

        <h2 className="doc-subheading">If-Else Statement</h2>

        <CodeBlock
          language="cpp"
          title="if-else statement"
          code={`int score = 75;

if (score >= 60) {
    cout << "You passed!" << endl;
} else {
    cout << "You failed." << endl;
}

// Output: You passed!`}
        />

        <h2 className="doc-subheading">Else If Ladder</h2>

        <CodeBlock
          language="cpp"
          title="else if statement"
          code={`int score = 85;
char grade;

if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else if (score >= 70) {
    grade = 'C';
} else if (score >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}

cout << "Grade: " << grade << endl;  // Grade: B`}
        />

        <h2 className="doc-subheading">Switch Statement</h2>

        <CodeBlock
          language="cpp"
          title="switch statement"
          code={`int day = 3;

switch (day) {
    case 1:
        cout << "Monday" << endl;
        break;
    case 2:
        cout << "Tuesday" << endl;
        break;
    case 3:
        cout << "Wednesday" << endl;
        break;
    case 4:
        cout << "Thursday" << endl;
        break;
    case 5:
        cout << "Friday" << endl;
        break;
    case 6:
    case 7:
        cout << "Weekend" << endl;
        break;
    default:
        cout << "Invalid day" << endl;
}

// Output: Wednesday

// Switch with enum
enum Color { RED, GREEN, BLUE };
Color c = GREEN;

switch (c) {
    case RED:
        cout << "Red" << endl;
        break;
    case GREEN:
        cout << "Green" << endl;
        break;
    case BLUE:
        cout << "Blue" << endl;
        break;
}`}
        />

        <h2 className="doc-subheading">Ternary Operator</h2>

        <CodeBlock
          language="cpp"
          title="Ternary operator"
          code={`int age = 20;

// condition ? value_if_true : value_if_false
string status = (age >= 18) ? "Adult" : "Minor";
cout << status << endl;  // Adult

// Can be used in expressions
int a = 10, b = 20;
int max = (a > b) ? a : b;
cout << "Max: " << max << endl;  // Max: 20

// Nested ternary (use sparingly)
int score = 85;
string grade = (score >= 90) ? "A" :
               (score >= 80) ? "B" :
               (score >= 70) ? "C" : "F";`}
        />

        <h2 className="doc-subheading">Logical Operators</h2>

        <CodeBlock
          language="cpp"
          title="Logical operators"
          code={`int age = 25;
bool hasLicense = true;
bool hasInsurance = true;

// AND operator (&&)
if (age >= 18 && hasLicense) {
    cout << "Can drive" << endl;
}

// OR operator (||)
int day = 6;
if (day == 6 || day == 7) {
    cout << "Weekend!" << endl;
}

// NOT operator (!)
bool isRaining = false;
if (!isRaining) {
    cout << "No umbrella needed" << endl;
}

// Combining operators
if ((age >= 18 && hasLicense) || hasInsurance) {
    cout << "OK to drive" << endl;
}

// Short-circuit evaluation
int x = 5;
if (x > 0 && x++ < 10) {  // x++ only evaluated if x > 0
    cout << x << endl;     // 6
}`}
        />

        <h2 className="doc-subheading">Nested Conditions</h2>

        <CodeBlock
          language="cpp"
          title="Nested if statements"
          code={`int age = 25;
bool isStudent = true;
bool hasID = true;

if (age >= 18) {
    cout << "Adult" << endl;
    
    if (isStudent) {
        cout << "Student" << endl;
        
        if (hasID) {
            cout << "Student discount available!" << endl;
        }
    }
} else {
    cout << "Minor" << endl;
}

// Better: early returns in functions
void checkAccess(int age, bool hasPermission) {
    if (age < 18) {
        cout << "Too young" << endl;
        return;
    }
    
    if (!hasPermission) {
        cout << "No permission" << endl;
        return;
    }
    
    cout << "Access granted" << endl;
}`}
        />

        <div className="flex justify-between mt-8">
          <Button variant="outline" asChild>
            <Link to="/docs/cpp/variables">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Variables
            </Link>
          </Button>
          <Button asChild>
            <Link to="/docs/cpp/loops">
              Next: Loops
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
