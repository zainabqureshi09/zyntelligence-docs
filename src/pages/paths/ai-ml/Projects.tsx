import { DocLayout } from '@/components/DocLayout';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AIMLProjects() {
  const projects = [
    {
      title: 'Spam Email Classifier',
      difficulty: 'Beginner',
      duration: '1-2 days',
      description: 'Build a machine learning model that classifies emails as spam or not spam using NLP techniques.',
      skills: ['Text preprocessing', 'TF-IDF', 'Naive Bayes', 'Scikit-learn'],
      steps: [
        'Download spam dataset from Kaggle',
        'Preprocess text (remove stop words, stemming)',
        'Convert text to numerical features using TF-IDF',
        'Train Naive Bayes classifier',
        'Evaluate with precision, recall, F1-score'
      ]
    },
    {
      title: 'House Price Predictor',
      difficulty: 'Beginner',
      duration: '2-3 days',
      description: 'Create a regression model to predict house prices based on features like size, location, and rooms.',
      skills: ['Data cleaning', 'Feature engineering', 'Linear Regression', 'Visualization'],
      steps: [
        'Load and explore the dataset',
        'Handle missing values and outliers',
        'Create new features (price per sq ft)',
        'Train multiple regression models',
        'Compare models using RMSE and R²'
      ]
    },
    {
      title: 'Image Classification with CNN',
      difficulty: 'Intermediate',
      duration: '3-5 days',
      description: 'Build a convolutional neural network to classify images using TensorFlow/Keras.',
      skills: ['CNN architecture', 'Data augmentation', 'Transfer learning', 'TensorFlow'],
      steps: [
        'Download CIFAR-10 or custom dataset',
        'Build CNN with conv, pooling, dense layers',
        'Apply data augmentation',
        'Train and monitor with TensorBoard',
        'Deploy as a simple web app'
      ]
    },
    {
      title: 'Sentiment Analysis API',
      difficulty: 'Intermediate',
      duration: '4-5 days',
      description: 'Create an NLP model that analyzes sentiment of text and expose it as an API.',
      skills: ['NLP', 'LSTM/Transformers', 'FastAPI', 'Model deployment'],
      steps: [
        'Collect and preprocess review data',
        'Train sentiment model (LSTM or fine-tune BERT)',
        'Create FastAPI endpoint',
        'Add input validation and error handling',
        'Deploy to cloud (Heroku/Railway)'
      ]
    },
    {
      title: 'Object Detection System',
      difficulty: 'Advanced',
      duration: '1-2 weeks',
      description: 'Implement real-time object detection using YOLO or similar models with webcam input.',
      skills: ['YOLO', 'OpenCV', 'Real-time processing', 'GPU optimization'],
      steps: [
        'Set up YOLO with pre-trained weights',
        'Process webcam feed with OpenCV',
        'Draw bounding boxes on detected objects',
        'Fine-tune on custom dataset',
        'Optimize for real-time performance'
      ]
    },
    {
      title: 'Recommendation Engine',
      difficulty: 'Advanced',
      duration: '1-2 weeks',
      description: 'Build a movie/product recommendation system using collaborative filtering and matrix factorization.',
      skills: ['Collaborative filtering', 'Matrix factorization', 'Surprise library', 'Evaluation metrics'],
      steps: [
        'Load MovieLens or similar dataset',
        'Implement user-based collaborative filtering',
        'Build matrix factorization with SVD',
        'Create hybrid recommendation system',
        'Evaluate with RMSE and precision@k'
      ]
    },
  ];

  return (
    <DocLayout>
      <div className="doc-container animate-fade-in">
        <div className="mb-6">
          <span className="language-badge bg-purple-500/10 text-purple-600 dark:text-purple-400">
            AI & Machine Learning
          </span>
        </div>

        <h1 className="doc-heading">AI/ML Projects</h1>

        <p className="doc-paragraph">
          The best way to learn is by building. Here are hands-on projects organized by 
          difficulty level. Each project reinforces key concepts and builds portfolio-worthy work.
        </p>

        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.title} className="p-6 rounded-lg border border-border bg-card">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      project.difficulty === 'Beginner' ? 'bg-green-500/10 text-green-600' :
                      project.difficulty === 'Intermediate' ? 'bg-yellow-500/10 text-yellow-600' :
                      'bg-red-500/10 text-red-500'
                    }`}>
                      {project.difficulty}
                    </span>
                    <span className="text-xs text-muted-foreground">{project.duration}</span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

              <div className="mb-4">
                <p className="text-xs font-medium text-foreground mb-2">Skills you'll practice:</p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span key={skill} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-medium text-foreground mb-2">Steps:</p>
                <ol className="text-sm text-muted-foreground space-y-1">
                  {project.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary font-medium">{i + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>

        <h2 className="doc-subheading mt-12">Recommended Resources</h2>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {[
            { name: 'Kaggle Datasets', url: 'https://kaggle.com/datasets', desc: 'Free datasets for practice' },
            { name: 'Papers With Code', url: 'https://paperswithcode.com', desc: 'Latest research with implementations' },
            { name: 'Hugging Face', url: 'https://huggingface.co', desc: 'Pre-trained models and datasets' },
            { name: 'Google Colab', url: 'https://colab.research.google.com', desc: 'Free GPU for training' },
          ].map((resource) => (
            <a
              key={resource.name}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors flex items-center justify-between"
            >
              <div>
                <h4 className="font-medium text-foreground">{resource.name}</h4>
                <p className="text-xs text-muted-foreground">{resource.desc}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
            </a>
          ))}
        </div>

        <div className="flex justify-start mt-8">
          <Button variant="outline" asChild>
            <Link to="/paths/ai-ml/deep-learning">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Deep Learning
            </Link>
          </Button>
        </div>
      </div>
    </DocLayout>
  );
}
