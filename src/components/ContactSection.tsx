import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, Award, Users, BookOpen } from "lucide-react";

const ContactSection = () => {
  const projectDetails = {
    authors: ["Faizanur Rahman,", " Mohammad Hamid Khan,", " Krishabh Raj"],
    studentIds: ["12323057,", " 12311921,", " 12319489"],
    course: "AI & ML",
    institution: "Lovely Professional University",
    department: "Computer Science",
    semester: "5",
    supervisor: "Mahipal"
  };

  // const acknowledgments = [
  //   {
  //     category: "Academic Supervision",
  //     people: [
  //       { name: "[Professor Name]", role: "Project Supervisor", contribution: "Guidance and methodology review" },
  //       { name: "[TA Name]", role: "Teaching Assistant", contribution: "Technical support and code review" }
  //     ]
  //   },
  //   {
  //     category: "Data & Resources",
  //     people: [
  //       { name: "[Dataset Provider]", role: "Data Source", contribution: "Customer dataset provision" },
  //       { name: "[Industry Expert]", role: "Domain Expert", contribution: "Business context and validation" }
  //     ]
  //   },
  //   {
  //     category: "Technical Support",
  //     people: [
  //       { name: "[Peer Name]", role: "Study Group Member", contribution: "Algorithm discussion and debugging" },
  //       { name: "[Mentor Name]", role: "Industry Mentor", contribution: "Real-world application insights" }
  //     ]
  //   }
  // ];

  const resources = [
    { title: "GitHub Repository", url: "https://github.com/Codeaizan/Customer-Churn-Prediction", description: "Complete source code and documentation" },
    { title: "Dataset Documentation", url: "https://github.com/Codeaizan/Customer-Churn-Prediction/blob/main/data/Customer_Churn_Dataset_Documentation.pdf", description: "Data dictionary and preprocessing steps" },
    { title: "Technical Report", url: "#", description: "Detailed methodology and results analysis" },
    { title: "Presentation Slides", url: "#", description: "Project presentation materials" }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Contact & Acknowledgment
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Project details, team credits, and resources for further exploration
          </p>
        </div>

        {/* Project Information */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 shadow-card">
            <div className="flex items-center space-x-3 mb-6">
              <Award className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Project Information</h3>
            </div>
            <div className="space-y-4">
              {Object.entries(projectDetails).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center border-b border-border/50 pb-2">
                  <span className="text-muted-foreground capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}:
                  </span>
                  <span className="text-foreground font-medium">{value}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-gradient-accent rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Project Duration</h4>
              <p className="text-muted-foreground text-sm">
                This project was completed over [X months] as part of the academic curriculum, 
                involving extensive research, implementation, and validation phases.
              </p>
            </div>
          </Card>

          {/* Contact Information */}
          <Card className="p-8 shadow-card">
            <div className="flex items-center space-x-3 mb-6">
              <Mail className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Get In Touch</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              I'm always interested in discussing this project, machine learning applications, 
              or potential collaboration opportunities.
            </p>
            
            <div className="space-y-4 mb-8">
              <Button variant="outline" className="w-full justify-start">
                <Mail className="h-4 w-4 mr-2" />
                <span>Faizanrahman51@gmail.com, mhkhan1401003@gmail.com, rajkrishabh89@gmail.com</span>
              </Button>
              <a
  href="https://www.linkedin.com/in/faizanur-rahman-2656bb1aa/"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full"
>
  <Button variant="outline" className="w-full justify-start">
    <Linkedin className="h-4 w-4 mr-2" />
    <span>LinkedIn Profile</span>
    <ExternalLink className="h-3 w-3 ml-auto" />
  </Button>
</a>

<a
  href="https://github.com/Codeaizan"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full"
>
  <Button variant="outline" className="w-full justify-start">
    <Github className="h-4 w-4 mr-2" />
    <span>GitHub Profile</span>
    <ExternalLink className="h-3 w-3 ml-auto" />
  </Button>
</a>

            </div>

            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Available for Discussion</h4>
              <p className="text-sm text-muted-foreground">
                Feel free to reach out with questions about the methodology, 
                implementation details, or potential improvements to the model.
              </p>
            </div>
          </Card>
        </div>

        {/* Acknowledgments
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Acknowledgments</h3>
            <p className="text-lg text-muted-foreground">
              Grateful recognition to everyone who contributed to this project's success
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {acknowledgments.map((category, index) => (
              <Card key={index} className="p-6 shadow-card">
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="h-6 w-6 text-primary" />
                  <h4 className="text-lg font-bold text-foreground">{category.category}</h4>
                </div>
                <div className="space-y-4">
                  {category.people.map((person, personIndex) => (
                    <div key={personIndex}>
                      <div className="font-medium text-foreground">{person.name}</div>
                      <div className="text-sm text-primary">{person.role}</div>
                      <div className="text-xs text-muted-foreground mt-1">{person.contribution}</div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div> */}

        {/* Resources & Links */}
        <Card className="p-8 shadow-card bg-gradient-accent">
  <div className="flex items-center space-x-3 mb-6">
    <BookOpen className="h-8 w-8 text-primary" />
    <h3 className="text-2xl font-bold text-foreground">Project Resources</h3>
  </div>
  <div className="grid md:grid-cols-2 gap-6">
    {resources.map((resource, index) => (
      <a
        key={index}
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start space-x-3 p-4 bg-background/50 rounded-lg hover:bg-background transition"
      >
        <ExternalLink className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
        <div>
          <h4 className="font-semibold text-foreground">{resource.title}</h4>
          <p className="text-sm text-muted-foreground">{resource.description}</p>
        </div>
      </a>
    ))}
  </div>
</Card>


        {/* Thank You Message */}
        <div className="text-center mt-16">
          <Card className="p-8 shadow-elegant bg-gradient-primary text-primary-foreground max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Thank You</h3>
            <p className="text-lg opacity-90">
              Thank you for taking the time to explore this customer churn prediction project. 
              Your feedback and questions are always welcome as I continue to learn and grow 
              in the field of data science and machine learning.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;