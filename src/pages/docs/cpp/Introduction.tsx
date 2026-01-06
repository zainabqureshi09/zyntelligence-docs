import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CppIntroduction() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-blue-600/10 text-blue-600 dark:text-blue-400">
            C++
          </span>
        </div>

        <h1 className="doc-heading">Introduction to C++</h1>

        <p className="doc-paragraph">
          C++ is a powerful, high-performance programming language. It was developed as an
          extension of C and provides object-oriented features while maintaining low-level
          control over system resources.
        </p>

        <h2 className="doc-subheading">Why Learn C++?</h2>

        <ul className="doc-list">
          <li>High performance - used in games, operating systems, and embedded systems</li>
          <li>Object-oriented programming support</li>
          <li>Close to hardware with memory management control</li>
          <li>Foundation for understanding other languages</li>
          <li>Widely used in competitive programming</li>
        </ul>

        <h2 className="doc-subheading">Your First C++ Program</h2>

        <CodeBlock
          language="cpp"
          title="hello.cpp"
          code={`#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}

// Using namespace std
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`}
        />

        <h2 className="doc-subheading">Program Structure</h2>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-lg border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-2">#include</h3>
            <p className="text-sm text-muted-foreground">
              Preprocessor directive that includes header files
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-2">int main()</h3>
            <p className="text-sm text-muted-foreground">
              Entry point of every C++ program
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-2">std::cout</h3>
            <p className="text-sm text-muted-foreground">
              Standard output stream for printing
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-2">return 0</h3>
            <p className="text-sm text-muted-foreground">
              Indicates successful program execution
            </p>
          </div>
        </div>

        <h2 className="doc-subheading">Compiling and Running</h2>

        <CodeBlock
          language="cpp"
          title="Terminal commands"
          code={`// Compile with g++
g++ hello.cpp -o hello

// Run the program
./hello

// Compile with C++17 standard
g++ -std=c++17 hello.cpp -o hello

// Compile with debugging info
g++ -g hello.cpp -o hello`}
        />

        <h2 className="doc-subheading">C++ Features</h2>

        <CodeBlock
          language="cpp"
          title="Modern C++ features"
          code={`#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main() {
    // Auto type inference
    auto number = 42;
    auto text = "Hello";
    
    // Range-based for loop
    vector<int> numbers = {1, 2, 3, 4, 5};
    for (auto n : numbers) {
        cout << n << " ";
    }
    cout << endl;
    
    // Lambda function
    auto add = [](int a, int b) { return a + b; };
    cout << "Sum: " << add(5, 3) << endl;
    
    return 0;
}`}
        />

        <div className="mt-8 p-6 rounded-lg bg-primary/5 border border-primary/20">
          <h3 className="font-semibold text-foreground mb-2">Ready to continue?</h3>
          <p className="text-muted-foreground mb-4">
            Learn about C++ syntax and basic structure.
          </p>
          <Button asChild>
            <Link to="/docs/cpp/syntax">
              Next: C++ Syntax
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
