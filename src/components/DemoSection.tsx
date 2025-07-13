import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play, Code, Download, Smartphone, Monitor } from "lucide-react";

const DemoSection = () => {
  const sampleInputs = [
    {
      customerType: "High-Risk Customer",
      features: {
        tenure: "3 months",
        monthlyCharges: "$89.50",
        totalCharges: "$268.50",
        contractType: "Month-to-month",
        paymentMethod: "Electronic check",
        internetService: "Fiber optic",
        supportCalls: "5 calls"
      },
      prediction: "85%",
      riskLevel: "High",
      recommendation: "Immediate retention offer recommended"
    },
    {
      customerType: "Low-Risk Customer",
      features: {
        tenure: "48 months",
        monthlyCharges: "$65.20",
        totalCharges: "$3,129.60",
        contractType: "Two year",
        paymentMethod: "Credit card",
        internetService: "DSL",
        supportCalls: "1 call"
      },
      prediction: "12%",
      riskLevel: "Low",
      recommendation: "Continue standard service"
    }
  ];

  return (
    <>
      {/* Streamlit App Demo */}
      <section id="streamlit-app" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Interactive Demo - Streamlit App
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the customer churn prediction model through our interactive web application
            </p>
          </div>

          {/* App Preview */}
          <Card className="p-8 shadow-elegant mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Live Application Demo</h3>
              <p className="text-muted-foreground mb-6">
                Try our interactive churn prediction tool with real-time results
              </p>
              <div className="flex justify-center space-x-4 mb-6">
                <Button variant="gradient" size="lg" className="flex items-center space-x-2">
                  <ExternalLink className="h-5 w-5" />
                  <span>Launch Demo App</span>
                </Button>
                <Button variant="outline" size="lg" className="flex items-center space-x-2">
                  <Code className="h-5 w-5" />
                  <span>View Source Code</span>
                </Button>
              </div>
            </div>

            {/* App Screenshot Placeholder */}
            <div className="bg-muted/30 rounded-lg border-2 border-dashed border-primary/20 p-8 min-h-[400px] flex items-center justify-center">
              <div className="text-center text-muted-foreground/50">
                <Monitor className="h-20 w-20 mx-auto mb-4" />
                <div className="text-xl mb-2">Streamlit App Screenshot</div>
                <div className="text-sm">Add your application screenshot here</div>
                <div className="mt-4 text-xs max-w-md mx-auto">
                  Include screenshots showing the input form, prediction results, 
                  and visualizations from your Streamlit application
                </div>
              </div>
            </div>
          </Card>

          {/* App Features */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300">
              <Smartphone className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Interactive Interface</h3>
              <p className="text-muted-foreground text-sm">
                User-friendly interface for inputting customer data and getting instant predictions
              </p>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300">
              <Play className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Real-time Predictions</h3>
              <p className="text-muted-foreground text-sm">
                Instant churn probability calculations with confidence intervals
              </p>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300">
              <Download className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Export Results</h3>
              <p className="text-muted-foreground text-sm">
                Download prediction results and visualizations for further analysis
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Sample Inputs & Predictions */}
      <section id="sample-predictions" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Sample Inputs & Predictions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real examples demonstrating how the model processes customer data and generates predictions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {sampleInputs.map((sample, index) => (
              <Card key={index} className="p-8 shadow-card hover:shadow-elegant transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-foreground">{sample.customerType}</h3>
                  <Badge 
                    variant={sample.riskLevel === "High" ? "destructive" : "secondary"}
                    className={sample.riskLevel === "High" ? "bg-destructive text-destructive-foreground" : ""}
                  >
                    {sample.riskLevel} Risk
                  </Badge>
                </div>

                {/* Customer Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Customer Features</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {Object.entries(sample.features).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}:
                        </span>
                        <span className="text-foreground font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prediction Results */}
                <div className="p-4 bg-gradient-accent rounded-lg">
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold text-primary mb-1">{sample.prediction}</div>
                    <div className="text-sm text-muted-foreground">Churn Probability</div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">Recommendation:</p>
                    <p className="text-sm font-medium text-foreground">{sample.recommendation}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Interactive Demo Section */}
          <Card className="p-8 shadow-card bg-gradient-primary text-primary-foreground">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Try Your Own Predictions</h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Input your own customer data into our model and see real-time churn predictions 
                with detailed explanations and business recommendations.
              </p>
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Launch Interactive Demo
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>

          {/* Model Explanation */}
          <div className="mt-16">
            <Card className="p-8 shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                How the Model Makes Predictions
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1</div>
                  <h4 className="font-semibold text-foreground mb-2">Data Input</h4>
                  <p className="text-sm text-muted-foreground">
                    Customer features are processed and normalized according to training data patterns
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2</div>
                  <h4 className="font-semibold text-foreground mb-2">Model Processing</h4>
                  <p className="text-sm text-muted-foreground">
                    Random Forest algorithm analyzes feature combinations and generates probability scores
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <h4 className="font-semibold text-foreground mb-2">Result Interpretation</h4>
                  <p className="text-sm text-muted-foreground">
                    Probability is converted to actionable insights with business recommendations
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default DemoSection;