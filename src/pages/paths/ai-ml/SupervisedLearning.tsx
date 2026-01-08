import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SupervisedLearning() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-purple-500/10 text-purple-600 dark:text-purple-400">
            AI & Machine Learning
          </span>
        </div>

        <h1 className="doc-heading">Supervised Learning</h1>

        <p className="doc-paragraph">
          Supervised learning is the most common type of machine learning. The algorithm learns 
          from labeled training data to make predictions on new, unseen data.
        </p>

        <div className="p-4 rounded-lg bg-muted mb-6">
          <p className="text-foreground font-medium">Think of it like a teacher:</p>
          <p className="text-muted-foreground">
            You show the model examples with correct answers (labels), and it learns the 
            patterns to predict answers for new examples.
          </p>
        </div>

        <h2 className="doc-subheading">Two Types of Problems</h2>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-lg border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-2">Regression</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Predict a continuous numerical value.
            </p>
            <p className="text-xs text-primary">Examples: House prices, temperature, stock prices</p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-2">Classification</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Predict a category or class label.
            </p>
            <p className="text-xs text-primary">Examples: Spam/not spam, disease diagnosis, image labels</p>
          </div>
        </div>

        <h2 className="doc-subheading">Linear Regression</h2>

        <p className="doc-paragraph">
          The simplest regression algorithm - finds a straight line that best fits the data.
        </p>

        <CodeBlock
          language="python"
          title="linear_regression.py"
          code={`from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
import numpy as np

# Generate sample data
np.random.seed(42)
X = 2 * np.random.rand(100, 1)
y = 4 + 3 * X + np.random.randn(100, 1)

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train model
model = LinearRegression()
model.fit(X_train, y_train.ravel())

# Make predictions
y_pred = model.predict(X_test)

# Evaluate
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f"Coefficient (slope): {model.coef_[0]:.2f}")
print(f"Intercept: {model.intercept_:.2f}")
print(f"Mean Squared Error: {mse:.4f}")
print(f"R² Score: {r2:.4f}")`}
        />

        <h2 className="doc-subheading">Logistic Regression (Classification)</h2>

        <p className="doc-paragraph">
          Despite its name, logistic regression is used for classification. It predicts 
          the probability of a sample belonging to a class.
        </p>

        <CodeBlock
          language="python"
          title="logistic_regression.py"
          code={`from sklearn.linear_model import LogisticRegression
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report

# Load the famous Iris dataset
iris = load_iris()
X, y = iris.data, iris.target

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42
)

# Train model
model = LogisticRegression(max_iter=200)
model.fit(X_train, y_train)

# Predict
y_pred = model.predict(X_test)

# Evaluate
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy:.2%}")
print("\\nClassification Report:")
print(classification_report(y_test, y_pred, target_names=iris.target_names))`}
        />

        <h2 className="doc-subheading">Decision Trees</h2>

        <p className="doc-paragraph">
          Decision trees make predictions by learning a series of if/else rules from the data.
          They're intuitive and easy to interpret.
        </p>

        <CodeBlock
          language="python"
          title="decision_tree.py"
          code={`from sklearn.tree import DecisionTreeClassifier, plot_tree
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt

# Load data
iris = load_iris()
X_train, X_test, y_train, y_test = train_test_split(
    iris.data, iris.target, test_size=0.3, random_state=42
)

# Train decision tree
tree = DecisionTreeClassifier(max_depth=3, random_state=42)
tree.fit(X_train, y_train)

# Evaluate
accuracy = tree.score(X_test, y_test)
print(f"Accuracy: {accuracy:.2%}")

# Visualize the tree (optional)
# plt.figure(figsize=(20, 10))
# plot_tree(tree, feature_names=iris.feature_names, 
#           class_names=iris.target_names, filled=True)
# plt.show()`}
        />

        <h2 className="doc-subheading">K-Nearest Neighbors (KNN)</h2>

        <p className="doc-paragraph">
          KNN classifies a sample based on how its k nearest neighbors are classified.
          Simple but effective for many problems.
        </p>

        <CodeBlock
          language="python"
          title="knn.py"
          code={`from sklearn.neighbors import KNeighborsClassifier
from sklearn.datasets import load_digits
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

# Load handwritten digits dataset
digits = load_digits()
X, y = digits.data, digits.target

# Split and scale data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Try different values of k
for k in [3, 5, 7, 9]:
    knn = KNeighborsClassifier(n_neighbors=k)
    knn.fit(X_train_scaled, y_train)
    accuracy = knn.score(X_test_scaled, y_test)
    print(f"k={k}: Accuracy = {accuracy:.2%}")`}
        />

        <h2 className="doc-subheading">Model Evaluation</h2>

        <p className="doc-paragraph">
          Always evaluate your model properly to ensure it generalizes well to new data.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold">Metric</th>
                <th className="text-left py-3 px-4 font-semibold">Use Case</th>
                <th className="text-left py-3 px-4 font-semibold">Formula</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Accuracy', 'Balanced datasets', 'Correct / Total'],
                ['Precision', 'When false positives are costly', 'TP / (TP + FP)'],
                ['Recall', 'When false negatives are costly', 'TP / (TP + FN)'],
                ['F1 Score', 'Balance precision & recall', '2 × (P × R) / (P + R)'],
                ['MSE', 'Regression problems', 'Mean of squared errors'],
                ['R² Score', 'Regression (variance explained)', '1 - (SS_res / SS_tot)'],
              ].map(([metric, use, formula]) => (
                <tr key={metric} className="border-b border-border">
                  <td className="py-3 px-4 font-mono text-primary">{metric}</td>
                  <td className="py-3 px-4 text-muted-foreground">{use}</td>
                  <td className="py-3 px-4 font-mono text-sm">{formula}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="doc-subheading">Cross-Validation</h2>

        <p className="doc-paragraph">
          Cross-validation gives a more reliable estimate of model performance by training 
          and testing on different subsets of data.
        </p>

        <CodeBlock
          language="python"
          title="cross_validation.py"
          code={`from sklearn.model_selection import cross_val_score
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_iris

iris = load_iris()
model = RandomForestClassifier(n_estimators=100, random_state=42)

# 5-fold cross-validation
scores = cross_val_score(model, iris.data, iris.target, cv=5)

print(f"Cross-validation scores: {scores}")
print(f"Mean accuracy: {scores.mean():.2%}")
print(f"Standard deviation: {scores.std():.2%}")`}
        />

        <div className="mt-8 p-6 rounded-lg bg-primary/5 border border-primary/20">
          <h3 className="font-semibold text-foreground mb-2">Practice Project</h3>
          <p className="text-muted-foreground mb-4">
            Build a spam classifier using the techniques you've learned. Download a spam dataset 
            from Kaggle and try different algorithms to find the best one.
          </p>
        </div>

        <div className="flex justify-between mt-8">
          <Button variant="outline" asChild>
            <Link to="/paths/ai-ml/math-foundations">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Math Foundations
            </Link>
          </Button>
          <Button asChild>
            <Link to="/paths/ai-ml/deep-learning">
              Next: Deep Learning
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
