import { MapPin, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <span className="text-primary font-mono text-sm mb-2 block">01. About Me</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Professional Summary
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
              <MapPin className="h-6 w-6 text-primary mb-4" />
              <h3 className="font-semibold mb-1">Location</h3>
              <p className="text-muted-foreground text-sm">Bhopal, Madhya Pradesh, India</p>
            </div>
            <div className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
              <Briefcase className="h-6 w-6 text-primary mb-4" />
              <h3 className="font-semibold mb-1">Experience</h3>
              <p className="text-muted-foreground text-sm">3+ Years Full Stack Development</p>
            </div>
            <div className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
              <GraduationCap className="h-6 w-6 text-primary mb-4" />
              <h3 className="font-semibold mb-1">Education</h3>
              <p className="text-muted-foreground text-sm">B.Tech in EEE, RGPV (2022)</p>
            </div>
          </div>

          {/* Description */}
          <div className="glass rounded-xl p-8">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Full Stack MERN Developer with <span className="text-foreground font-medium">3+ years</span> of experience 
              building scalable, high-performance web applications using modern technologies. I specialize in developing 
              microservices architectures, integrating third-party APIs, and implementing AI-powered solutions. 
              My background spans both frontend and backend development with a track record of delivering 
              <span className="text-foreground font-medium"> 7+ production-grade applications</span> across aviation, 
              government, and e-commerce domains.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
