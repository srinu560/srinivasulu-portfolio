import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink } from "lucide-react";

const publications = [
  {
    title: "Intelligent Thyroid Diagnosis System Using Machine Learning",
    authors: "Srinivasulu Reddy Sandireddy, et al.",
    venue: "Final Year Project Publication",
    year: "2024",
    description: "Research paper on developing an AI-powered diagnostic system for thyroid conditions using advanced machine learning algorithms. The system demonstrates high accuracy in early detection and classification of thyroid disorders.",
    keywords: ["Machine Learning", "Healthcare AI", "Thyroid Diagnosis", "Python", "Data Analysis"],
    link: "https://www.ijaresm.com/search?x=0&y=0&keyword2=Intelligent+Thyroid+Diagnosis%3A",
    type: "Conference Paper"
  }
];

const Publications = () => {
  return (
    <section id="publications" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Publications & Research
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />
        
        <div className="max-w-4xl mx-auto">
          {publications.map((pub, index) => (
            <Card 
              key={index} 
              className="group hover:border-primary/50 transition-all hover:shadow-[var(--shadow-card)] bg-card"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {pub.title}
                      </CardTitle>
                      <Badge variant="secondary" className="bg-accent/10 text-accent border-0 flex-shrink-0">
                        {pub.type}
                      </Badge>
                    </div>
                    <CardDescription className="text-base mb-2">
                      {pub.authors}
                    </CardDescription>
                    <p className="text-sm text-primary font-medium">
                      {pub.venue} • {pub.year}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {pub.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {pub.keywords.map((keyword) => (
                    <Badge 
                      key={keyword} 
                      variant="secondary" 
                      className="bg-card border border-border hover:border-primary/50 transition-colors"
                    >
                      {keyword}
                    </Badge>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="border-primary/50 hover:bg-primary/10" 
                  asChild
                >
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Publication
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
