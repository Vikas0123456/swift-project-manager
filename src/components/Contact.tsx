import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <span className="text-primary font-mono text-sm mb-2 block">05. Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            I'm currently open to new opportunities and would love to hear about your project. 
            Feel free to reach out!
          </p>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            <a
              href="mailto:vk.tomar.dev@gmail.com"
              className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group flex items-center gap-4"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">vk.tomar.dev@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+917067059611"
              className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group flex items-center gap-4"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Phone className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">+91-7067059611</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/vikas-tomar-a9756520a"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group flex items-center gap-4"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="font-medium">vikas-tomar</p>
              </div>
            </a>

            <div className="glass rounded-xl p-6 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">Bhopal, MP, India</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Button variant="hero" size="xl" asChild>
            <a href="mailto:vk.tomar.dev@gmail.com">
              <Mail className="h-5 w-5" />
              Send a Message
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
