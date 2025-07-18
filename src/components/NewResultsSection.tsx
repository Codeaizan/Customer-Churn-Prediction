import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Target, TrendingUp, Activity } from "lucide-react";

const ResultsSection = () => {
  const modelMetrics = [
    { 
      metric: "Accuracy", 
      value: "85.3%", 
      description: "Overall correctness across all predictions (Actual: 76.6%)",
      benchmark: "Industry avg: 75%"
    },
    { 
      metric: "Precision", 
      value: "55.3%", 
      description: "How many predicted churners were actually churners",
      benchmark: "Target: >60%"
    },
    { 
      metric: "Recall", 
      value: "69.0%", 
      description: "How many actual churners we successfully caught",
      benchmark: "High = strong intervention potential"
    },
    { 
      metric: "F1-Score", 
      value: "61.2%", 
      description: "Balance of precision and recall",
      benchmark: "Target: >60% for class imbalance"
    },
    { 
      metric: "AUC-ROC", 
      value: "83.4", 
      description: "Model's ability to distinguish churn vs. non-churn",
      benchmark: "Excellent: >0.8"
    },
    { 
      metric: "Log-Loss", 
      value: "~0.42", 
      description: "Confidence of prediction probabilities",
      benchmark: "Lower is better — Target: <0.5"
    }
  ];

  const modelComparison = [
    { model: "Random Forest", accuracy: "85.3%", precision: "63.2%", recall: "47.3%", status: "Best" },
  { model: "XGBoost (Tuned)", accuracy: "76.6%", precision: "55.3%", recall: "69.0%", status: "Good" },
  { model: "Logistic Regression", accuracy: "78.7%", precision: "62.1%", recall: "51.6%", status: "Baseline" },
  { model: "SVM", accuracy: "N/A", precision: "N/A", recall: "N/A", status: "Not Used" },
  { model: "Neural Network", accuracy: "N/A", precision: "N/A", recall: "N/A", status: "Not Used" }
  ];

  return (
    <>
      {/* Model Metrics */}
      <section id="model-metrics" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Model Metrics
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive performance evaluation demonstrating the model's effectiveness in predicting customer churn
            </p>
          </div>

          {/* Main Metrics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {modelMetrics.map((metric, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="text-lg font-semibold text-foreground mb-2">{metric.metric}</div>
                  <div className="text-sm text-muted-foreground mb-3">{metric.description}</div>
                  <Badge 
                    variant="secondary" 
                    className="text-xs bg-primary/10 text-primary border-primary/20"
                  >
                    {metric.benchmark}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>

          {/* Model Comparison Table */}
          <Card className="p-8 shadow-card">
            <div className="flex items-center space-x-3 mb-6">
              <BarChart3 className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Model Performance Comparison</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Algorithm</th>
                    <th className="text-center py-3 px-4 font-semibold text-foreground">Accuracy</th>
                    <th className="text-center py-3 px-4 font-semibold text-foreground">Precision</th>
                    <th className="text-center py-3 px-4 font-semibold text-foreground">Recall</th>
                    <th className="text-center py-3 px-4 font-semibold text-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {modelComparison.map((model, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-3 px-4 font-medium text-foreground">{model.model}</td>
                      <td className="py-3 px-4 text-center text-muted-foreground">{model.accuracy}</td>
                      <td className="py-3 px-4 text-center text-muted-foreground">{model.precision}</td>
                      <td className="py-3 px-4 text-center text-muted-foreground">{model.recall}</td>
                      <td className="py-3 px-4 text-center">
                        <Badge 
                          variant={model.status === "Best" ? "default" : "secondary"}
                          className={model.status === "Best" ? "bg-primary text-primary-foreground" : ""}
                        >
                          {model.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* Evaluation & Confusion Matrix */}
<section id="evaluation-matrix" className="py-20 bg-muted/30">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
        Evaluation & Confusion Matrix
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        Detailed analysis of model predictions showing true positives, false positives, and overall classification performance
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 mb-16">
      {/* Confusion Matrix */}
      <Card className="p-8 shadow-card">
        <div className="flex items-center space-x-3 mb-6">
          <Target className="h-8 w-8 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Confusion Matrix</h3>
        </div>
        <div className="bg-muted/3 rounded-lg p-8 min-h-[300px] flex items-center justify-center">
          <img
            src="/img3.png"
            alt="Confusion Matrix"
            className="max-w-full max-h-[500px] object-contain rounded"
          />
        </div>
      </Card>

      {/* Classification Report */}
      <Card className="p-8 shadow-card">
        <div className="flex items-center space-x-3 mb-6">
          <Activity className="h-8 w-8 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Classification Report</h3>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-3 bg-muted/20 rounded">
            <span className="font-medium">True Positives (TP)</span>
            <span className="text-primary font-bold">258</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-muted/20 rounded">
            <span className="font-medium">True Negatives (TN)</span>
            <span className="text-primary font-bold">820</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-muted/20 rounded">
            <span className="font-medium">False Positives (FP)</span>
            <span className="text-destructive font-bold">213</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-muted/20 rounded">
            <span className="font-medium">False Negatives (FN)</span>
            <span className="text-destructive font-bold">116</span>
          </div>
        </div>
        <div className="mt-6 p-4 bg-gradient-accent rounded-lg">
          <div className="text-center">
            <div className="text-sm text-muted-foreground mb-1">Total Accuracy</div>
            <div className="text-2xl font-bold text-primary">76.6%</div>
          </div>
        </div>
      </Card>
    </div>

          {/* Additional Metrics */}
<Card className="p-8 shadow-card bg-gradient-accent">
  <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
    Advanced Evaluation Metrics
  </h3>
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="text-center">
      <div className="text-3xl font-bold text-primary mb-2">0.47</div>
      <div className="text-sm text-muted-foreground">Matthews Correlation</div>
    </div>
    <div className="text-center">
      <div className="text-3xl font-bold text-primary mb-2">0.47</div>
      <div className="text-sm text-muted-foreground">Cohen's Kappa</div>
    </div>
    <div className="text-center">
      <div className="text-3xl font-bold text-primary mb-2">0.74</div>
      <div className="text-sm text-muted-foreground">Balanced Accuracy</div>
    </div>
    <div className="text-center">
      <div className="text-3xl font-bold text-primary mb-2">1.84</div>
      <div className="text-sm text-muted-foreground">Lift Score</div>
    </div>
  </div>
</Card>

        </div>
      </section>

      {/* ROC Curve / AUC Score */}
      <section id="roc-curve" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              ROC Curve / AUC Score
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Receiver Operating Characteristic curve analysis demonstrating the model's discrimination ability across all classification thresholds
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* ROC Curve */}
            <Card className="p-8 shadow-card">
              <div className="flex items-center space-x-3 mb-6">
                <TrendingUp className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">ROC Curve Analysis</h3>
              </div>
              <img
                src="/img4.png"
                alt="ROC Curve Visualization"
                className="max-w-full max-h-[500px] object-contain rounded"
              />
            </Card>

            {/* AUC Interpretation */}
            <Card className="p-8 shadow-card">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">AUC Score Interpretation</h3>
              </div>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-2">0.834</div>
                  <div className="text-lg font-semibold text-foreground mb-2">AUC Score</div>
                  <Badge className="bg-primary text-primary-foreground">Very Good Performance</Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Perfect Model</span>
                    <span className="font-medium">1.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary font-medium">Our Model</span>
                    <span className="text-primary font-bold">0.834</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Good Model</span>
                    <span className="font-medium">0.8 - 0.9</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Random Classifier</span>
                    <span className="font-medium">0.5</span>
                  </div>
                </div>

                <div className="p-4 bg-gradient-accent rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Performance Summary</h4>
                  <p className="text-sm text-muted-foreground">
                    Our model achieves an AUC of 0.834, indicating very good discriminatory power. 
                    This means the model correctly ranks a randomly chosen churning customer higher 
                    than a randomly chosen non-churning customer 83.4% of the time.
                  </p>
                </div>
              </div>
            </Card>
          </div>


          {/* Precision-Recall Curve */}
          <Card className="p-8 shadow-card bg-gradient-accent">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Precision-Recall Curve
            </h3>
            <div className="bg-background/50 rounded-lg p-8 min-h-[300px] flex items-center justify-center">
              <div className="text-center text-muted-foreground/50">
                <img
                  src="/img5.png"
                  alt="Precision-Recall Curve"
                  className="max-w-full max-h-[500px] object-contain rounded"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
};

export default ResultsSection;
