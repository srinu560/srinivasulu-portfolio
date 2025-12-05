import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "AWS re/Start Program Trainee Certificate",
    issuer: "Tech Mahindra SMART Academy",
    date: "November, 2025",
    description: "Comprehensive cloud computing training program covering AWS services, cloud architecture, and hands-on labs.",
    skills: ["AWS", "Cloud Computing", "EC2", "S3", "RDS", "Lambda"],
    link: "#"
  },
  {
    "title": "Google IT Support Professional Certificate",
    "issuer": "Coursera | Google",
    "date": "March 26, 2024",
    "description": "Professional certificate covering five courses designed to prepare for entry-level roles in IT support, including hands-on assessments. [cite: 96, 97]",
    "skills": ["Troubleshooting", "Customer Service", "Networking", "Operating Systems", "System Administration", "IT Security"],
    "link": "https://coursera.org/verify/professional-cert/VS67C4S5XLU7"
  },
  {
    "title": "Google Data Analytics Professional Certificate",
    "issuer": "Coursera | Google",
    "date": "March 13, 2024",
    "description": "Eight-course professional certificate covering data preparation, processing, analysis, and visualization using standard industry tools. [cite: 58, 59, 60]",
    "skills": ["Data Analysis", "Spreadsheets", "SQL", "Tableau", "R Programming", "Data Visualization"],
    "link": "https://coursera.org/verify/professional-cert/H8UF9AXYBU9K"
  },
  {
    title: "Programming Skills in Python",
    issuer: "CISCO",
    date: "2024",
    description: "Demonstrated proficiency in Python programming including data structures, algorithms, and practical applications.",
    skills: ["Python", "Programming", "Data Structures", "Algorithms"],
    link: "https://drive.google.com/file/d/1gZtsdIQNEyfGD-mBwPnDFL4NLjbh5a_U/view?usp=sharing"
  },
  {
    "title": "JavaScript Essentials 1 (JSE)",
    "issuer": "Cisco Networking Academy | OpenEDG JavaScript Institute",
    "date": "January 30, 2023",
    "description": "Statement of Achievement for mastering core JavaScript syntax, variables, control flow, functions, and algorithmic thinking. [cite: 110, 111, 121]",
    "skills": ["JavaScript", "Algorithmic Thinking", "Programming Fundamentals"],
    "link": "https://drive.google.com/file/d/1ga0KnTTjSWxcKoFiCyxaADg5Nc0lv3qE/view?usp=sharing"
  },
  {
    "title": "International Student Workshop on Data Science using Python",
    "issuer": "Andhra Loyola Institute / Brainovision Solutions",
    "date": "February 26, 2024",
    "description": "International Level Student Workshop focused on learning Data Science concepts using Python.",
    "skills": ["Data Science", "Python"],
    "link": "https://drive.google.com/file/d/19A__4VrmjFmgIUsS0z_X4M4rFNtN7VV7/view?usp=sharing"
  },
  {
    "title": "Software Testing Certification",
    "issuer": "NPTEL | IIIT Bangalore",
    "date": "July-October 2024",
    "description": "12-week online certification course funded by the Ministry of Education, Govt of India.",
    "skills": ["Software Testing"],
    "link": "https://drive.google.com/file/d/19eHx893EtKJZvxpTPuS0jWOBXBXxgmfI/view?usp=sharing"
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "2024",
    description: "Completed advanced course on cloud computing fundamentals, architectures, and deployment models.",
    skills: ["Cloud Architecture", "Virtualization", "IaaS", "PaaS", "SaaS"],
    link: "https://drive.google.com/file/d/1fyF8dq3L5YUx-oSL246_A4HVsqQQZcDG/view?usp=sharing"
  },
  
  {
    "title": "Software Engineering and Agile Software Development",
    "issuer": "Infosys Springboard",
    "date": "August 30, 2023",
    "description": "Course completion certificate covering software engineering principles and Agile development practices. [cite: 173, 175]",
    "skills": ["Software Engineering", "Agile Development"],
    "link": "https://drive.google.com/file/d/1Q34cXqVGDTekDrlBQOPmUxX6ZdQOvCZN/view?usp=sharing"
  },
  {
    "title": "Continuous Integration and Delivery - DevOps",
    "issuer": "Infosys Springboard",
    "date": "September 13, 2023",
    "description": "Course completion certificate focusing on CI/CD pipelines and DevOps methodologies. [cite: 73, 75]",
    "skills": ["DevOps", "Continuous Integration", "Continuous Delivery"],
    "link": "https://drive.google.com/file/d/1WlfHIagRtXnTOu6iVPRtaaqhbpQpYfxJ/view?usp=sharing"
  },
  {
    "title": "Internship in Artificial Intelligence",
    "issuer": "SkillDzire / AP State Council of Higher Education",
    "date": "April 12, 2025",
    "description": "Long-term internship program focusing on Artificial Intelligence organized in collaboration with Andhra Pradesh State Council of Higher Education. [cite: 191, 192, 193]",
    "skills": ["Artificial Intelligence", "Computer Science"],
    "link": "https://drive.google.com/file/d/1EyYdnZeOasoCFiGsTaHc9CYSVS8dOB-a/view?usp=sharing"
  },
  {
    "title": "Internship in Data Science and Machine Learning",
    "issuer": "HDLC Technologies",
    "date": "July 29, 2023",
    "description": "8-week internship program involving the successful completion of a project in Data Science and Machine Learning.",
    "skills": ["Data Science", "Machine Learning"],
    "link": "https://drive.google.com/file/d/1G7mTlylxnrmkdR1o2X9zjnNRudscfoz7/view?usp=sharing"
  },
  
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
