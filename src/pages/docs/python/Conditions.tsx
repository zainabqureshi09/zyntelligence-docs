import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PythonConditions() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">
            Python
          </span>
        </div>

        <h1 className="doc-heading">Python Conditions</h1>

        <p className="doc-paragraph">
          Python supports the usual logical conditions from mathematics. These conditions can be
          used in several ways, most commonly in "if statements" and loops.
        </p>

        <h2 className="doc-subheading">Comparison Operators</h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold">Operator</th>
                <th className="text-left py-3 px-4 font-semibold">Name</th>
                <th className="text-left py-3 px-4 font-semibold">Example</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['==', 'Equal', 'x == y'],
                ['!=', 'Not equal', 'x != y'],
                ['>', 'Greater than', 'x > y'],
                ['<', 'Less than', 'x < y'],
                ['>=', 'Greater than or equal', 'x >= y'],
                ['<=', 'Less than or equal', 'x <= y'],
              ].map(([op, name, example]) => (
                <tr key={op} className="border-b border-border">
                  <td className="py-3 px-4 font-mono text-primary">{op}</td>
                  <td className="py-3 px-4 text-muted-foreground">{name}</td>
                  <td className="py-3 px-4 font-mono">{example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="doc-subheading">If Statement</h2>

        <p className="doc-paragraph">
          The <code className="inline-code">if</code> statement executes code only when a condition is True:
        </p>

        <CodeBlock
          language="python"
          title="Basic if statement"
          code={`age = 18

if age >= 18:
    print("You are an adult")
    print("You can vote")

# Output:
# You are an adult
# You can vote`}
        />

        <h2 className="doc-subheading">If-Else Statement</h2>

        <p className="doc-paragraph">
          The <code className="inline-code">else</code> keyword catches anything not caught by the preceding conditions:
        </p>

        <CodeBlock
          language="python"
          title="If-else statement"
          code={`age = 15

if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")

# Output: You are a minor`}
        />

        <h2 className="doc-subheading">Elif Statement</h2>

        <p className="doc-paragraph">
          The <code className="inline-code">elif</code> keyword means "if the previous conditions were not true,
          then try this condition":
        </p>

        <CodeBlock
          language="python"
          title="Elif statement"
          code={`score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Your grade is: {grade}")
# Output: Your grade is: B`}
        />

        <h2 className="doc-subheading">Logical Operators</h2>

        <p className="doc-paragraph">
          You can combine conditions using logical operators:
        </p>

        <CodeBlock
          language="python"
          title="Logical operators"
          code={`age = 25
has_license = True

# AND operator - both conditions must be True
if age >= 18 and has_license:
    print("You can drive")

# OR operator - at least one condition must be True
day = "Saturday"
if day == "Saturday" or day == "Sunday":
    print("It's the weekend!")

# NOT operator - reverses the result
is_raining = False
if not is_raining:
    print("No need for an umbrella")`}
        />

        <h2 className="doc-subheading">Nested If Statements</h2>

        <CodeBlock
          language="python"
          title="Nested if"
          code={`x = 41

if x > 10:
    print("x is above 10")
    if x > 20:
        print("and also above 20")
        if x > 30:
            print("and also above 30")

# Output:
# x is above 10
# and also above 20
# and also above 30`}
        />

        <h2 className="doc-subheading">Ternary Operator</h2>

        <p className="doc-paragraph">
          Python has a shorthand if-else called the conditional expression or ternary operator:
        </p>

        <CodeBlock
          language="python"
          title="Ternary operator"
          code={`age = 20

# Traditional if-else
if age >= 18:
    status = "adult"
else:
    status = "minor"

# Ternary operator (same result)
status = "adult" if age >= 18 else "minor"

print(status)  # Output: adult`}
        />

        <div className="flex justify-between mt-8">
          <Button variant="outline" asChild>
            <Link to="/docs/python/variables">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Variables
            </Link>
          </Button>
          <Button asChild>
            <Link to="/docs/python/loops">
              Next: Loops
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
