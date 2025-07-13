import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Brain, BarChart3, GitBranch, Cog, Settings, Zap } from "lucide-react";

const HowItWasBuiltSection = () => {
  const techStack = [
    {
      category: "Programming Languages",
      icon: Code,
      items: ["Python"],
      description: "Core languages for data processing and analysis"
    },
    {
      category: "ML Libraries",
      icon: Brain,
      items: ["Scikit-learn", "XGBoost", "Pandas", "NumPy"],
      description: "Machine learning and data manipulation tools"
    },
    {
      category: "Visualization",
      icon: BarChart3,
      items: ["Matplotlib", "Streamlit"],
      description: "Data visualization and reporting"
    },
    {
      category: "Development Tools",
      icon: Cog,
      items: ["Google Colab", "VS Code", "Jupyter Notebook", "VS Streamlit", "Python", "Joblib"],
      description: "Development environment and version control"
    }
  ];

  const workflowSteps = [
    {
      step: 1,
      title: "Data Collection & Exploration",
      description: "Collected a real-world telecom customer dataset and performed exploratory data analysis (EDA) to understand churn patterns.",
      icon: Database,
      details: ["Sourced public telecom churn dataset (~7,032 records)", "Identified target variable (Churn)", "Performed statistical summaries and data visualizations", "Analyzed class imbalance and feature distributions summaries"]
    },
    {
      step: 2,
      title: "Data Preprocessing",
      description: "Cleaned and prepared the dataset for machine learning algorithms.",
      icon: Settings,
      details: ["Missing value Dropped irrelevant columns (customerID)", "Converted categorical variables using one-hot encoding", "Detected and handled missing or inconsistent values", "Standardized numerical features with StandardScaler"]
    },
    {
      step: 3,
      title: "Feature Engineering",
      description: "Created new features to improve model performance and business relevance.",
      icon: Zap,
      details: ["Engineered new feature: TotalSpent = MonthlyCharges × Tenure", "Selected impactful variables based on EDA", "Addressed class imbalance using scale_pos_weight in XGBoost"]
    },
    {
      step: 4,
      title: "Model Training",
      description: "Trained multiple machine learning algorithms and compared their effectiveness.",
      icon: Brain,
      details: ["Algorithms: Logistic Regression, Random Forest, XGBoost", "Used train-test split (80/20)", "Tuned hyperparameters using RandomizedSearchCV", "Selected best-performing model (XGBoost)"]
    },
    {
      step: 5,
      title: "Model Evaluation",
      description: "Evaluated model performance using both standard metrics and business value indicators.",
      icon: BarChart3,
      details: ["Accuracy: 76.6%", "AUC Score: 83.4%", "Confusion Matrix, Precision, Recall", "Business insights: churn reduction potential, faster intervention"]
    },
    {
      step: 6,
      title: "Deployment & Monitoring",
      description: "Deployed the final model as an interactive web app and prepared for real-world usage.",
      icon: GitBranch,
      details: ["Built a user interface using Streamlit", "Tested with realistic input samples", "Saved model and preprocessing pipeline using joblib", "Hosted app locally (with option for Streamlit Cloud)"]
    }
  ];

  return (
    <>
      {/* Tools & Technologies */}
      <section id="tools-tech" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Tools & Technologies Used
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive technology stack leveraging industry-standard tools for data science and machine learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {techStack.map((tech, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-all duration-300">
                <div className="text-center">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                    <tech.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{tech.category}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{tech.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {tech.items.map((item, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Technology Architecture */}
          <Card className="p-8 shadow-card bg-gradient-accent">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Technology Architecture
            </h3>
            <div className="bg-background/50 rounded-lg p-8 min-h-[300px] flex items-center justify-center">
              <img 
                src="/img1.png" // 👈 Replace this path with your image
                alt="Technology Stack Diagram"
                className="max-h-[400px] w-auto object-contain rounded-md shadow-md"
                />
            </div>
          </Card>
        </div>
      </section>

      {/* ML Workflow */}
      <section id="ml-workflow" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              ML Workflow
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to building and deploying the customer churn prediction model
            </p>
          </div>

          <div className="space-y-8">
            {workflowSteps.map((step, index) => (
              <Card key={index} className="p-8 shadow-card hover:shadow-elegant transition-all duration-300">
                <div className="grid lg:grid-cols-4 gap-6 items-center">
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-4">
                      <div className="p-4 bg-primary/10 rounded-lg">
                        <step.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-primary font-medium">Step {step.step}</div>
                        <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-1">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">{step.step}/6</div>
                      <div className="text-sm text-muted-foreground">Process Step</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Engineering & Tuning */}
      <section id="feature-engineering" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Feature Engineering & Tuning
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced techniques for optimizing model performance through feature engineering and hyperparameter tuning
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Feature Engineering */}
            <Card className="p-8 shadow-card">
              <div className="flex items-center space-x-3 mb-6">
                <Zap className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Feature Engineering</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Feature Creation</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• TotalSpent: Created by multiplying MonthlyCharges × Tenure</li>
                    <li>• Tenure & Contract Type: Captured customer relationship duration and flexibility</li>
                    <li>• Binary Flags: Converted Yes/No fields into numerical binary features</li>
                    <li>• One-Hot Encoding: Applied to categorical features like Contract, InternetService, PaymentMethod</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Feature Selection</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Correlation Analysis: Identified weak and redundant features</li>
                    <li>• XGBoost Feature Importance: Used to prioritize impactful inputs</li>
                    <li>• Domain Insight: Emphasized features like Contract, MonthlyCharges, and PaymentMethod which influence churn</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Hyperparameter Tuning */}
            <Card className="p-8 shadow-card">
              <div className="flex items-center space-x-3 mb-6">
                <Settings className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Hyperparameter Tuning</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Optimization Techniques</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• RandomizedSearchCV: Used for efficient hyperparameter sampling</li>
                    <li>• Cross-Validation: Applied during tuning for performance validation</li>
                    <li>• (📌 Note: Grid search was avoided to save compute time)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Parameter Optimization</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Learning Rate: Set to 0.01 to balance learning speed and convergence</li>
                    <li>• Max Depth: Optimized to 6 for tree complexity</li>
                    <li>• n_estimators: Set to 400 to allow sufficient training rounds</li>
                    <li>• scale_pos_weight: Tuned to 2.0 to handle class imbalance</li>
                    <li>• subsample and colsample_bytree: Adjusted for model generalization</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Feature Importance Visualization */}
          <Card className="p-8 shadow-card bg-gradient-accent">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Feature Importance Analysis
            </h3>
            <div className="bg-background/50 rounded-lg p-8 min-h-[300px] flex items-center justify-center">
              <img
                src="/img2.png" // 👈 Replace with your correct image path if needed
                alt="Feature Importance Chart"
                className="max-h-[400px] w-auto object-contain rounded-md shadow-lg"
              />
            </div>
          </Card>
        </div>
      </section>
    </>
  );
};

export default HowItWasBuiltSection;