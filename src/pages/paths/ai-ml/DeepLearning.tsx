import { DocLayout } from '@/components/DocLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DeepLearning() {
  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-purple-500/10 text-purple-600 dark:text-purple-400">
            AI & Machine Learning
          </span>
        </div>

        <h1 className="doc-heading">Deep Learning</h1>

        <p className="doc-paragraph">
          Deep learning is a subset of machine learning that uses neural networks with many 
          layers to learn complex patterns. It powers modern AI applications like image 
          recognition, natural language processing, and generative AI.
        </p>

        <h2 className="doc-subheading">What is a Neural Network?</h2>

        <p className="doc-paragraph">
          A neural network is inspired by the human brain. It consists of interconnected 
          nodes (neurons) organized in layers that process information.
        </p>

        <div className="p-4 rounded-lg bg-muted mb-6 font-mono text-sm">
          <pre className="text-foreground">{`
Input Layer    Hidden Layers    Output Layer
    ○              ○               
    ○          ○   ○   ○           ○
    ○              ○               ○
    ○          ○   ○   ○           
    ○              ○               
          `}</pre>
        </div>

        <h2 className="doc-subheading">Building Your First Neural Network</h2>

        <p className="doc-paragraph">
          Let's build a simple neural network using TensorFlow/Keras to classify handwritten digits:
        </p>

        <CodeBlock
          language="python"
          title="first_neural_network.py"
          code={`import tensorflow as tf
from tensorflow.keras import layers, models
from tensorflow.keras.datasets import mnist

# Load the MNIST dataset (handwritten digits 0-9)
(X_train, y_train), (X_test, y_test) = mnist.load_data()

# Normalize pixel values to 0-1 range
X_train = X_train / 255.0
X_test = X_test / 255.0

# Build the neural network
model = models.Sequential([
    # Flatten 28x28 images to 784-element vectors
    layers.Flatten(input_shape=(28, 28)),
    
    # Hidden layer with 128 neurons
    layers.Dense(128, activation='relu'),
    
    # Dropout to prevent overfitting
    layers.Dropout(0.2),
    
    # Output layer with 10 neurons (one for each digit)
    layers.Dense(10, activation='softmax')
])

# Compile the model
model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# Train the model
model.fit(X_train, y_train, epochs=5, validation_split=0.1)

# Evaluate on test data
test_loss, test_accuracy = model.evaluate(X_test, y_test)
print(f"\\nTest accuracy: {test_accuracy:.2%}")`}
        />

        <h2 className="doc-subheading">Convolutional Neural Networks (CNNs)</h2>

        <p className="doc-paragraph">
          CNNs are specialized for processing grid-like data such as images. They use 
          convolutional layers to detect features like edges, shapes, and patterns.
        </p>

        <CodeBlock
          language="python"
          title="cnn_image_classifier.py"
          code={`import tensorflow as tf
from tensorflow.keras import layers, models
from tensorflow.keras.datasets import cifar10

# Load CIFAR-10 dataset (60,000 32x32 color images in 10 classes)
(X_train, y_train), (X_test, y_test) = cifar10.load_data()
X_train, X_test = X_train / 255.0, X_test / 255.0

# Build CNN
model = models.Sequential([
    # First convolutional block
    layers.Conv2D(32, (3, 3), activation='relu', input_shape=(32, 32, 3)),
    layers.MaxPooling2D((2, 2)),
    
    # Second convolutional block
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    
    # Third convolutional block
    layers.Conv2D(64, (3, 3), activation='relu'),
    
    # Flatten and dense layers
    layers.Flatten(),
    layers.Dense(64, activation='relu'),
    layers.Dense(10, activation='softmax')
])

model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# Train
model.fit(X_train, y_train, epochs=10, 
          validation_data=(X_test, y_test))`}
        />

        <h2 className="doc-subheading">Key Concepts</h2>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {[
            { term: 'Activation Function', desc: 'Introduces non-linearity (ReLU, Sigmoid, Softmax)' },
            { term: 'Loss Function', desc: 'Measures how wrong predictions are' },
            { term: 'Optimizer', desc: 'Algorithm to update weights (Adam, SGD)' },
            { term: 'Epoch', desc: 'One complete pass through training data' },
            { term: 'Batch Size', desc: 'Number of samples processed before updating weights' },
            { term: 'Learning Rate', desc: 'Step size for weight updates' },
            { term: 'Overfitting', desc: 'Model memorizes training data, fails on new data' },
            { term: 'Regularization', desc: 'Techniques to prevent overfitting (Dropout, L2)' },
          ].map((item) => (
            <div key={item.term} className="p-3 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground text-sm">{item.term}</h4>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="doc-subheading">Transfer Learning</h2>

        <p className="doc-paragraph">
          Transfer learning uses pre-trained models as a starting point. This is faster and 
          often more accurate than training from scratch.
        </p>

        <CodeBlock
          language="python"
          title="transfer_learning.py"
          code={`from tensorflow.keras.applications import MobileNetV2
from tensorflow.keras import layers, models

# Load pre-trained MobileNetV2 (without top classification layer)
base_model = MobileNetV2(
    weights='imagenet',
    include_top=False,
    input_shape=(224, 224, 3)
)

# Freeze the base model (don't train these weights)
base_model.trainable = False

# Add custom classification layers
model = models.Sequential([
    base_model,
    layers.GlobalAveragePooling2D(),
    layers.Dense(128, activation='relu'),
    layers.Dropout(0.5),
    layers.Dense(10, activation='softmax')  # 10 classes
])

model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# Train only the top layers on your data
# model.fit(your_data, your_labels, epochs=10)`}
        />

        <h2 className="doc-subheading">PyTorch Alternative</h2>

        <p className="doc-paragraph">
          PyTorch is another popular deep learning framework, preferred by researchers 
          for its flexibility and dynamic computation graphs.
        </p>

        <CodeBlock
          language="python"
          title="pytorch_example.py"
          code={`import torch
import torch.nn as nn
import torch.optim as optim

# Define a simple neural network
class SimpleNN(nn.Module):
    def __init__(self):
        super().__init__()
        self.flatten = nn.Flatten()
        self.layers = nn.Sequential(
            nn.Linear(28*28, 128),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(128, 10)
        )
    
    def forward(self, x):
        x = self.flatten(x)
        return self.layers(x)

# Create model, loss function, and optimizer
model = SimpleNN()
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

# Training loop (simplified)
# for epoch in range(5):
#     for inputs, labels in train_loader:
#         optimizer.zero_grad()
#         outputs = model(inputs)
#         loss = criterion(outputs, labels)
#         loss.backward()
#         optimizer.step()`}
        />

        <div className="mt-8 p-6 rounded-lg bg-primary/5 border border-primary/20">
          <h3 className="font-semibold text-foreground mb-2">Mini Project: Cat vs Dog Classifier</h3>
          <p className="text-muted-foreground mb-4">
            Build a CNN that classifies images as cats or dogs using transfer learning. 
            Use the Kaggle Dogs vs Cats dataset and MobileNetV2 as your base model.
          </p>
        </div>

        <div className="flex justify-between mt-8">
          <Button variant="outline" asChild>
            <Link to="/paths/ai-ml/supervised-learning">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Supervised Learning
            </Link>
          </Button>
          <Button asChild>
            <Link to="/paths/ai-ml/projects">
              Next: Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
