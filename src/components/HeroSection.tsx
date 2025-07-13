import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingDown, Brain, BarChart3 } from "lucide-react";

const HeroSection = () => {
  const scrollToOverview = () => {
    const element = document.getElementById("overview");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-secondary relative overflow-hidden">
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
          </div>

          {/* Key Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <TrendingDown className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Predictive Analytics</h3>
              <p className="text-muted-foreground">Advanced ML algorithms to forecast customer behavior</p>
            </Card>
            
            <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Deep Learning</h3>
              <p className="text-muted-foreground">Neural networks for complex pattern recognition</p>
            </Card>
            
            <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Data Insights</h3>
              <p className="text-muted-foreground">Comprehensive analysis of customer metrics</p>
            </Card>
          </div>

          {/* CTA Button */}
          <Button 
            variant="gradient" 
            size="lg" 
            onClick={scrollToOverview}
            className="text-lg px-8 py-6 h-auto"
          >
            Explore the Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;