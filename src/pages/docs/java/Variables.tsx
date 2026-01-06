import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function JavaVariables() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-red-500/10 text-red-500">
            Java
          </span>
        </div>

        <h1 className="doc-heading">Java Variables</h1>

        <p className="doc-paragraph">
          Variables in Java are containers for storing data values. Java is a strongly-typed
          language, which means you must declare the type of each variable.
        </p>

        <h2 className="doc-subheading">Primitive Data Types</h2>

        <CodeBlock
          language="java"
          title="Primitive types"
          code={`// Integer types
byte b = 127;              // 8-bit, -128 to 127
short s = 32767;           // 16-bit
int i = 2147483647;        // 32-bit (most common)
long l = 9223372036854775807L;  // 64-bit (note the L suffix)

// Floating-point types
float f = 3.14f;           // 32-bit (note the f suffix)
double d = 3.14159265359;  // 64-bit (default for decimals)

// Character type
char c = 'A';              // 16-bit Unicode character
char unicode = '\\u0041';   // Unicode for 'A'

// Boolean type
boolean flag = true;
boolean isActive = false;`}
        />

        <h2 className="doc-subheading">Reference Types</h2>

        <CodeBlock
          language="java"
          title="Reference types"
          code={`// String (not a primitive)
String name = "John Doe";
String greeting = new String("Hello");

// Arrays
int[] numbers = {1, 2, 3, 4, 5};
String[] names = new String[3];
int[][] matrix = {{1, 2}, {3, 4}};

// Wrapper classes (for primitives)
Integer intObj = 42;
Double doubleObj = 3.14;
Boolean boolObj = true;
Character charObj = 'A';

// ArrayList (dynamic array)
import java.util.ArrayList;
ArrayList<String> list = new ArrayList<>();
list.add("Apple");
list.add("Banana");

// HashMap
import java.util.HashMap;
HashMap<String, Integer> ages = new HashMap<>();
ages.put("Alice", 25);
ages.put("Bob", 30);`}
        />

        <h2 className="doc-subheading">Variable Declaration</h2>

        <CodeBlock
          language="java"
          title="Declaration patterns"
          code={`// Declaration
int number;

// Declaration with initialization
int count = 0;

// Multiple declarations
int x, y, z;
int a = 1, b = 2, c = 3;

// Final (constant) variables
final int MAX_VALUE = 100;
final double PI = 3.14159;

// Static variables (class-level)
public class Example {
    static int staticVar = 10;  // Shared by all instances
    int instanceVar = 20;       // Unique to each instance
}

// Local variable type inference (Java 10+)
var message = "Hello";  // Inferred as String
var number = 42;        // Inferred as int
var list = new ArrayList<String>();  // Inferred type`}
        />

        <h2 className="doc-subheading">Type Conversion</h2>

        <CodeBlock
          language="java"
          title="Type casting"
          code={`// Implicit casting (widening) - automatic
int myInt = 100;
long myLong = myInt;     // int to long
double myDouble = myLong; // long to double

// Explicit casting (narrowing) - manual
double d = 9.78;
int i = (int) d;         // Loses decimal: 9

long l = 100000L;
int x = (int) l;         // May lose data if too large

// String conversions
String numStr = "123";
int num = Integer.parseInt(numStr);      // String to int
double dec = Double.parseDouble("3.14"); // String to double

int value = 42;
String str = Integer.toString(value);    // int to String
String str2 = String.valueOf(value);     // Alternative
String str3 = "" + value;                // Concatenation trick

// Wrapper class conversions
Integer intObj = Integer.valueOf(42);
int primitive = intObj.intValue();

// Auto-boxing and unboxing
Integer boxed = 100;         // Auto-boxing
int unboxed = boxed;         // Auto-unboxing`}
        />

        <h2 className="doc-subheading">Strings</h2>

        <CodeBlock
          language="java"
          title="String operations"
          code={`String str = "Hello, World!";

// Length
int len = str.length();  // 13

// Character access
char first = str.charAt(0);  // 'H'

// Substring
String sub = str.substring(0, 5);  // "Hello"

// Concatenation
String full = "Hello" + " " + "World";
String concat = str.concat(" Java");

// Case conversion
String upper = str.toUpperCase();
String lower = str.toLowerCase();

// Trim whitespace
String trimmed = "  text  ".trim();  // "text"

// Replace
String replaced = str.replace("World", "Java");

// Split
String[] parts = "a,b,c".split(",");  // ["a", "b", "c"]

// Contains, starts/ends with
boolean contains = str.contains("World");  // true
boolean starts = str.startsWith("Hello");  // true
boolean ends = str.endsWith("!");          // true

// Compare
boolean equals = str.equals("Hello, World!");  // true
boolean ignoreCase = str.equalsIgnoreCase("HELLO, WORLD!");  // true
int compare = "abc".compareTo("abd");  // -1

// StringBuilder (mutable strings)
StringBuilder sb = new StringBuilder();
sb.append("Hello");
sb.append(" ");
sb.append("World");
String result = sb.toString();  // "Hello World"`}
        />

        <h2 className="doc-subheading">Variable Scope</h2>

        <CodeBlock
          language="java"
          title="Variable scope"
          code={`public class ScopeExample {
    // Class/instance variables
    static int classVar = 100;
    int instanceVar = 50;
    
    public void method() {
        // Local variable
        int localVar = 10;
        
        // Block scope
        if (true) {
            int blockVar = 5;
            System.out.println(blockVar);  // OK
        }
        // blockVar not accessible here
        
        // Loop variable
        for (int i = 0; i < 5; i++) {
            System.out.println(i);
        }
        // i not accessible here
    }
    
    public static void main(String[] args) {
        // Access static variable
        System.out.println(classVar);
        
        // Need instance for instance variable
        ScopeExample obj = new ScopeExample();
        System.out.println(obj.instanceVar);
    }
}`}
        />

        <div className="flex justify-between mt-8">
          <Button variant="outline" asChild>
            <Link to="/docs/java/syntax">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Syntax
            </Link>
          </Button>
          <Button asChild>
            <Link to="/docs/java/conditions">
              Next: Conditions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
