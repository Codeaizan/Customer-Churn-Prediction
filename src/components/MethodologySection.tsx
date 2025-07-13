import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, GitBranch, Zap, CheckCircle } from "lucide-react";

const MethodologySection = () => {
  const methodologySteps = [
    {
      icon: Database,
      title: "Data Collection & Preprocessing",
      description: "Collected a real-world telecom customer dataset and performed exploratory data analysis (EDA) to understand churn patterns.",
      techniques: ["Data Cleaning", "Feature Engineering", "Outlier Detection", "Missing Value Imputation"]
    },
    {
      icon: GitBranch,
      title: "Model Selection & Training",
      description: "Implemented and compared multiple machine learning algorithms to identify the best performing model.",
      techniques: ["Random Forest", "XGBoost", "Neural Networks", "SVM"]
    },
    {
      icon: Zap,
      title: "Hyperparameter Optimization",
      description: "Fine-tuned model parameters using grid search and cross-validation for optimal performance.",
      techniques: ["Grid Search", "Random Search", "Bayesian Optimization", "Cross-Validation"]
    },
    {
      icon: CheckCircle,
      title: "Model Evaluation & Validation",
      description: "Rigorous testing using multiple metrics to ensure model reliability and generalizability.",
      techniques: ["Accuracy", "Precision", "Recall", "F1-Score", "ROC-AUC"]
    }
  ];

  return (
    <section id="methodology" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Methodology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our approach follows industry best practices in machine learning, ensuring robust and reliable predictions 
            through systematic experimentation and validation.
          </p>
        </div>

        <div className="space-y-8">
          {methodologySteps.map((step, index) => (
            <Card key={index} className="p-8 shadow-card hover:shadow-elegant transition-all duration-300">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm text-primary font-medium">Step {index + 1}</span>
                      <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                <div className="lg:col-span-1">
                  <h4 className="font-semibold text-foreground mb-3">Key Techniques</h4>
                  <div className="flex flex-wrap gap-2">
                    {step.techniques.map((technique, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {technique}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Workflow Diagram Placeholder */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-accent border-dashed border-2 border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Machine Learning Pipeline</h3>
              <p className="text-muted-foreground mb-6">
                [Your workflow diagram or flowchart will go here]
              </p>
              <div className="bg-background/50 rounded-lg p-8 min-h-[300px] flex items-center justify-center">
                <div className="text-muted-foreground/50 text-lg">
                  Pipeline Visualization Area
                  <br />
                  <span className="text-sm">Add your methodology flowchart here</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;