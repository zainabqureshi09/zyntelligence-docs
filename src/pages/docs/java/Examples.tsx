import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function JavaExamples() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-red-500/10 text-red-500">
            Java
          </span>
        </div>

        <h1 className="doc-heading">Java Examples</h1>

        <p className="doc-paragraph">
          Practical Java examples demonstrating object-oriented programming and common patterns.
        </p>

        <h2 className="doc-subheading">Example 1: Bank Account Class</h2>

        <CodeBlock
          language="java"
          title="BankAccount.java"
          code={`public class BankAccount {
    private String accountNumber;
    private String holderName;
    private double balance;
    
    public BankAccount(String accountNumber, String holderName) {
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = 0.0;
    }
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.printf("Deposited: $%.2f%n", amount);
        } else {
            System.out.println("Invalid deposit amount");
        }
    }
    
    public boolean withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.printf("Withdrawn: $%.2f%n", amount);
            return true;
        } else {
            System.out.println("Insufficient funds or invalid amount");
            return false;
        }
    }
    
    public void displayInfo() {
        System.out.println("Account: " + accountNumber);
        System.out.println("Holder: " + holderName);
        System.out.printf("Balance: $%.2f%n", balance);
    }
    
    public double getBalance() {
        return balance;
    }
    
    public static void main(String[] args) {
        BankAccount account = new BankAccount("123456", "John Doe");
        account.deposit(1000);
        account.withdraw(250);
        account.displayInfo();
    }
}`}
        />

        <h2 className="doc-subheading">Example 2: To-Do List Application</h2>

        <CodeBlock
          language="java"
          title="TodoApp.java"
          code={`import java.util.*;

class Task {
    private String description;
    private boolean completed;
    private int priority;
    
    public Task(String description, int priority) {
        this.description = description;
        this.priority = priority;
        this.completed = false;
    }
    
    public void complete() { completed = true; }
    public boolean isCompleted() { return completed; }
    public String getDescription() { return description; }
    public int getPriority() { return priority; }
    
    @Override
    public String toString() {
        String status = completed ? "[X]" : "[ ]";
        return String.format("%s P%d: %s", status, priority, description);
    }
}

public class TodoApp {
    private List<Task> tasks = new ArrayList<>();
    private Scanner scanner = new Scanner(System.in);
    
    public void addTask(String description, int priority) {
        tasks.add(new Task(description, priority));
        System.out.println("Task added!");
    }
    
    public void listTasks() {
        if (tasks.isEmpty()) {
            System.out.println("No tasks!");
            return;
        }
        
        System.out.println("\\n=== Tasks ===");
        for (int i = 0; i < tasks.size(); i++) {
            System.out.println((i + 1) + ". " + tasks.get(i));
        }
    }
    
    public void completeTask(int index) {
        if (index >= 0 && index < tasks.size()) {
            tasks.get(index).complete();
            System.out.println("Task completed!");
        }
    }
    
    public void sortByPriority() {
        tasks.sort((a, b) -> a.getPriority() - b.getPriority());
        System.out.println("Sorted by priority!");
    }
    
    public void run() {
        while (true) {
            System.out.println("\\n1. Add  2. List  3. Complete  4. Sort  5. Exit");
            System.out.print("Choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine();
            
            switch (choice) {
                case 1:
                    System.out.print("Task: ");
                    String desc = scanner.nextLine();
                    System.out.print("Priority (1-5): ");
                    int priority = scanner.nextInt();
                    addTask(desc, priority);
                    break;
                case 2: listTasks(); break;
                case 3:
                    System.out.print("Task #: ");
                    completeTask(scanner.nextInt() - 1);
                    break;
                case 4: sortByPriority(); break;
                case 5: return;
            }
        }
    }
    
    public static void main(String[] args) {
        new TodoApp().run();
    }
}`}
        />

        <h2 className="doc-subheading">Example 3: Simple HTTP Client</h2>

        <CodeBlock
          language="java"
          title="HttpClientExample.java"
          code={`import java.net.http.*;
import java.net.URI;
import java.time.Duration;

public class HttpClientExample {
    private HttpClient client;
    
    public HttpClientExample() {
        client = HttpClient.newBuilder()
                .connectTimeout(Duration.ofSeconds(10))
                .build();
    }
    
    public String get(String url) throws Exception {
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .GET()
                .header("Accept", "application/json")
                .build();
        
        HttpResponse<String> response = client.send(
                request,
                HttpResponse.BodyHandlers.ofString()
        );
        
        return response.body();
    }
    
    public String post(String url, String json) throws Exception {
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .POST(HttpRequest.BodyPublishers.ofString(json))
                .header("Content-Type", "application/json")
                .build();
        
        HttpResponse<String> response = client.send(
                request,
                HttpResponse.BodyHandlers.ofString()
        );
        
        return response.body();
    }
    
    public static void main(String[] args) {
        HttpClientExample http = new HttpClientExample();
        
        try {
            // GET request
            String result = http.get("https://jsonplaceholder.typicode.com/posts/1");
            System.out.println("GET Response: " + result);
            
            // POST request
            String json = "{\\"title\\":\\"Test\\",\\"body\\":\\"Content\\",\\"userId\\":1}";
            String postResult = http.post(
                    "https://jsonplaceholder.typicode.com/posts",
                    json
            );
            System.out.println("POST Response: " + postResult);
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`}
        />

        <h2 className="doc-subheading">Example 4: File Operations</h2>

        <CodeBlock
          language="java"
          title="FileOperations.java"
          code={`import java.io.*;
import java.nio.file.*;
import java.util.*;

public class FileOperations {
    
    // Write text to file
    public static void writeFile(String filename, String content) 
            throws IOException {
        Files.writeString(Path.of(filename), content);
        System.out.println("Written to " + filename);
    }
    
    // Read text from file
    public static String readFile(String filename) throws IOException {
        return Files.readString(Path.of(filename));
    }
    
    // Read lines from file
    public static List<String> readLines(String filename) throws IOException {
        return Files.readAllLines(Path.of(filename));
    }
    
    // Append to file
    public static void appendToFile(String filename, String content) 
            throws IOException {
        Files.writeString(
                Path.of(filename),
                content,
                StandardOpenOption.APPEND,
                StandardOpenOption.CREATE
        );
    }
    
    // Copy file
    public static void copyFile(String source, String destination) 
            throws IOException {
        Files.copy(
                Path.of(source),
                Path.of(destination),
                StandardCopyOption.REPLACE_EXISTING
        );
    }
    
    // List directory contents
    public static void listDirectory(String path) throws IOException {
        try (var stream = Files.list(Path.of(path))) {
            stream.forEach(p -> {
                String type = Files.isDirectory(p) ? "[DIR]" : "[FILE]";
                System.out.println(type + " " + p.getFileName());
            });
        }
    }
    
    public static void main(String[] args) {
        try {
            // Write
            writeFile("test.txt", "Hello, Java!\\nLine 2\\nLine 3");
            
            // Read
            String content = readFile("test.txt");
            System.out.println("Content:\\n" + content);
            
            // Read lines
            List<String> lines = readLines("test.txt");
            System.out.println("Lines: " + lines.size());
            
            // Append
            appendToFile("test.txt", "\\nAppended line");
            
            // List current directory
            listDirectory(".");
            
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`}
        />

        <div className="mt-8 p-6 rounded-lg bg-primary/5 border border-primary/20">
          <h3 className="font-semibold text-foreground mb-2">Java Project Ideas</h3>
          <ul className="text-muted-foreground text-sm space-y-1">
            <li>Build a library management system with books and members</li>
            <li>Create a simple REST API with Spring Boot</li>
            <li>Implement a chat application with sockets</li>
            <li>Build a command-line expense tracker</li>
          </ul>
        </div>

        <div className="flex justify-start mt-8">
          <Button variant="outline" asChild>
            <Link to="/docs/java/functions">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Methods
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
