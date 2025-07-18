import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDown, AlertTriangle, TrendingDown } from "lucide-react";

const HomeSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("problem-statement");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-accent opacity-50"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Customer Churn Prediction
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              A Machine Learning Approach to Predicting Customer Retention
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A machine learning project to predict which telecom customers are likely to cancel their subscription (churn), using real-world data and Random Forest Classifier.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-primary mb-2">85.3%</div>
              <p className="text-muted-foreground">Model Accuracy</p>
            </Card>
            
            <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-primary mb-2">7K+</div>
              <p className="text-muted-foreground">Customer Records</p>
            </Card>
            
            <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-primary mb-2">69%</div>
              <p className="text-muted-foreground">Churn Reduction Potential</p>
            </Card>
          </div>

          {/* CTA Button */}
          <Button 
            variant="gradient" 
            size="lg" 
            onClick={scrollToAbout}
            className="text-lg px-8 py-6 h-auto"
          >
            Explore the Project
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
