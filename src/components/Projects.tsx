import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  
  {
    title: "Intelligent Thyroid Diagnosis System",
    description: "AI-powered system for diagnosing thyroid conditions using machine learning algorithms. Implements advanced ML techniques to provide accurate diagnosis based on medical data.",
    tech: ["Python", "Machine Learning", "AI", "Data Analysis"],
    github: "https://github.com/srinu560/Intelligent-Thyroid-Diagnosis-System",
    demo: "https://www.linkedin.com/posts/srinivasulu-reddy-sandireddy-9269a3265_ai-deeplearning-machinelearning-activity-7387790814111809536-F6bA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEbv24BWNP4IEB3LzAR7WH-KU8JwLBA_yE"
  },
  {
    title: "Serverless Social Media News Aggregator",
    description: "A fully automated, event-driven news aggregation platform built on AWS serverless architecture. It fetches and categorizes multilingual news from global and regional Indian sources every hour using Lambda and EventBridge, serving a responsive frontend via API Gateway and S3.",
    tech: ["AWS Lambda", "Python", "DynamoDB", "API Gateway", "Amazon S3", "EventBridge"],
    github: "https://github.com/srinu560/Social_Media_News_Aggregator",
    demo: "https://www.linkedin.com/posts/srinivasulu-reddy-sandireddy-9269a3265_awsarchitecture-serverless-lambda-activity-7386380005435441152-Svzc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEbv24BWNP4IEB3LzAR7WH-KU8JwLBA_yE"
  },
  {
    title: "Object Detection using YOLO",
    description: "Real-time object detection system implementing YOLO (You Only Look Once) algorithm. Capable of identifying and classifying multiple objects in images and video streams.",
    tech: ["Python", "YOLO", "Computer Vision", "Deep Learning"],
    github: "https://github.com/srinu560/Object_Detection_Project",
    demo: "https://www.linkedin.com/posts/srinivasulu-reddy-sandireddy-9269a3265_real-time-object-detection-web-app-django-activity-7402615088303828992-03DR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEbv24BWNP4IEB3LzAR7WH-KU8JwLBA_yE"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:border-primary/50 transition-all hover:shadow-[var(--shadow-card)] bg-card"
            >
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-0">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="border-primary/50 hover:bg-primary/10" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
