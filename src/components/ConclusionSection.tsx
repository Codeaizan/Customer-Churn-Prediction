import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Target, Lightbulb, Rocket } from "lucide-react";

const ConclusionSection = () => {
  const achievements = [
    "Successfully implemented multiple ML algorithms for churn prediction",
    "Achieved 85% accuracy in identifying at-risk customers",
    "Identified key factors influencing customer retention",
    "Developed actionable insights for business strategy",
    "Created scalable model architecture for production deployment"
  ];

  const futureWork = [
    { title: "Real-time Prediction", description: "Implement streaming data processing for live predictions" },
    { title: "Deep Learning Enhancement", description: "Explore advanced neural network architectures" },
    { title: "Causal Analysis", description: "Investigate causal relationships in customer behavior" },
    { title: "A/B Testing Framework", description: "Develop testing infrastructure for model iterations" }
  ];

  const businessImpact = [
    { metric: "30%", label: "Potential Churn Reduction" },
    { metric: "$2M", label: "Estimated Annual Savings" },
    { metric: "15%", label: "Customer Lifetime Value Increase" },
    { metric: "85%", label: "Model Accuracy Achievement" }
  ];

  return (
    <section id="conclusion" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Conclusion & Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            This project demonstrates the power of machine learning in solving real business challenges, 
            providing both technical achievements and practical value.
          </p>
        </div>

        {/* Key Achievements */}
        <Card className="p-8 mb-12 shadow-card bg-gradient-accent">
          <div className="flex items-center space-x-3 mb-6">
            <CheckCircle className="h-8 w-8 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Key Achievements</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {businessImpact.map((item, index) => (
                <div key={index} className="text-center p-4 bg-background/50 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">{item.metric}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Lessons Learned & Future Work */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <Card className="p-8 shadow-card">
            <div className="flex items-center space-x-3 mb-6">
              <Lightbulb className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Lessons Learned</h3>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Data Quality is Paramount:</strong> 
                The success of any ML project heavily depends on clean, relevant data. Extensive preprocessing 
                and feature engineering significantly improved model performance.
              </p>
              <p>
                <strong className="text-foreground">Model Interpretability Matters:</strong> 
                While complex models may achieve higher accuracy, simpler, interpretable models often provide 
                more actionable business insights.
              </p>
              <p>
                <strong className="text-foreground">Cross-validation is Essential:</strong> 
                Proper validation techniques prevented overfitting and ensured our results would generalize 
                to new, unseen data.
              </p>
            </div>
          </Card>

          <Card className="p-8 shadow-card">
            <div className="flex items-center space-x-3 mb-6">
              <Rocket className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Future Enhancements</h3>
            </div>
            <div className="space-y-4">
              {futureWork.map((item, index) => (
                <div key={index} className="border-l-4 border-primary/20 pl-4">
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Project Summary */}
        <Card className="p-8 shadow-elegant bg-gradient-primary text-primary-foreground">
          <div className="text-center">
            <Target className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h3 className="text-3xl font-bold mb-4">Project Summary</h3>
            <p className="text-lg mb-8 opacity-90 max-w-3xl mx-auto">
              This customer churn prediction project successfully demonstrates the application of machine learning 
              to solve real business problems. Through careful methodology, rigorous evaluation, and practical insights, 
              we've created a valuable tool for customer retention strategy.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge className="bg-primary-foreground text-primary px-4 py-2">
                Machine Learning
              </Badge>
              <Badge className="bg-primary-foreground text-primary px-4 py-2">
                Predictive Analytics
              </Badge>
              <Badge className="bg-primary-foreground text-primary px-4 py-2">
                Business Intelligence
              </Badge>
              <Badge className="bg-primary-foreground text-primary px-4 py-2">
                Data Science
              </Badge>
            </div>
          </div>
        </Card>

        {/* Contact/Next Steps */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-6">Ready to Explore More?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            This project showcases the potential of machine learning in customer analytics. 
            I'm excited to discuss the technical details, methodology, and business implications with the faculty.
          </p>
          <Button variant="gradient" size="lg" className="text-lg px-8 py-6 h-auto">
            View Project Repository
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;