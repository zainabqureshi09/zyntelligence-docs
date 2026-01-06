import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function JavaFunctions() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-red-500/10 text-red-500">
            Java
          </span>
        </div>

        <h1 className="doc-heading">Java Methods</h1>

        <p className="doc-paragraph">
          In Java, functions are called methods and they belong to classes. Methods are reusable
          blocks of code that perform specific tasks.
        </p>

        <h2 className="doc-subheading">Method Declaration</h2>

        <CodeBlock
          language="java"
          title="Basic methods"
          code={`public class MethodExamples {
    
    // Void method (no return value)
    public static void greet() {
        System.out.println("Hello, World!");
    }
    
    // Method with return value
    public static int add(int a, int b) {
        return a + b;
    }
    
    // Method with parameters
    public static void greetPerson(String name) {
        System.out.println("Hello, " + name + "!");
    }
    
    public static void main(String[] args) {
        greet();                       // Hello, World!
        int sum = add(5, 3);           // 8
        greetPerson("Alice");          // Hello, Alice!
    }
}`}
        />

        <h2 className="doc-subheading">Method Overloading</h2>

        <CodeBlock
          language="java"
          title="Method overloading"
          code={`public class Calculator {
    
    // Overloaded methods - same name, different parameters
    public static int add(int a, int b) {
        return a + b;
    }
    
    public static double add(double a, double b) {
        return a + b;
    }
    
    public static int add(int a, int b, int c) {
        return a + b + c;
    }
    
    public static String add(String a, String b) {
        return a + b;
    }
    
    public static void main(String[] args) {
        System.out.println(add(1, 2));           // 3 (int)
        System.out.println(add(1.5, 2.5));       // 4.0 (double)
        System.out.println(add(1, 2, 3));        // 6 (three ints)
        System.out.println(add("Hello", "World")); // HelloWorld
    }
}`}
        />

        <h2 className="doc-subheading">Static vs Instance Methods</h2>

        <CodeBlock
          language="java"
          title="Static and instance methods"
          code={`public class Person {
    // Instance variable
    private String name;
    
    // Static variable
    private static int count = 0;
    
    // Constructor
    public Person(String name) {
        this.name = name;
        count++;
    }
    
    // Instance method - operates on instance data
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    // Static method - belongs to class, not instance
    public static int getCount() {
        return count;
    }
    
    public static void main(String[] args) {
        // Call static method without instance
        System.out.println(Person.getCount());  // 0
        
        // Create instances
        Person p1 = new Person("Alice");
        Person p2 = new Person("Bob");
        
        // Call instance methods on objects
        System.out.println(p1.getName());       // Alice
        System.out.println(Person.getCount());  // 2
    }
}`}
        />

        <h2 className="doc-subheading">Variable Arguments (Varargs)</h2>

        <CodeBlock
          language="java"
          title="Varargs"
          code={`public class VarargsExample {
    
    // Varargs - accepts variable number of arguments
    public static int sum(int... numbers) {
        int total = 0;
        for (int n : numbers) {
            total += n;
        }
        return total;
    }
    
    // Varargs with other parameters (varargs must be last)
    public static void printAll(String prefix, String... messages) {
        for (String msg : messages) {
            System.out.println(prefix + msg);
        }
    }
    
    public static void main(String[] args) {
        System.out.println(sum(1, 2, 3));           // 6
        System.out.println(sum(1, 2, 3, 4, 5));     // 15
        System.out.println(sum());                   // 0
        
        printAll("-> ", "Hello", "World", "Java");
    }
}`}
        />

        <h2 className="doc-subheading">Recursion</h2>

        <CodeBlock
          language="java"
          title="Recursive methods"
          code={`public class Recursion {
    
    // Factorial
    public static long factorial(int n) {
        if (n <= 1) return 1;          // Base case
        return n * factorial(n - 1);    // Recursive call
    }
    
    // Fibonacci
    public static int fibonacci(int n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    
    // Binary search
    public static int binarySearch(int[] arr, int target, int left, int right) {
        if (left > right) return -1;
        
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) return mid;
        if (arr[mid] > target) 
            return binarySearch(arr, target, left, mid - 1);
        return binarySearch(arr, target, mid + 1, right);
    }
    
    public static void main(String[] args) {
        System.out.println(factorial(5));    // 120
        System.out.println(fibonacci(10));   // 55
        
        int[] arr = {1, 3, 5, 7, 9, 11};
        System.out.println(binarySearch(arr, 7, 0, arr.length - 1));  // 3
    }
}`}
        />

        <h2 className="doc-subheading">Lambda Expressions (Java 8+)</h2>

        <CodeBlock
          language="java"
          title="Lambda expressions"
          code={`import java.util.*;
import java.util.function.*;

public class LambdaExample {
    public static void main(String[] args) {
        // Lambda with functional interface
        Runnable run = () -> System.out.println("Running!");
        run.run();
        
        // Lambda with parameters
        BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;
        System.out.println(add.apply(5, 3));  // 8
        
        // Single parameter (no parentheses needed)
        Function<String, Integer> length = s -> s.length();
        System.out.println(length.apply("Hello"));  // 5
        
        // Multi-line lambda
        Function<Integer, Integer> factorial = n -> {
            int result = 1;
            for (int i = 1; i <= n; i++) {
                result *= i;
            }
            return result;
        };
        System.out.println(factorial.apply(5));  // 120
        
        // With collections
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
        
        // forEach
        names.forEach(name -> System.out.println(name));
        
        // sort with lambda
        names.sort((a, b) -> a.compareTo(b));
        
        // filter with streams
        names.stream()
             .filter(name -> name.startsWith("A"))
             .forEach(System.out::println);
        
        // Method reference
        names.forEach(System.out::println);
    }
}`}
        />

        <h2 className="doc-subheading">Passing Methods as Parameters</h2>

        <CodeBlock
          language="java"
          title="Functional interfaces"
          code={`import java.util.function.*;

public class FunctionalExample {
    
    // Method that takes a function as parameter
    public static void processNumbers(int[] numbers, Consumer<Integer> action) {
        for (int n : numbers) {
            action.accept(n);
        }
    }
    
    // Method that transforms values
    public static int[] transform(int[] numbers, Function<Integer, Integer> transformer) {
        int[] result = new int[numbers.length];
        for (int i = 0; i < numbers.length; i++) {
            result[i] = transformer.apply(numbers[i]);
        }
        return result;
    }
    
    // Method that filters values
    public static List<Integer> filter(int[] numbers, Predicate<Integer> condition) {
        List<Integer> result = new ArrayList<>();
        for (int n : numbers) {
            if (condition.test(n)) {
                result.add(n);
            }
        }
        return result;
    }
    
    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 4, 5};
        
        // Pass lambda as action
        processNumbers(nums, n -> System.out.println(n * 2));
        
        // Transform: double each number
        int[] doubled = transform(nums, n -> n * 2);
        
        // Filter: keep even numbers
        List<Integer> evens = filter(nums, n -> n % 2 == 0);
    }
}`}
        />

        <div className="flex justify-between mt-8">
          <Button variant="outline" asChild>
            <Link to="/docs/java/loops">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Loops
            </Link>
          </Button>
          <Button asChild>
            <Link to="/docs/java/examples">
              Next: Examples
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
