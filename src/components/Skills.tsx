const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "Microservices"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "MS SQL Server"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, RDS)", "Docker", "CI/CD Pipelines"],
  },
  {
    title: "Specialized",
    skills: ["Generative AI", "WebSockets", "Real-time Data", "API Integration"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm mb-2 block">02. Skills</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Technical Expertise
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-semibold text-lg mb-4 text-primary group-hover:text-foreground transition-colors">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-secondary text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tools Row */}
          <div className="mt-12 glass rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-4 text-center">Tools & Platforms</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Git", "Jira", "Swagger", "Figma", "Postman", "VS Code"].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-lg border border-border bg-background/50 text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all duration-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
