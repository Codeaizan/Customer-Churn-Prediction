import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const navItems = [
    { id: "home", label: "Home", hasDropdown: false },
    {
      id: "about",
      label: "About Project",
      hasDropdown: true,
      dropdownItems: [
        { id: "problem-statement", label: "Problem Statement" },
        { id: "business-relevance", label: "Business Relevance" },
      ],
    },
    {
      id: "how-built",
      label: "How It Was Built",
      hasDropdown: true,
      dropdownItems: [
        { id: "tools-tech", label: "Tools & Technologies Used" },
        { id: "ml-workflow", label: "ML Workflow" },
        { id: "feature-engineering", label: "Feature Engineering & Tuning" },
      ],
    },
    {
      id: "results",
      label: "Results",
      hasDropdown: true,
      dropdownItems: [
        { id: "model-metrics", label: "Model Metrics" },
        { id: "evaluation-matrix", label: "Evaluation & Confusion Matrix" },
        { id: "roc-curve", label: "ROC Curve / AUC Score" },
      ],
    },
    {
      id: "demo",
      label: "Demo",
      hasDropdown: true,
      dropdownItems: [
        { id: "streamlit-app", label: "Streamlit App" },
        { id: "sample-predictions", label: "Sample Inputs & Predictions" },
      ],
    },
    { id: "learnings", label: "Learnings & Future Work", hasDropdown: false },
    { id: "contact", label: "Contact / Acknowledgment", hasDropdown: false },
  ];

  const handleDropdownToggle = (itemId: string) => {
    setActiveDropdown(activeDropdown === itemId ? null : itemId);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-primary">
            Customer Churn Prediction
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.id} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <Button
                      variant="ghost"
                      onClick={() => handleDropdownToggle(item.id)}
                      className="text-foreground hover:text-primary flex items-center space-x-1"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                    
                    {activeDropdown === item.id && (
                      <div className="absolute top-full left-0 mt-1 bg-background border border-border rounded-lg shadow-elegant z-50 min-w-[200px]">
                        <div className="py-2">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <button
                              key={dropdownItem.id}
                              onClick={() => scrollToSection(dropdownItem.id)}
                              className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors"
                            >
                              {dropdownItem.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Button
                    variant="ghost"
                    onClick={() => scrollToSection(item.id)}
                    className="text-foreground hover:text-primary"
                  >
                    {item.label}
                  </Button>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-border bg-background rounded-lg shadow-card">
            <div className="flex flex-col space-y-1 p-2">
              {navItems.map((item) => (
                <div key={item.id}>
                  {item.hasDropdown ? (
                    <>
                      <Button
                        variant="ghost"
                        onClick={() => handleDropdownToggle(item.id)}
                        className="w-full justify-between text-foreground hover:text-primary"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                      {activeDropdown === item.id && (
                        <div className="ml-4 space-y-1">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Button
                              key={dropdownItem.id}
                              variant="ghost"
                              onClick={() => scrollToSection(dropdownItem.id)}
                              className="w-full justify-start text-sm text-muted-foreground hover:text-primary"
                            >
                              {dropdownItem.label}
                            </Button>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Button
                      variant="ghost"
                      onClick={() => scrollToSection(item.id)}
                      className="w-full justify-start text-foreground hover:text-primary"
                    >
                      {item.label}
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Dropdown backdrop for desktop */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </nav>
  );
};

export default Navigation;