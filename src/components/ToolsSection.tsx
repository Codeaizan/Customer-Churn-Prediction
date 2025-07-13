import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Brain, BarChart3, Cog, GitBranch } from "lucide-react";

const ToolsSection = () => {
  const categories = [
    {
      title: "Programming Languages",
      icon: Code,
      tools: [
        { name: "Python", description: "Primary language for data science and ML", level: "Advanced" },
        { name: "R", description: "Statistical analysis and visualization", level: "Intermediate" },
        { name: "SQL", description: "Database queries and data extraction", level: "Advanced" }
      ]
    },
    {
      title: "Machine Learning Libraries",
      icon: Brain,
      tools: [
        { name: "Scikit-learn", description: "Core ML algorithms and preprocessing", level: "Advanced" },
        { name: "XGBoost", description: "Gradient boosting framework", level: "Advanced" },
        { name: "TensorFlow", description: "Deep learning neural networks", level: "Intermediate" },
        { name: "Pandas", description: "Data manipulation and analysis", level: "Advanced" }
      ]
    },
    {
      title: "Data Visualization",
      icon: BarChart3,
      tools: [
        { name: "Matplotlib", description: "Basic plotting and visualization", level: "Advanced" },
        { name: "Seaborn", description: "Statistical data visualization", level: "Advanced" },
        { name: "Plotly", description: "Interactive visualizations", level: "Intermediate" },
        { name: "Tableau", description: "Business intelligence dashboards", level: "Intermediate" }
      ]
    },
    {
      title: "Development Tools",
      icon: Cog,
      tools: [
        { name: "Jupyter Notebook", description: "Interactive development environment", level: "Advanced" },
        { name: "Git", description: "Version control and collaboration", level: "Advanced" },
        { name: "Docker", description: "Containerization and deployment", level: "Intermediate" },
        { name: "VS Code", description: "Code editor and debugging", level: "Advanced" }
      ]
    },
    {
      title: "Cloud & Deployment",
      icon: Database,
      tools: [
        { name: "AWS", description: "Cloud computing platform", level: "Intermediate" },
        { name: "Google Colab", description: "Cloud-based Jupyter environment", level: "Advanced" },
        { name: "MLflow", description: "ML lifecycle management", level: "Beginner" },
        { name: "Flask", description: "Web application framework", level: "Intermediate" }
      ]
    },
    {
      title: "Model Management",
      icon: GitBranch,
      tools: [
        { name: "Cross-validation", description: "Model validation technique", level: "Advanced" },
        { name: "Grid Search", description: "Hyperparameter optimization", level: "Advanced" },
        { name: "Feature Selection", description: "Dimensionality reduction", level: "Advanced" },
        { name: "A/B Testing", description: "Model performance comparison", level: "Intermediate" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced": return "bg-primary text-primary-foreground";
      case "Intermediate": return "bg-secondary text-secondary-foreground";
      case "Beginner": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="tools" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Tools & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit leveraging industry-standard technologies for data science, 
            machine learning, and model deployment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="p-8 shadow-card hover:shadow-elegant transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-1">
                        <span className="font-semibold text-foreground">{tool.name}</span>
                        <Badge className={`text-xs ${getLevelColor(tool.level)}`}>
                          {tool.level}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{tool.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Technology Stack Overview */}
        <div className="mt-16">
          <Card className="p-8 shadow-card bg-gradient-accent">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Complete Technology Stack
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Data Processing</h4>
                <div className="space-y-2">
                  <Badge variant="secondary">Python + Pandas</Badge>
                  <Badge variant="secondary">NumPy</Badge>
                  <Badge variant="secondary">SQL</Badge>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Machine Learning</h4>
                <div className="space-y-2">
                  <Badge variant="secondary">Scikit-learn</Badge>
                  <Badge variant="secondary">XGBoost</Badge>
                  <Badge variant="secondary">TensorFlow</Badge>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Visualization</h4>
                <div className="space-y-2">
                  <Badge variant="secondary">Matplotlib</Badge>
                  <Badge variant="secondary">Seaborn</Badge>
                  <Badge variant="secondary">Plotly</Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;