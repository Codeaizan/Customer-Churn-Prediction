import { Card } from "@/components/ui/card";
import { AlertTriangle, TrendingDown, DollarSign, Users } from "lucide-react";

const AboutProjectSection = () => {
  return (
    <>
      {/* Problem Statement */}
      <section id="problem-statement" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Problem Statement
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Customer churn is a major concern for subscription-based businesses like telecom providers. Retaining existing customers is more cost-effective than acquiring new ones.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="h-8 w-8 text-destructive" />
                <h3 className="text-3xl font-bold text-foreground">The Challenge</h3>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Customer churn represents one of the most significant challenges in business sustainability. 
                Companies lose millions annually due to customer attrition, often without early warning signs 
                or actionable insights to prevent it.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-destructive rounded-full"></div>
                  <span className="text-foreground">Lack of early warning systems for at-risk customers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-destructive rounded-full"></div>
                  <span className="text-foreground">Reactive rather than proactive retention strategies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-destructive rounded-full"></div>
                  <span className="text-foreground">Limited understanding of churn factors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-destructive rounded-full"></div>
                  <span className="text-foreground">Inefficient resource allocation for retention efforts</span>
                </div>
              </div>
            </div>
            
            <Card className="p-8 shadow-card bg-gradient-accent">
              <div className="text-center mb-6">
                <TrendingDown className="h-16 w-16 text-destructive mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-foreground mb-2">Industry Challenge</h4>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-destructive mb-1">73%</div>
                  <div className="text-sm text-muted-foreground">of companies struggle with churn</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-destructive mb-1">5x</div>
                  <div className="text-sm text-muted-foreground">cost of acquisition vs retention</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-destructive mb-1">89%</div>
                  <div className="text-sm text-muted-foreground">want predictive capabilities</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-destructive mb-1">67%</div>
                  <div className="text-sm text-muted-foreground">lack proper analytics</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Research Question */}
          <Card className="p-8 shadow-elegant bg-gradient-primary text-primary-foreground">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Research Question</h3>
              <p className="text-lg opacity-90">
                "Can machine learning algorithms accurately predict customer churn behavior 
                and identify the key factors that influence customer retention decisions?"
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Business Relevance */}
      <section id="business-relevance" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Business Relevance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understanding the strategic importance and real-world impact of churn prediction in modern business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300">
              <DollarSign className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Financial Impact</h3>
              <p className="text-muted-foreground mb-4">
                Reducing churn by just 5% can increase profits by 25-95% according to Harvard Business Review.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Lower acquisition costs</li>
                <li>• Higher customer lifetime value</li>
                <li>• Improved revenue predictability</li>
              </ul>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Customer Experience</h3>
              <p className="text-muted-foreground mb-4">
                Proactive retention improves customer satisfaction and builds stronger relationships.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Personalized retention offers</li>
                <li>• Improved customer service</li>
                <li>• Enhanced product development</li>
              </ul>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300">
              <TrendingDown className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Competitive Advantage</h3>
              <p className="text-muted-foreground mb-4">
                Data-driven retention strategies provide significant market advantages.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Better resource allocation</li>
                <li>• Strategic decision making</li>
                <li>• Market position strengthening</li>
              </ul>
            </Card>
          </div>

          {/* Business Value Proposition */}
          <Card className="p-8 shadow-card bg-gradient-accent">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Expected Business Outcomes</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">69%</div>
                <div className="text-sm text-muted-foreground">Reduction in churn rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">₹8.28 lakhs</div>
                <div className="text-sm text-muted-foreground">per year for a telecom provider with 10,000 customers and an average monthly revenue of ₹500 per user.</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">20%</div>
                <div className="text-sm text-muted-foreground">Increase in CLV</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">69%</div>
                <div className="text-sm text-muted-foreground">Thanks to the machine learning model, the business can now identify and take action on **69% of at-risk customers before they churn**. This enables faster intervention and improves customer retention significantly.</div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
};

export default AboutProjectSection;