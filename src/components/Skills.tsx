import { Badge } from "@/components/ui/badge";

const skills = {
  "Cloud Platform": ["Amazon Web Services (AWS)"],
  "AWS Services": ["EC2", "S3", "RDS", "IAM", "VPC", "Lambda", "CloudFront", "CloudWatch", "Route 53", "EBS", "ELB"],
  "Programming / Scripting": ["Python", "Bash"],
  "Networking": ["VPC", "Subnets", "NAT", "IGW", "Route Table", "Security Groups"],
  "Other Skills": ["Artificial Intelligence", "Machine Learning"]
};

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />
        
        <div className="max-w-5xl mx-auto space-y-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
