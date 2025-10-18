import { Code2, Rocket, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am a fresher certified in the AWS re/Start program, looking to start my career in cloud computing. 
            I want to apply the skills I have learned and gain practical experience in real projects. 
            I am eager to learn, grow, and contribute positively in a professional environment. 
            With a Bachelor&apos;s degree in Computer Science &amp; Engineering (CGPA: 8.23) from Andhra Loyola Institute 
            of Engineering and Technology, I bring strong technical skills and a passion for innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-[var(--shadow-card)] group">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Code2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Problem Solving</h3>
            <p className="text-muted-foreground">
              Strong analytical skills to break down complex problems and develop efficient solutions.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-[var(--shadow-card)] group">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Rocket className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Quick Learner</h3>
            <p className="text-muted-foreground">
              Fast adaptation to new technologies and frameworks, constantly expanding knowledge in cloud computing.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-[var(--shadow-card)] group">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Self-Motivated</h3>
            <p className="text-muted-foreground">
              Disciplined and driven with excellent communication skills, ready to contribute positively to any team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
