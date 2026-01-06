import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CppExamples() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-blue-600/10 text-blue-600 dark:text-blue-400">
            C++
          </span>
        </div>

        <h1 className="doc-heading">C++ Examples</h1>

        <p className="doc-paragraph">
          Practical C++ examples demonstrating real-world applications of the concepts learned.
        </p>

        <h2 className="doc-subheading">Example 1: Calculator Class</h2>

        <CodeBlock
          language="cpp"
          title="calculator.cpp"
          code={`#include <iostream>
#include <stdexcept>
using namespace std;

class Calculator {
public:
    static double add(double a, double b) { return a + b; }
    static double subtract(double a, double b) { return a - b; }
    static double multiply(double a, double b) { return a * b; }
    
    static double divide(double a, double b) {
        if (b == 0) {
            throw runtime_error("Division by zero!");
        }
        return a / b;
    }
    
    static double power(double base, int exponent) {
        double result = 1;
        for (int i = 0; i < abs(exponent); i++) {
            result *= base;
        }
        return exponent < 0 ? 1 / result : result;
    }
};

int main() {
    cout << "5 + 3 = " << Calculator::add(5, 3) << endl;
    cout << "5 - 3 = " << Calculator::subtract(5, 3) << endl;
    cout << "5 * 3 = " << Calculator::multiply(5, 3) << endl;
    cout << "5 / 3 = " << Calculator::divide(5, 3) << endl;
    cout << "2^10 = " << Calculator::power(2, 10) << endl;
    
    try {
        Calculator::divide(5, 0);
    } catch (const runtime_error& e) {
        cout << "Error: " << e.what() << endl;
    }
    
    return 0;
}`}
        />

        <h2 className="doc-subheading">Example 2: Student Management</h2>

        <CodeBlock
          language="cpp"
          title="student.cpp"
          code={`#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

class Student {
private:
    string name;
    int id;
    vector<double> grades;

public:
    Student(string n, int i) : name(n), id(i) {}
    
    void addGrade(double grade) {
        if (grade >= 0 && grade <= 100) {
            grades.push_back(grade);
        }
    }
    
    double getAverage() const {
        if (grades.empty()) return 0;
        double sum = 0;
        for (double g : grades) sum += g;
        return sum / grades.size();
    }
    
    char getLetterGrade() const {
        double avg = getAverage();
        if (avg >= 90) return 'A';
        if (avg >= 80) return 'B';
        if (avg >= 70) return 'C';
        if (avg >= 60) return 'D';
        return 'F';
    }
    
    void display() const {
        cout << "Student: " << name << " (ID: " << id << ")" << endl;
        cout << "Grades: ";
        for (double g : grades) cout << g << " ";
        cout << endl;
        cout << "Average: " << getAverage() << " (" << getLetterGrade() << ")" << endl;
    }
    
    string getName() const { return name; }
};

int main() {
    vector<Student> students;
    
    Student s1("Alice", 101);
    s1.addGrade(95);
    s1.addGrade(87);
    s1.addGrade(92);
    students.push_back(s1);
    
    Student s2("Bob", 102);
    s2.addGrade(78);
    s2.addGrade(82);
    s2.addGrade(80);
    students.push_back(s2);
    
    for (const Student& s : students) {
        s.display();
        cout << "---" << endl;
    }
    
    return 0;
}`}
        />

        <h2 className="doc-subheading">Example 3: Linked List</h2>

        <CodeBlock
          language="cpp"
          title="linkedlist.cpp"
          code={`#include <iostream>
using namespace std;

template <typename T>
class LinkedList {
private:
    struct Node {
        T data;
        Node* next;
        Node(T val) : data(val), next(nullptr) {}
    };
    
    Node* head;
    int size;

public:
    LinkedList() : head(nullptr), size(0) {}
    
    ~LinkedList() {
        while (head) {
            Node* temp = head;
            head = head->next;
            delete temp;
        }
    }
    
    void append(T value) {
        Node* newNode = new Node(value);
        if (!head) {
            head = newNode;
        } else {
            Node* current = head;
            while (current->next) {
                current = current->next;
            }
            current->next = newNode;
        }
        size++;
    }
    
    void prepend(T value) {
        Node* newNode = new Node(value);
        newNode->next = head;
        head = newNode;
        size++;
    }
    
    bool remove(T value) {
        if (!head) return false;
        
        if (head->data == value) {
            Node* temp = head;
            head = head->next;
            delete temp;
            size--;
            return true;
        }
        
        Node* current = head;
        while (current->next && current->next->data != value) {
            current = current->next;
        }
        
        if (current->next) {
            Node* temp = current->next;
            current->next = temp->next;
            delete temp;
            size--;
            return true;
        }
        return false;
    }
    
    void display() const {
        Node* current = head;
        while (current) {
            cout << current->data << " -> ";
            current = current->next;
        }
        cout << "null" << endl;
    }
    
    int getSize() const { return size; }
};

int main() {
    LinkedList<int> list;
    list.append(1);
    list.append(2);
    list.append(3);
    list.prepend(0);
    
    list.display();  // 0 -> 1 -> 2 -> 3 -> null
    
    list.remove(2);
    list.display();  // 0 -> 1 -> 3 -> null
    
    return 0;
}`}
        />

        <h2 className="doc-subheading">Example 4: File I/O</h2>

        <CodeBlock
          language="cpp"
          title="fileio.cpp"
          code={`#include <iostream>
#include <fstream>
#include <string>
#include <vector>
using namespace std;

class FileManager {
public:
    static bool writeToFile(const string& filename, const string& content) {
        ofstream file(filename);
        if (!file.is_open()) {
            cerr << "Error opening file for writing" << endl;
            return false;
        }
        file << content;
        file.close();
        return true;
    }
    
    static string readFromFile(const string& filename) {
        ifstream file(filename);
        if (!file.is_open()) {
            cerr << "Error opening file for reading" << endl;
            return "";
        }
        
        string content, line;
        while (getline(file, line)) {
            content += line + "\\n";
        }
        file.close();
        return content;
    }
    
    static vector<string> readLines(const string& filename) {
        vector<string> lines;
        ifstream file(filename);
        if (!file.is_open()) return lines;
        
        string line;
        while (getline(file, line)) {
            lines.push_back(line);
        }
        file.close();
        return lines;
    }
    
    static bool appendToFile(const string& filename, const string& content) {
        ofstream file(filename, ios::app);
        if (!file.is_open()) return false;
        file << content;
        file.close();
        return true;
    }
};

int main() {
    // Write
    FileManager::writeToFile("test.txt", "Hello, World!\\nLine 2\\nLine 3");
    
    // Read
    string content = FileManager::readFromFile("test.txt");
    cout << "File content:\\n" << content << endl;
    
    // Append
    FileManager::appendToFile("test.txt", "Line 4\\n");
    
    // Read lines
    vector<string> lines = FileManager::readLines("test.txt");
    cout << "Number of lines: " << lines.size() << endl;
    
    return 0;
}`}
        />

        <div className="mt-8 p-6 rounded-lg bg-primary/5 border border-primary/20">
          <h3 className="font-semibold text-foreground mb-2">Practice Projects</h3>
          <ul className="text-muted-foreground text-sm space-y-1">
            <li>Build a simple banking system with accounts and transactions</li>
            <li>Create a to-do list application with file persistence</li>
            <li>Implement common sorting algorithms (quicksort, mergesort)</li>
            <li>Build a simple game like Tic-Tac-Toe or Snake</li>
          </ul>
        </div>

        <div className="flex justify-start mt-8">
          <Button variant="outline" asChild>
            <Link to="/docs/cpp/functions">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Functions
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
