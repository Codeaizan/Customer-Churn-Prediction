import { Card } from "@/components/ui/card";
import { Target, Users, TrendingUp, Shield } from "lucide-react";

const OverviewSection = () => {
  return (
    <section id="overview" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Project Overview
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding why customers leave is crucial for business success. This project leverages machine learning 
            to predict customer churn and provide actionable insights for retention strategies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">The Challenge</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Customer acquisition costs are 5-25 times higher than retention costs. Yet, many businesses 
              struggle to identify at-risk customers before they churn. Our solution addresses this critical 
              business challenge through advanced predictive modeling.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Identify high-risk customers early</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Enable proactive retention strategies</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Optimize customer lifetime value</span>
              </div>
            </div>
          </div>
          
          <Card className="p-8 shadow-card bg-gradient-accent">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-2">85%</div>
              <div className="text-lg text-muted-foreground mb-4">Prediction Accuracy</div>
              <div className="text-sm text-muted-foreground">
                Our model achieves 85% accuracy in predicting customer churn, 
                significantly outperforming baseline methods.
              </div>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300">
            <Target className="h-12 w-12 text-primary mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Objective</h4>
            <p className="text-muted-foreground text-sm">
              Predict customer churn with high accuracy and interpretability
            </p>
          </Card>
          
          <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Dataset</h4>
            <p className="text-muted-foreground text-sm">
              10,000+ customer records with 20+ behavioral features
            </p>
          </Card>
          
          <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300">
            <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Impact</h4>
            <p className="text-muted-foreground text-sm">
              Potential to reduce churn by 30% through early intervention
            </p>
          </Card>
          
          <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Validation</h4>
            <p className="text-muted-foreground text-sm">
              Cross-validated using industry-standard evaluation metrics
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;