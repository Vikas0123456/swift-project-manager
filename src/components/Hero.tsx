import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const RESUME_URL = import.meta.env.VITE_RESUME_URL || "https://drive.google.com/file/d/1J6Nu1wSb9Dz57sQ8waYJ5IZTjTFwqg2j/view?usp=sharing";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Blur blobs (subtle glow) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[28rem] h-[28rem] bg-primary/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/12 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 backdrop-blur-xl bg-card/40 hover:bg-card/60 hover:border-primary/30 transition-all duration-300 mb-8 animate-fade-in shadow-lg">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Hi, I'm{" "}
            <span className="text-gradient">Vikas Tomar</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-slide-up font-mono" style={{ animationDelay: "0.2s" }}>
            Full Stack MERN Developer
          </p>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up leading-relaxed" style={{ animationDelay: "0.3s" }}>
            Building scalable, high-performance web applications with 3+ years of expertise
            in modern technologies, microservices architecture, and AI-powered solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Resume
              </a>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <a href="#contact">Let's Connect</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/vikas-tomar-27bb363a0" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/Vikas0123456" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:vk.tomar.dev@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
