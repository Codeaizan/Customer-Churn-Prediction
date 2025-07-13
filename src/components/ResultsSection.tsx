import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Award, BarChart, PieChart } from "lucide-react";

const ResultsSection = () => {
  const metrics = [
    { label: "Accuracy", value: "85.3%", description: "Overall prediction accuracy" },
    { label: "Precision", value: "82.7%", description: "True positive rate" },
    { label: "Recall", value: "88.1%", description: "Sensitivity measure" },
    { label: "F1-Score", value: "85.3%", description: "Harmonic mean of precision and recall" },
  ];

  const keyFindings = [
    "Usage frequency is the strongest predictor of churn",
    "Customer support interactions significantly impact retention",
    "Contract length inversely correlates with churn probability",
    "Payment method preferences indicate loyalty patterns"
  ];

  return (
    <section id="results" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Results & Performance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our model demonstrates strong predictive performance across multiple evaluation metrics, 
            providing reliable insights for business decision-making.
          </p>
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <Card key={index} className="p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
              <div className="text-lg font-semibold text-foreground mb-1">{metric.label}</div>
              <div className="text-sm text-muted-foreground">{metric.description}</div>
            </Card>
          ))}
        </div>

        {/* Results Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Model Comparison */}
          <Card className="p-8 shadow-card">
            <div className="flex items-center space-x-3 mb-6">
              <BarChart className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Model Comparison</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Performance comparison across different machine learning algorithms
            </p>
            <div className="bg-muted/30 rounded-lg p-6 min-h-[250px] flex items-center justify-center">
              <div className="text-center text-muted-foreground/50">
                <BarChart className="h-16 w-16 mx-auto mb-4" />
                <div>Model Performance Chart</div>
                <div className="text-sm">Add your comparison chart here</div>
              </div>
            </div>
          </Card>

          {/* Feature Importance */}
          <Card className="p-8 shadow-card">
            <div className="flex items-center space-x-3 mb-6">
              <PieChart className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Feature Importance</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Most influential factors in predicting customer churn
            </p>
            <div className="bg-muted/30 rounded-lg p-6 min-h-[250px] flex items-center justify-center">
              <div className="text-center text-muted-foreground/50">
                <PieChart className="h-16 w-16 mx-auto mb-4" />
                <div>Feature Importance Chart</div>
                <div className="text-sm">Add your feature analysis here</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Key Findings */}
        <Card className="p-8 shadow-card bg-gradient-accent">
          <div className="flex items-center space-x-3 mb-6">
            <Award className="h-8 w-8 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Key Findings</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Critical Insights</h4>
              <div className="space-y-3">
                {keyFindings.map((finding, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{finding}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Business Impact</h4>
              <div className="space-y-3">
                <Badge variant="secondary" className="w-full justify-center py-2">
                  30% reduction in churn potential
                </Badge>
                <Badge variant="secondary" className="w-full justify-center py-2">
                  $2M annual savings estimate
                </Badge>
                <Badge variant="secondary" className="w-full justify-center py-2">
                  15% improvement in CLV
                </Badge>
              </div>
            </div>
          </div>
        </Card>

        {/* Confusion Matrix Placeholder */}
        <div className="mt-16">
          <Card className="p-8 shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Confusion Matrix</h3>
            <div className="bg-muted/30 rounded-lg p-8 min-h-[300px] flex items-center justify-center">
              <div className="text-center text-muted-foreground/50">
                <div className="text-lg mb-2">Confusion Matrix Visualization</div>
                <div className="text-sm">Add your confusion matrix here</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;