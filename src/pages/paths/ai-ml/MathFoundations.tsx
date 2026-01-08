import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MathFoundations() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-purple-500/10 text-purple-600 dark:text-purple-400">
            AI & Machine Learning
          </span>
        </div>

        <h1 className="doc-heading">Math Foundations for ML</h1>

        <p className="doc-paragraph">
          Machine learning is built on mathematical concepts. Don't worry - you don't need a 
          math degree, but understanding these fundamentals will help you build better models 
          and debug issues effectively.
        </p>

        <h2 className="doc-subheading">1. Linear Algebra Essentials</h2>

        <p className="doc-paragraph">
          Linear algebra deals with vectors, matrices, and linear transformations. It's the 
          foundation of how data is represented and transformed in ML.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Vectors</h3>
        <p className="doc-paragraph">
          A vector is an ordered list of numbers representing a point or direction in space.
        </p>

        <CodeBlock
          language="python"
          title="vectors.py"
          code={`import numpy as np

# Creating vectors
v1 = np.array([1, 2, 3])
v2 = np.array([4, 5, 6])

# Vector operations
addition = v1 + v2           # [5, 7, 9]
scalar_mult = 2 * v1         # [2, 4, 6]
dot_product = np.dot(v1, v2) # 1*4 + 2*5 + 3*6 = 32

# Vector magnitude (length)
magnitude = np.linalg.norm(v1)  # sqrt(1² + 2² + 3²) = 3.74

print(f"Dot product: {dot_product}")
print(f"Magnitude of v1: {magnitude:.2f}")`}
        />

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Matrices</h3>
        <p className="doc-paragraph">
          A matrix is a 2D array of numbers. In ML, data is often stored as matrices where 
          rows are samples and columns are features.
        </p>

        <CodeBlock
          language="python"
          title="matrices.py"
          code={`import numpy as np

# Creating matrices
A = np.array([[1, 2], 
              [3, 4]])
B = np.array([[5, 6], 
              [7, 8]])

# Matrix operations
addition = A + B
multiplication = np.dot(A, B)  # Matrix multiplication
transpose = A.T                 # Swap rows and columns

# Identity matrix (like multiplying by 1)
I = np.eye(2)  # [[1, 0], [0, 1]]

print("Matrix multiplication:")
print(multiplication)
# [[19, 22],
#  [43, 50]]`}
        />

        <h2 className="doc-subheading">2. Statistics & Probability</h2>

        <p className="doc-paragraph">
          Statistics helps us understand data distributions, while probability helps us 
          make predictions under uncertainty.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Descriptive Statistics</h3>

        <CodeBlock
          language="python"
          title="statistics.py"
          code={`import numpy as np
from scipy import stats

data = np.array([23, 25, 28, 22, 26, 24, 27, 25, 29, 24])

# Central tendency
mean = np.mean(data)       # Average: 25.3
median = np.median(data)   # Middle value: 25.0
mode = stats.mode(data)    # Most frequent: 24, 25

# Spread/Dispersion
variance = np.var(data)    # Average squared deviation
std_dev = np.std(data)     # Standard deviation: 2.14
data_range = np.ptp(data)  # Max - Min: 7

print(f"Mean: {mean:.2f}")
print(f"Median: {median}")
print(f"Standard Deviation: {std_dev:.2f}")`}
        />

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Probability Basics</h3>

        <CodeBlock
          language="python"
          title="probability.py"
          code={`import numpy as np

# Probability = favorable outcomes / total outcomes

# Example: Rolling a die
total_outcomes = 6
prob_getting_4 = 1 / 6  # 16.67%
prob_even = 3 / 6       # 50%

# Conditional Probability
# P(A|B) = P(A and B) / P(B)

# Normal Distribution (Gaussian)
from scipy.stats import norm

# What's the probability of a value less than 1.5 
# in a standard normal distribution?
prob = norm.cdf(1.5)
print(f"P(X < 1.5): {prob:.4f}")  # 0.9332

# Generate random samples from normal distribution
samples = np.random.normal(mean=0, scale=1, size=1000)`}
        />

        <h2 className="doc-subheading">3. Calculus for ML</h2>

        <p className="doc-paragraph">
          Calculus, specifically derivatives, is used to optimize ML models by finding 
          the minimum of loss functions (gradient descent).
        </p>

        <div className="p-4 rounded-lg bg-muted mb-6">
          <p className="text-foreground font-medium mb-2">Key Concept: Gradient Descent</p>
          <p className="text-muted-foreground">
            The derivative tells us the slope of a function at any point. In ML, we use 
            this to find the direction that reduces error, then take a step in that direction.
          </p>
        </div>

        <CodeBlock
          language="python"
          title="gradient_descent.py"
          code={`import numpy as np

# Simple gradient descent to find minimum of f(x) = x²
# Derivative: f'(x) = 2x

def gradient_descent(learning_rate=0.1, iterations=50):
    x = 10  # Starting point
    
    for i in range(iterations):
        gradient = 2 * x        # Derivative at current x
        x = x - learning_rate * gradient  # Update step
        
        if i % 10 == 0:
            print(f"Iteration {i}: x = {x:.4f}, f(x) = {x**2:.4f}")
    
    return x

minimum = gradient_descent()
print(f"\\nFound minimum at x = {minimum:.6f}")
# Converges to x ≈ 0 (the actual minimum of x²)`}
        />

        <h2 className="doc-subheading">4. Putting It All Together</h2>

        <p className="doc-paragraph">
          Here's how these concepts connect in a real ML algorithm - Linear Regression:
        </p>

        <CodeBlock
          language="python"
          title="linear_regression_from_scratch.py"
          code={`import numpy as np

class SimpleLinearRegression:
    def __init__(self, learning_rate=0.01, iterations=1000):
        self.lr = learning_rate
        self.iterations = iterations
        self.weights = None
        self.bias = None
    
    def fit(self, X, y):
        n_samples, n_features = X.shape
        self.weights = np.zeros(n_features)
        self.bias = 0
        
        for _ in range(self.iterations):
            # Linear algebra: Matrix multiplication
            y_pred = np.dot(X, self.weights) + self.bias
            
            # Calculus: Compute gradients
            dw = (1/n_samples) * np.dot(X.T, (y_pred - y))
            db = (1/n_samples) * np.sum(y_pred - y)
            
            # Gradient descent: Update parameters
            self.weights -= self.lr * dw
            self.bias -= self.lr * db
    
    def predict(self, X):
        return np.dot(X, self.weights) + self.bias

# Test it
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 5, 4, 5])

model = SimpleLinearRegression()
model.fit(X, y)
print(f"Predictions: {model.predict(X)}")`}
        />

        <div className="flex justify-between mt-8">
          <Button variant="outline" asChild>
            <Link to="/paths/ai-ml/introduction">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Introduction
            </Link>
          </Button>
          <Button asChild>
            <Link to="/paths/ai-ml/supervised-learning">
              Next: Supervised Learning
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
