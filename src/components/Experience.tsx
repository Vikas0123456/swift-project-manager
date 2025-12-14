import { Calendar, MapPin } from "lucide-react";

const achievements = [
  "Architected and delivered 7+ scalable web applications using MERN stack with CI/CD pipelines and cloud infrastructure",
  "Optimized database queries across PostgreSQL, MongoDB, MySQL, and MS SQL, improving query performance by 40%",
  "Designed RESTful APIs with Swagger documentation enabling seamless third-party integrations",
  "Deployed applications on AWS (EC2, S3, RDS) achieving 99.9% uptime and high scalability",
  "Implemented microservices architecture improving system maintainability and reducing deployment time by 60%",
  "Integrated Generative AI capabilities and payment gateways, analytics, and communication services",
  "Built real-time features using WebSockets for live updates and collaborative functionalities",
  "Mentored junior developers on best practices, coding standards, and architectural patterns",
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <span className="text-primary font-mono text-sm mb-2 block">03. Experience</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Work History
            </h2>
          </div>

          {/* Experience Card */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-border" />

            <div className="glass rounded-xl p-6 md:p-8 ml-6 md:ml-12 relative">
              {/* Timeline Dot */}
              <div className="absolute left-[-30px] md:left-[-38px] top-8 w-4 h-4 rounded-full bg-primary border-4 border-background glow" />

              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">Full Stack Developer</h3>
                  <p className="text-primary font-medium mt-1">MicroTechnologies India</p>
                </div>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>August 2022 — Present</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Bhopal, MP, India</span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="mt-12 relative">
            <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-border" />
            
            <div className="glass rounded-xl p-6 md:p-8 ml-6 md:ml-12 relative">
              <div className="absolute left-[-30px] md:left-[-38px] top-8 w-4 h-4 rounded-full bg-secondary border-4 border-background" />
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold">B.Tech in Electrical & Electronics Engineering</h3>
                  <p className="text-muted-foreground mt-1">University Institute of Technology, RGPV</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>2018 — 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
