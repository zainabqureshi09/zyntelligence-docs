import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function JavaLoops() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-red-500/10 text-red-500">
            Java
          </span>
        </div>

        <h1 className="doc-heading">Java Loops</h1>

        <p className="doc-paragraph">
          Loops allow you to execute a block of code repeatedly. Java provides several types
          of loops for different use cases.
        </p>

        <h2 className="doc-subheading">For Loop</h2>

        <CodeBlock
          language="java"
          title="for loop"
          code={`// Basic for loop
for (int i = 0; i < 5; i++) {
    System.out.print(i + " ");
}
// Output: 0 1 2 3 4

// Counting backwards
for (int i = 5; i > 0; i--) {
    System.out.print(i + " ");
}
// Output: 5 4 3 2 1

// Step by 2
for (int i = 0; i <= 10; i += 2) {
    System.out.print(i + " ");
}
// Output: 0 2 4 6 8 10

// Multiple variables
for (int i = 0, j = 10; i < j; i++, j--) {
    System.out.println(i + "," + j);
}

// Infinite loop (use with break)
for (;;) {
    // ...
    if (condition) break;
}`}
        />

        <h2 className="doc-subheading">Enhanced For Loop (For-Each)</h2>

        <CodeBlock
          language="java"
          title="Enhanced for loop"
          code={`// Array iteration
int[] numbers = {1, 2, 3, 4, 5};
for (int num : numbers) {
    System.out.print(num + " ");
}
// Output: 1 2 3 4 5

// String array
String[] fruits = {"apple", "banana", "cherry"};
for (String fruit : fruits) {
    System.out.println(fruit);
}

// ArrayList
import java.util.ArrayList;
ArrayList<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");
names.add("Charlie");

for (String name : names) {
    System.out.println(name);
}

// 2D array
int[][] matrix = {{1, 2}, {3, 4}, {5, 6}};
for (int[] row : matrix) {
    for (int value : row) {
        System.out.print(value + " ");
    }
    System.out.println();
}`}
        />

        <h2 className="doc-subheading">While Loop</h2>

        <CodeBlock
          language="java"
          title="while loop"
          code={`// Basic while loop
int count = 0;
while (count < 5) {
    System.out.print(count + " ");
    count++;
}
// Output: 0 1 2 3 4

// Unknown iterations
int number = 1;
while (number < 100) {
    System.out.print(number + " ");
    number *= 2;
}
// Output: 1 2 4 8 16 32 64

// Reading input
import java.util.Scanner;
Scanner scanner = new Scanner(System.in);
String input = "";
while (!input.equals("quit")) {
    System.out.print("Enter command: ");
    input = scanner.nextLine();
    System.out.println("You entered: " + input);
}`}
        />

        <h2 className="doc-subheading">Do-While Loop</h2>

        <CodeBlock
          language="java"
          title="do-while loop"
          code={`// Executes at least once
int count = 0;
do {
    System.out.print(count + " ");
    count++;
} while (count < 5);
// Output: 0 1 2 3 4

// Even if condition is initially false
int x = 10;
do {
    System.out.println("This runs once!");
    x++;
} while (x < 5);
// Output: This runs once!

// Menu example
import java.util.Scanner;
Scanner scanner = new Scanner(System.in);
int choice;
do {
    System.out.println("1. Option A");
    System.out.println("2. Option B");
    System.out.println("3. Exit");
    System.out.print("Choice: ");
    choice = scanner.nextInt();
    
    switch (choice) {
        case 1: System.out.println("Selected A"); break;
        case 2: System.out.println("Selected B"); break;
        case 3: System.out.println("Goodbye!"); break;
        default: System.out.println("Invalid");
    }
} while (choice != 3);`}
        />

        <h2 className="doc-subheading">Break and Continue</h2>

        <CodeBlock
          language="java"
          title="break and continue"
          code={`// break - exit loop entirely
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    System.out.print(i + " ");
}
// Output: 0 1 2 3 4

// continue - skip current iteration
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue;  // Skip even numbers
    }
    System.out.print(i + " ");
}
// Output: 1 3 5 7 9

// Labeled break (for nested loops)
outer:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (i == 1 && j == 1) {
            break outer;  // Breaks out of both loops
        }
        System.out.println(i + "," + j);
    }
}

// Labeled continue
outer:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (j == 1) {
            continue outer;  // Skip to next outer iteration
        }
        System.out.println(i + "," + j);
    }
}`}
        />

        <h2 className="doc-subheading">Iterating Collections</h2>

        <CodeBlock
          language="java"
          title="Collection iteration"
          code={`import java.util.*;

// ArrayList with index
ArrayList<String> list = new ArrayList<>();
list.add("A");
list.add("B");
list.add("C");

for (int i = 0; i < list.size(); i++) {
    System.out.println(i + ": " + list.get(i));
}

// Iterator
Iterator<String> iterator = list.iterator();
while (iterator.hasNext()) {
    String element = iterator.next();
    System.out.println(element);
}

// HashMap
HashMap<String, Integer> map = new HashMap<>();
map.put("Alice", 25);
map.put("Bob", 30);

for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}

// forEach with lambda (Java 8+)
list.forEach(item -> System.out.println(item));
list.forEach(System.out::println);  // Method reference

map.forEach((key, value) -> {
    System.out.println(key + " = " + value);
});`}
        />

        <div className="flex justify-between mt-8">
          <Button variant="outline" asChild>
            <Link to="/docs/java/conditions">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Conditions
            </Link>
          </Button>
          <Button asChild>
            <Link to="/docs/java/functions">
              Next: Functions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
