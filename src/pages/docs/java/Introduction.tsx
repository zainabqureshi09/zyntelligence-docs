import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function JavaIntroduction() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-red-500/10 text-red-500">
            Java
          </span>
        </div>

        <h1 className="doc-heading">Introduction to Java</h1>

        <p className="doc-paragraph">
          Java is a popular, versatile, and platform-independent programming language. It follows
          the principle of "Write Once, Run Anywhere" (WORA), meaning compiled Java code can
          run on any platform that supports Java.
        </p>

        <h2 className="doc-subheading">Why Learn Java?</h2>

        <ul className="doc-list">
          <li>Platform independent - runs on any device with JVM</li>
          <li>Object-oriented programming language</li>
          <li>Strong typing and memory management</li>
          <li>Extensive standard library</li>
          <li>Widely used in enterprise, Android, and web applications</li>
        </ul>

        <h2 className="doc-subheading">Your First Java Program</h2>

        <CodeBlock
          language="java"
          title="HelloWorld.java"
          code={`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        
        // Print with variables
        String message = "Welcome to Java!";
        System.out.println(message);
    }
}`}
        />

        <h2 className="doc-subheading">Java Program Structure</h2>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-lg border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-2">public class</h3>
            <p className="text-sm text-muted-foreground">
              Every Java program must have at least one class
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-2">main method</h3>
            <p className="text-sm text-muted-foreground">
              Entry point of every Java application
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-2">System.out.println</h3>
            <p className="text-sm text-muted-foreground">
              Prints output to the console
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-2">String[] args</h3>
            <p className="text-sm text-muted-foreground">
              Command line arguments passed to the program
            </p>
          </div>
        </div>

        <h2 className="doc-subheading">Compiling and Running</h2>

        <CodeBlock
          language="java"
          title="Terminal commands"
          code={`// Compile Java file
javac HelloWorld.java

// Run the program (note: no .class extension)
java HelloWorld

// Output: Hello, World!

// Compile with specific version
javac --release 17 HelloWorld.java

// Run with classpath
java -cp ./classes HelloWorld`}
        />

        <h2 className="doc-subheading">Key Java Concepts</h2>

        <CodeBlock
          language="java"
          title="Basic concepts"
          code={`public class Basics {
    public static void main(String[] args) {
        // Variables
        int number = 42;
        double decimal = 3.14;
        String text = "Hello";
        boolean flag = true;
        
        // Arrays
        int[] numbers = {1, 2, 3, 4, 5};
        
        // Loops
        for (int i = 0; i < 5; i++) {
            System.out.println("Count: " + i);
        }
        
        // Enhanced for loop
        for (int n : numbers) {
            System.out.println(n);
        }
        
        // Conditionals
        if (number > 40) {
            System.out.println("Greater than 40");
        } else {
            System.out.println("Less than or equal to 40");
        }
    }
}`}
        />

        <div className="mt-8 p-6 rounded-lg bg-primary/5 border border-primary/20">
          <h3 className="font-semibold text-foreground mb-2">Ready to continue?</h3>
          <p className="text-muted-foreground mb-4">
            Learn about Java syntax and coding conventions.
          </p>
          <Button asChild>
            <Link to="/docs/java/syntax">
              Next: Java Syntax
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
