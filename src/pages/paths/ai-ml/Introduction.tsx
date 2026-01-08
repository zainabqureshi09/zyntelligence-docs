import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, CheckCircle, Clock, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AIMLIntroduction() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-purple-500/10 text-purple-600 dark:text-purple-400">
            AI & Machine Learning
          </span>
        </div>

        <h1 className="doc-heading">Introduction to AI & Machine Learning</h1>

        <p className="doc-paragraph">
          Artificial Intelligence (AI) is the simulation of human intelligence in machines. 
          Machine Learning (ML) is a subset of AI that enables systems to learn and improve 
          from experience without being explicitly programmed.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-lg border border-border bg-card text-center">
            <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold text-foreground">6-12 Months</h3>
            <p className="text-sm text-muted-foreground">Learning Timeline</p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-card text-center">
            <Target className="w-8 h-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold text-foreground">High Demand</h3>
            <p className="text-sm text-muted-foreground">Job Market</p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-card text-center">
            <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold text-foreground">$120k-200k</h3>
            <p className="text-sm text-muted-foreground">Avg. Salary (US)</p>
          </div>
        </div>

        <h2 className="doc-subheading">What is Machine Learning?</h2>

        <p className="doc-paragraph">
          Machine Learning is a method of data analysis that automates analytical model building. 
          Instead of programming explicit rules, we feed data to algorithms that learn patterns.
        </p>

        <div className="p-4 rounded-lg bg-muted mb-6">
          <p className="text-foreground font-medium mb-2">Traditional Programming vs Machine Learning:</p>
          <ul className="space-y-2 text-muted-foreground">
            <li><strong>Traditional:</strong> Rules + Data → Answers</li>
            <li><strong>ML:</strong> Data + Answers → Rules (learned patterns)</li>
          </ul>
        </div>

        <h2 className="doc-subheading">Types of Machine Learning</h2>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-lg border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-2">Supervised Learning</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Learn from labeled data with known outcomes.
            </p>
            <p className="text-xs text-primary">Examples: Classification, Regression</p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-2">Unsupervised Learning</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Find hidden patterns in unlabeled data.
            </p>
            <p className="text-xs text-primary">Examples: Clustering, Dimensionality Reduction</p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-2">Reinforcement Learning</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Learn through trial and error with rewards.
            </p>
            <p className="text-xs text-primary">Examples: Game AI, Robotics</p>
          </div>
        </div>

        <h2 className="doc-subheading">Prerequisites</h2>

        <div className="space-y-3 mb-6">
          {[
            { skill: 'Python Programming', level: 'Required', link: '/docs/python/introduction' },
            { skill: 'Basic Mathematics (Algebra)', level: 'Required', link: null },
            { skill: 'Statistics & Probability', level: 'Important', link: null },
            { skill: 'Linear Algebra', level: 'Important', link: null },
            { skill: 'Calculus Basics', level: 'Helpful', link: null },
          ].map((prereq) => (
            <div key={prereq.skill} className="flex items-center justify-between p-3 rounded-lg border border-border">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-foreground">{prereq.skill}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-1 rounded ${
                  prereq.level === 'Required' ? 'bg-red-500/10 text-red-500' :
                  prereq.level === 'Important' ? 'bg-yellow-500/10 text-yellow-600' :
                  'bg-green-500/10 text-green-600'
                }`}>
                  {prereq.level}
                </span>
                {prereq.link && (
                  <Link to={prereq.link} className="text-primary text-sm hover:underline">
                    Learn →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <h2 className="doc-subheading">Your First ML Code</h2>

        <p className="doc-paragraph">
          Let's see a simple example using scikit-learn to predict house prices:
        </p>

        <CodeBlock
          language="python"
          title="first_ml_model.py"
          code={`# Import libraries
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
import numpy as np

# Sample data: House sizes (sq ft) and prices ($1000s)
sizes = np.array([[1400], [1600], [1700], [1875], [1100], [1550], [2350], [2450]])
prices = np.array([245, 312, 279, 308, 199, 219, 405, 324])

# Split data: 80% training, 20% testing
X_train, X_test, y_train, y_test = train_test_split(
    sizes, prices, test_size=0.2, random_state=42
)

# Create and train the model
model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions
new_house = [[1800]]
predicted_price = model.predict(new_house)
print(f"Predicted price for 1800 sq ft: ${predicted_price[0]:.2f}k")

# Check model accuracy
score = model.score(X_test, y_test)
print(f"Model accuracy: {score:.2%}")`}
        />

        <h2 className="doc-subheading">Learning Roadmap</h2>

        <div className="space-y-4 mb-6">
          {[
            { phase: 'Phase 1', title: 'Python and Math Foundations', duration: '4-6 weeks', topics: ['Python basics', 'NumPy', 'Pandas', 'Statistics'] },
            { phase: 'Phase 2', title: 'Machine Learning Basics', duration: '6-8 weeks', topics: ['Supervised Learning', 'Regression', 'Classification', 'Evaluation'] },
            { phase: 'Phase 3', title: 'Deep Learning', duration: '6-8 weeks', topics: ['Neural Networks', 'TensorFlow', 'CNNs', 'RNNs'] },
            { phase: 'Phase 4', title: 'Specialization', duration: '8-12 weeks', topics: ['NLP', 'Computer Vision', 'Generative AI', 'MLOps'] },
          ].map((phase) => (
            <div key={phase.phase} className="p-4 rounded-lg border border-border bg-card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-foreground">{phase.phase}: {phase.title}</h3>
                <span className="text-xs text-muted-foreground">{phase.duration}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {phase.topics.map((topic) => (
                  <span key={topic} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h2 className="doc-subheading">Career Paths</h2>

        <ul className="doc-list">
          <li><strong>ML Engineer:</strong> Build and deploy ML models in production</li>
          <li><strong>Data Scientist:</strong> Analyze data and create predictive models</li>
          <li><strong>AI Research Scientist:</strong> Develop new algorithms and techniques</li>
          <li><strong>NLP Engineer:</strong> Work with language models and chatbots</li>
          <li><strong>Computer Vision Engineer:</strong> Image and video analysis systems</li>
          <li><strong>MLOps Engineer:</strong> ML infrastructure and deployment pipelines</li>
        </ul>

        <div className="mt-8 p-6 rounded-lg bg-primary/5 border border-primary/20">
          <h3 className="font-semibold text-foreground mb-2">Ready to dive deeper?</h3>
          <p className="text-muted-foreground mb-4">
            Learn the mathematical foundations that power machine learning algorithms.
          </p>
          <Button asChild>
            <Link to="/paths/ai-ml/math-foundations">
              Next: Math Foundations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
