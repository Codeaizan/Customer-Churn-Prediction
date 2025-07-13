import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <Card className="p-8 shadow-card">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Project Info */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Customer Churn Prediction
              </h3>
              <p className="text-muted-foreground mb-4">
                A comprehensive machine learning project demonstrating predictive analytics 
                for customer retention strategies.
              </p>
              <p className="text-sm text-muted-foreground">
                Developed as part of academic coursework in Data Science & Machine Learning.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Project Sections</h3>
              <div className="space-y-2">
                <a href="#overview" className="block text-muted-foreground hover:text-primary transition-colors">
                  Overview
                </a>
                <a href="#methodology" className="block text-muted-foreground hover:text-primary transition-colors">
                  Methodology
                </a>
                <a href="#results" className="block text-muted-foreground hover:text-primary transition-colors">
                  Results
                </a>
                <a href="#tools" className="block text-muted-foreground hover:text-primary transition-colors">
                  Tools & Technologies
                </a>
                <a href="#conclusion" className="block text-muted-foreground hover:text-primary transition-colors">
                  Conclusion
                </a>
              </div>
            </div>

            {/* Contact & Resources */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Resources</h3>
              <div className="space-y-3">
                <a 
                  href="#" 
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a 
                  href="#" 
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Dataset Source</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a 
                  href="#" 
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>Contact Author</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Customer Churn Prediction Project. Created for academic presentation.
            </p>
          </div>
        </Card>
      </div>
    </footer>
  );
};

export default Footer;