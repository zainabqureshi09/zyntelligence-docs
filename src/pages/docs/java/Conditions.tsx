import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function JavaConditions() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-red-500/10 text-red-500">
            Java
          </span>
        </div>

        <h1 className="doc-heading">Java Conditions</h1>

        <p className="doc-paragraph">
          Conditional statements allow you to execute different code based on different conditions.
          Java provides several ways to implement conditional logic.
        </p>

        <h2 className="doc-subheading">If Statement</h2>

        <CodeBlock
          language="java"
          title="if statement"
          code={`int age = 18;

// Simple if
if (age >= 18) {
    System.out.println("You are an adult");
}

// If with single statement (braces optional but recommended)
if (age >= 18)
    System.out.println("Adult");`}
        />

        <h2 className="doc-subheading">If-Else Statement</h2>

        <CodeBlock
          language="java"
          title="if-else statement"
          code={`int temperature = 25;

if (temperature > 30) {
    System.out.println("It's hot!");
} else {
    System.out.println("It's comfortable");
}

// Nested if-else
int hour = 14;
String greeting;

if (hour < 12) {
    greeting = "Good morning";
} else if (hour < 18) {
    greeting = "Good afternoon";
} else {
    greeting = "Good evening";
}

System.out.println(greeting);  // Good afternoon`}
        />

        <h2 className="doc-subheading">Else If Ladder</h2>

        <CodeBlock
          language="java"
          title="else if ladder"
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

System.out.println("Grade: " + grade);  // Grade: B`}
        />

        <h2 className="doc-subheading">Switch Statement</h2>

        <CodeBlock
          language="java"
          title="switch statement"
          code={`int day = 3;
String dayName;

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

System.out.println(dayName);  // Wednesday

// Switch with String (Java 7+)
String fruit = "apple";
switch (fruit) {
    case "apple":
        System.out.println("Red fruit");
        break;
    case "banana":
        System.out.println("Yellow fruit");
        break;
    default:
        System.out.println("Unknown fruit");
}

// Enhanced switch (Java 14+)
String result = switch (day) {
    case 1 -> "Monday";
    case 2 -> "Tuesday";
    case 3 -> "Wednesday";
    case 4, 5 -> "Weekday";
    case 6, 7 -> "Weekend";
    default -> "Invalid";
};`}
        />

        <h2 className="doc-subheading">Ternary Operator</h2>

        <CodeBlock
          language="java"
          title="Ternary operator"
          code={`int age = 20;

// condition ? valueIfTrue : valueIfFalse
String status = (age >= 18) ? "Adult" : "Minor";
System.out.println(status);  // Adult

// Can be used in expressions
int a = 10, b = 20;
int max = (a > b) ? a : b;
System.out.println("Max: " + max);  // Max: 20

// Nested ternary (use sparingly)
int score = 85;
String grade = (score >= 90) ? "A" :
               (score >= 80) ? "B" :
               (score >= 70) ? "C" : "F";

// In method calls
System.out.println("You are " + (age >= 18 ? "an adult" : "a minor"));`}
        />

        <h2 className="doc-subheading">Logical Operators</h2>

        <CodeBlock
          language="java"
          title="Logical operators"
          code={`int age = 25;
boolean hasLicense = true;
boolean hasInsurance = true;

// AND operator (&&)
if (age >= 18 && hasLicense && hasInsurance) {
    System.out.println("Can drive legally");
}

// OR operator (||)
int day = 6;
if (day == 6 || day == 7) {
    System.out.println("Weekend!");
}

// NOT operator (!)
boolean isRaining = false;
if (!isRaining) {
    System.out.println("No umbrella needed");
}

// Short-circuit evaluation
String name = null;
// Safe: second condition not evaluated if first is false
if (name != null && name.length() > 0) {
    System.out.println(name);
}

// Combining operators
if ((age >= 18 && hasLicense) || hasInsurance) {
    System.out.println("OK to drive");
}`}
        />

        <h2 className="doc-subheading">Comparing Objects</h2>

        <CodeBlock
          language="java"
          title="Object comparison"
          code={`// String comparison
String s1 = "Hello";
String s2 = "Hello";
String s3 = new String("Hello");

// == compares references
System.out.println(s1 == s2);      // true (same string pool reference)
System.out.println(s1 == s3);      // false (different objects)

// equals() compares content
System.out.println(s1.equals(s3)); // true

// Null-safe comparison
String name = null;
// Avoid NullPointerException
if ("John".equals(name)) {
    // Safe: "John" is never null
}

// Objects.equals (Java 7+)
import java.util.Objects;
if (Objects.equals(s1, s3)) {
    System.out.println("Equal");
}

// Compare with null
if (name == null) {
    System.out.println("Name is null");
}

// instanceof operator
Object obj = "Hello";
if (obj instanceof String) {
    String str = (String) obj;
    System.out.println(str.length());
}

// Pattern matching instanceof (Java 16+)
if (obj instanceof String str) {
    System.out.println(str.length());
}`}
        />

        <div className="flex justify-between mt-8">
          <Button variant="outline" asChild>
            <Link to="/docs/java/variables">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Variables
            </Link>
          </Button>
          <Button asChild>
            <Link to="/docs/java/loops">
              Next: Loops
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
