import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, TrendingUp, Target, Rocket, BookOpen, Users } from "lucide-react";

const LearningsSection = () => {
  const keyLearnings = [
    {
      category: "Technical Insights",
      icon: Target,
      learnings: [
        "Data quality significantly impacts model performance - clean data is paramount",
        "Feature engineering often provides better improvements than complex algorithms",
        "Cross-validation is essential to prevent overfitting and ensure generalizability",
        "Ensemble methods like Random Forest provide both accuracy and interpretability"
      ]
    },
    {
      category: "Business Understanding",
      icon: TrendingUp,
      learnings: [
        "Customer tenure and contract type are the strongest churn predictors",
        "Payment method preferences reveal valuable insights about customer loyalty",
        "Support interaction frequency correlates strongly with churn probability",
        "Pricing strategies need to balance profitability with retention goals"
      ]
    },
    {
      category: "Methodology Insights",
      icon: BookOpen,
      learnings: [
        "Iterative approach with frequent validation prevented costly mistakes",
        "Domain expertise integration improved feature engineering significantly",
        "Balanced datasets yield more reliable performance metrics",
        "Model interpretability is crucial for business stakeholder buy-in"
      ]
    }
  ];

  const challenges = [
    {
      challenge: "Data Imbalance",
      solution: "Applied SMOTE and class weighting techniques",
      impact: "Improved minority class recall by 15%"
    },
    {
      challenge: "Feature Selection",
      solution: "Used recursive feature elimination with domain knowledge",
      impact: "Reduced feature set by 40% while maintaining accuracy"
    },
    {
      challenge: "Model Interpretability",
      solution: "Implemented SHAP values and feature importance analysis",
      impact: "Enabled business stakeholder understanding and trust"
    }
  ];

  const futureWork = [
    {
      title: "Real-time Streaming Pipeline",
      description: "Implement real-time data processing for live churn predictions",
      priority: "High",
      timeline: "3-6 months",
      technologies: ["Apache Kafka", "Apache Spark", "MLflow"]
    },
    {
      title: "Deep Learning Enhancement",
      description: "Explore neural networks for complex pattern recognition",
      priority: "Medium",
      timeline: "6-9 months",
      technologies: ["TensorFlow", "PyTorch", "Transformers"]
    },
    {
      title: "Causal Inference Analysis",
      description: "Investigate causal relationships in customer behavior",
      priority: "Medium",
      timeline: "4-8 months",
      technologies: ["DoWhy", "CausalML", "EconML"]
    },
    {
      title: "Multi-model Ensemble",
      description: "Combine multiple models for improved performance",
      priority: "High",
      timeline: "2-4 months",
      technologies: ["Stacking", "Blending", "Bayesian Optimization"]
    },
    {
      title: "Explainable AI Dashboard",
      description: "Build comprehensive dashboard for model interpretability",
      priority: "High",
      timeline: "3-5 months",
      technologies: ["Streamlit", "Plotly Dash", "SHAP"]
    },
    {
      title: "A/B Testing Framework",
      description: "Develop framework for testing retention strategies",
      priority: "Medium",
      timeline: "4-6 months",
      technologies: ["Experimentation Platform", "Statistical Testing"]
    }
  ];

  const businessImpact = [
    { metric: "Customer Retention", improvement: "+30%", description: "Potential improvement in retention rates" },
    { metric: "Cost Savings", improvement: "$2M", description: "Estimated annual savings from reduced churn" },
    { metric: "Intervention Speed", improvement: "75%", description: "Faster identification of at-risk customers" },
    { metric: "Resource Efficiency", improvement: "40%", description: "Better allocation of retention resources" }
  ];

  return (
    <section id="learnings" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Learnings & Future Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Key insights gained from the project and roadmap for future enhancements and research directions
          </p>
        </div>

        {/* Key Learnings */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Key Learnings</h3>
            <p className="text-lg text-muted-foreground">
              Valuable insights gained throughout the project development process
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {keyLearnings.map((category, index) => (
              <Card key={index} className="p-8 shadow-card hover:shadow-elegant transition-all duration-300">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">{category.category}</h4>
                </div>
                <div className="space-y-3">
                  {category.learnings.map((learning, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">{learning}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Challenges & Solutions */}
          <Card className="p-8 shadow-card bg-gradient-accent">
            <div className="flex items-center space-x-3 mb-6">
              <Lightbulb className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Challenges & Solutions</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {challenges.map((item, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="font-semibold text-foreground">{item.challenge}</h4>
                  <p className="text-sm text-muted-foreground">{item.solution}</p>
                  <Badge variant="secondary" className="text-xs">
                    {item.impact}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Future Work */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Future Work & Enhancements</h3>
            <p className="text-lg text-muted-foreground">
              Planned improvements and research directions for the next phase of development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {futureWork.map((item, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-lg font-bold text-foreground">{item.title}</h4>
                  <Badge 
                    variant={item.priority === "High" ? "default" : "secondary"}
                    className={item.priority === "High" ? "bg-primary text-primary-foreground" : ""}
                  >
                    {item.priority} Priority
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-muted-foreground">Timeline:</span>
                  <span className="text-sm font-medium text-foreground">{item.timeline}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {item.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Expected Business Impact */}
        <Card className="p-8 shadow-elegant bg-gradient-primary text-primary-foreground">
          <div className="text-center mb-8">
            <Rocket className="h-16 w-16 mx-auto mb-4 opacity-90" />
            <h3 className="text-3xl font-bold mb-4">Expected Business Impact</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Projected outcomes and benefits from implementing the complete solution
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessImpact.map((impact, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold mb-2 opacity-95">{impact.improvement}</div>
                <div className="text-lg font-medium mb-1 opacity-90">{impact.metric}</div>
                <div className="text-sm opacity-75">{impact.description}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Research Opportunities */}
        <div className="mt-16">
          <Card className="p-8 shadow-card">
            <div className="flex items-center space-x-3 mb-6">
              <Users className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Research Opportunities</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-4">Academic Research</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Publication in machine learning conferences</li>
                  <li>• Collaboration with business analytics researchers</li>
                  <li>• Cross-industry churn prediction studies</li>
                  <li>• Ethical AI in customer analytics research</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4">Industry Applications</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• SaaS platform churn prediction</li>
                  <li>• Subscription service optimization</li>
                  <li>• E-commerce customer retention</li>
                  <li>• Financial services risk modeling</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LearningsSection;