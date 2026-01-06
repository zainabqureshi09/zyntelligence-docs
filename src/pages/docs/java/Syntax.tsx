import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function JavaSyntax() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-red-500/10 text-red-500">
            Java
          </span>
        </div>

        <h1 className="doc-heading">Java Syntax</h1>

        <p className="doc-paragraph">
          Java syntax is similar to C and C++, but with some differences. Understanding the
          basic syntax rules is essential for writing correct Java programs.
        </p>

        <h2 className="doc-subheading">Basic Syntax Rules</h2>

        <CodeBlock
          language="java"
          title="Syntax basics"
          code={`public class SyntaxBasics {
    public static void main(String[] args) {
        // Statements end with semicolons
        int x = 10;
        System.out.println(x);
        
        // Code blocks use curly braces
        if (x > 5) {
            System.out.println("x is greater than 5");
        }
        
        // Java is case-sensitive
        int myVariable = 1;
        int MyVariable = 2;  // Different variable
        
        // Class names should start with uppercase
        // Method names should start with lowercase
    }
}`}
        />

        <h2 className="doc-subheading">Comments</h2>

        <CodeBlock
          language="java"
          title="Comments"
          code={`// Single-line comment

/* Multi-line comment
   spanning multiple
   lines */

/**
 * Javadoc comment for documentation
 * @param name The name parameter
 * @return A greeting string
 */
public String greet(String name) {
    return "Hello, " + name + "!";
}`}
        />

        <h2 className="doc-subheading">Print Statements</h2>

        <CodeBlock
          language="java"
          title="Output methods"
          code={`// Print with newline
System.out.println("Hello, World!");

// Print without newline
System.out.print("Hello ");
System.out.print("World!");

// Formatted output
String name = "Alice";
int age = 25;
System.out.printf("Name: %s, Age: %d%n", name, age);

// Format specifiers
System.out.printf("%d%n", 42);       // Integer
System.out.printf("%.2f%n", 3.14159); // 2 decimal places
System.out.printf("%s%n", "text");    // String
System.out.printf("%b%n", true);      // Boolean
System.out.printf("%10d%n", 42);      // Right-aligned, width 10
System.out.printf("%-10d%n", 42);     // Left-aligned, width 10`}
        />

        <h2 className="doc-subheading">User Input</h2>

        <CodeBlock
          language="java"
          title="Scanner input"
          code={`import java.util.Scanner;

public class InputExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Read a string
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        
        // Read an integer
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();
        
        // Read a double
        System.out.print("Enter a decimal: ");
        double decimal = scanner.nextDouble();
        
        // Read a single word
        System.out.print("Enter a word: ");
        String word = scanner.next();
        
        // Clear buffer after nextInt/nextDouble
        scanner.nextLine();
        
        System.out.printf("Hello %s, you are %d years old%n", name, age);
        
        scanner.close();
    }
}`}
        />

        <h2 className="doc-subheading">Naming Conventions</h2>

        <CodeBlock
          language="java"
          title="Java naming conventions"
          code={`// Classes - PascalCase
public class MyClassName { }
public class StudentRecord { }

// Methods - camelCase
public void calculateTotal() { }
public String getUserName() { }

// Variables - camelCase
int studentCount = 0;
String firstName = "John";

// Constants - UPPER_SNAKE_CASE
public static final int MAX_SIZE = 100;
public static final double PI = 3.14159;

// Packages - lowercase
package com.example.myapp;
package org.company.project;

// Interfaces - PascalCase (often with -able suffix)
public interface Runnable { }
public interface Comparable<T> { }`}
        />

        <h2 className="doc-subheading">Operators</h2>

        <CodeBlock
          language="java"
          title="Java operators"
          code={`// Arithmetic
int a = 10, b = 3;
System.out.println(a + b);  // 13
System.out.println(a - b);  // 7
System.out.println(a * b);  // 30
System.out.println(a / b);  // 3 (integer division)
System.out.println(a % b);  // 1 (modulus)

// Increment/Decrement
int x = 5;
x++;    // x = 6
++x;    // x = 7
x--;    // x = 6

// Comparison
boolean result;
result = (5 == 5);   // true
result = (5 != 3);   // true
result = (5 > 3);    // true
result = (5 < 3);    // false

// Logical
boolean p = true, q = false;
System.out.println(p && q);  // false (AND)
System.out.println(p || q);  // true (OR)
System.out.println(!p);      // false (NOT)

// Assignment
int c = 10;
c += 5;   // c = 15
c -= 3;   // c = 12
c *= 2;   // c = 24
c /= 4;   // c = 6`}
        />

        <h2 className="doc-subheading">Packages and Imports</h2>

        <CodeBlock
          language="java"
          title="Packages and imports"
          code={`// Package declaration (must be first statement)
package com.example.myapp;

// Import specific class
import java.util.ArrayList;
import java.util.Scanner;

// Import all classes from package
import java.util.*;

// Import static members
import static java.lang.Math.PI;
import static java.lang.Math.sqrt;

public class Example {
    public static void main(String[] args) {
        // Now can use PI directly
        double area = PI * 5 * 5;
        double root = sqrt(16);
    }
}`}
        />

        <div className="flex justify-between mt-8">
          <Button variant="outline" asChild>
            <Link to="/docs/java/introduction">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Introduction
            </Link>
          </Button>
          <Button asChild>
            <Link to="/docs/java/variables">
              Next: Variables
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
