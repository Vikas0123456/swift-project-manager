import { Button } from "@/components/ui/button";
import { ExternalLink, Globe, Building, Plane, ShoppingCart } from "lucide-react";

const projects = [
  {
    title: "CloudRentalManager",
    subtitle: "Property Management Platform",
    description: "Comprehensive property management system for US-based client featuring property listings, tenant management, and payment processing.",
    icon: Building,
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    highlights: [
      "Built scalable REST APIs for property and tenant management",
      "Optimized MongoDB schema for efficient data retrieval",
      "Collaborated with international clients on requirements",
    ],
  },
  {
    title: "e-GOV Portal",
    subtitle: "Government Services Platform",
    description: "Secure government services portal for Cayman Islands enabling citizens to access various government services online with multi-language support.",
    icon: Globe,
    tech: ["Node.js", "Express.js", "PostgreSQL", "React.js", "JWT"],
    highlights: [
      "Implemented secure document management with encryption",
      "Built multi-language support (English/Spanish)",
      "Role-based access control system",
    ],
  },
  {
    title: "FliteX",
    subtitle: "Aviation Platform",
    description: "Flight booking and management system with real-time dashboard, Google Maps integration, and comprehensive analytics.",
    icon: Plane,
    tech: ["React.js", "Node.js", "PostgreSQL", "Google Maps API"],
    highlights: [
      "Real-time flight tracking dashboard",
      "Integrated payment gateway and authentication",
      "Admin dashboard with reporting features",
    ],
  },
  {
    title: "Swadish World",
    subtitle: "E-Commerce Platform",
    description: "Full-featured e-commerce platform with product catalog, shopping cart, real-time inventory tracking, and payment integration.",
    icon: ShoppingCart,
    tech: ["MERN Stack", "Socket.io", "Payment APIs", "AWS"],
    highlights: [
      "Real-time stock tracking and alerts",
      "Multiple payment gateway integrations",
      "Live notifications using Socket.io",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm mb-2 block">04. Projects</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured Work
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="glass-hover rounded-xl p-6 md:p-8 group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer pointer-events-none" />
                
                {/* Header */}
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <project.icon className="h-6 w-6" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-300 relative z-10">
                  {project.title}
                </h3>
                <p className="text-sm text-primary font-mono mb-3 relative z-10">{project.subtitle}</p>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 relative z-10 group-hover:text-foreground/90 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6 relative z-10">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      <span className="text-primary group-hover:scale-110 inline-block transition-transform duration-300">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-secondary/80 text-muted-foreground hover:bg-primary/20 hover:text-primary border border-transparent hover:border-primary/30 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
