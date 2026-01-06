import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PythonSyntax() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">
            Python
          </span>
        </div>

        <h1 className="doc-heading">Python Syntax</h1>

        <p className="doc-paragraph">
          Python syntax is designed to be clean and readable. Unlike many other programming
          languages, Python uses indentation to define code blocks instead of curly braces.
        </p>

        <h2 className="doc-subheading">Indentation</h2>

        <p className="doc-paragraph">
          Indentation is crucial in Python. It indicates a block of code. Python uses whitespace
          (spaces or tabs) at the beginning of a line to define scope.
        </p>

        <CodeBlock
          language="python"
          title="Correct indentation"
          code={`if 5 > 2:
    print("Five is greater than two!")
    print("This is also inside the if block")

print("This is outside the if block")`}
        />

        <p className="doc-paragraph">
          The number of spaces is up to you, but you must use the same number throughout the
          same block. Most Python programmers use 4 spaces.
        </p>

        <CodeBlock
          language="python"
          title="Incorrect indentation (will cause an error)"
          code={`if 5 > 2:
print("This will cause an IndentationError")`}
        />

        <h2 className="doc-subheading">Comments</h2>

        <p className="doc-paragraph">
          Comments are used to explain Python code and make it more readable. Python uses the
          <code className="inline-code">#</code> symbol for single-line comments.
        </p>

        <CodeBlock
          language="python"
          title="Comments in Python"
          code={`# This is a single-line comment
print("Hello, World!")  # This is an inline comment

# You can use comments to explain your code
# or to temporarily disable code

"""
This is a multi-line string.
It can be used as a multi-line comment.
Also known as a docstring when used at the 
start of a function or class.
"""`}
        />

        <h2 className="doc-subheading">Line Continuation</h2>

        <p className="doc-paragraph">
          For long lines of code, you can use a backslash <code className="inline-code">\</code> to
          continue on the next line, or parentheses for implicit continuation.
        </p>

        <CodeBlock
          language="python"
          title="Line continuation"
          code={`# Using backslash
total = 1 + 2 + 3 + \\
        4 + 5 + 6

# Using parentheses (preferred)
total = (1 + 2 + 3 +
         4 + 5 + 6)

# Works for function calls too
result = some_function(
    argument_one,
    argument_two,
    argument_three
)`}
        />

        <h2 className="doc-subheading">Multiple Statements on One Line</h2>

        <p className="doc-paragraph">
          You can use a semicolon to separate multiple statements on one line, although this is
          generally not recommended for readability.
        </p>

        <CodeBlock
          language="python"
          title="Multiple statements"
          code={`# Multiple statements on one line (not recommended)
x = 5; y = 10; z = x + y

# Better approach - separate lines
x = 5
y = 10
z = x + y`}
        />

        <h2 className="doc-subheading">Python Keywords</h2>

        <p className="doc-paragraph">
          Python has a set of reserved words that cannot be used as variable names:
        </p>

        <div className="p-4 rounded-lg bg-muted font-mono text-sm mb-6 overflow-x-auto">
          <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
            {['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 
              'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 
              'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 
              'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 
              'try', 'while', 'with', 'yield'].map((keyword) => (
              <span key={keyword} className="text-primary">{keyword}</span>
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <Button variant="outline" asChild>
            <Link to="/docs/python/introduction">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Introduction
            </Link>
          </Button>
          <Button asChild>
            <Link to="/docs/python/variables">
              Next: Variables
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
