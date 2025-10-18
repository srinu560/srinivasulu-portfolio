import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "AWS re/Start Program Trainee Certificate",
    issuer: "Tech Mahindra SMART Academy",
    date: "2024",
    description: "Comprehensive cloud computing training program covering AWS services, cloud architecture, and hands-on labs.",
    skills: ["AWS", "Cloud Computing", "EC2", "S3", "RDS", "Lambda"],
    link: "#"
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "2024",
    description: "Completed advanced course on cloud computing fundamentals, architectures, and deployment models.",
    skills: ["Cloud Architecture", "Virtualization", "IaaS", "PaaS", "SaaS"],
    link: "#"
  },
  {
    title: "Programming Skills in Python",
    issuer: "CISCO",
    date: "2024",
    description: "Demonstrated proficiency in Python programming including data structures, algorithms, and practical applications.",
    skills: ["Python", "Programming", "Data Structures", "Algorithms"],
    link: "#"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
            <Award className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and training programs completed
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      <span className="font-semibold text-foreground">{cert.issuer}</span>
                      <span className="mx-2">•</span>
                      <span>{cert.date}</span>
                    </CardDescription>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                    asChild
                  >
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      View Certificate
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {cert.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
