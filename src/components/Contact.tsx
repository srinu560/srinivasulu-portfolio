import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />
        
        <div className="max-w-5xl mx-auto">
          <p className="text-lg text-muted-foreground mb-12 text-center">
            I&apos;m actively looking for opportunities to start my career in cloud computing. 
            Whether you have a project, opportunity, or just want to connect, feel free to reach out!
          </p>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4 mb-8">
                <a 
                  href="mailto:srinivasulu798960@gmail.com" 
                  className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all group"
                >
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <p className="text-sm text-muted-foreground break-all">srinivasulu798960@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="tel:+917815851361" 
                  className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all group"
                >
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <p className="text-sm text-muted-foreground">+91 78158 51361</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Location</p>
                    <p className="text-sm text-muted-foreground">Vijayawada, Andhra Pradesh, India</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Connect with me</h4>
                <div className="flex gap-4">
                  <Button variant="outline" size="lg" className="flex-1 border-primary/50 hover:bg-primary/10" asChild>
                    <a href="https://github.com/srinu560" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1 border-primary/50 hover:bg-primary/10" asChild>
                    <a href="https://www.linkedin.com/in/srinivasulu-reddy-sandireddy-9269a3265/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
