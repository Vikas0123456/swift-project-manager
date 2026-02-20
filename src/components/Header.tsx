import { Button } from "@/components/ui/button";
import { Menu, X, ExternalLink } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const RESUME_URL = import.meta.env.VITE_RESUME_URL || "https://drive.google.com/file/d/1J6Nu1wSb9Dz57sQ8waYJ5IZTjTFwqg2j/view?usp=sharing";
const WHATSAPP_MSG = "Hi Vikas! I came across your portfolio website and would like to connect with you.";
const WHATSAPP_URL = `https://wa.me/917067059611?text=${encodeURIComponent(WHATSAPP_MSG)}`;
import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const headerOffset = 150; // Offset for header + some margin
      const scrollPosition = window.scrollY;

      // Check if we're at the top (Hero section)
      if (scrollPosition < 100) {
        setActiveSection("");
        return;
      }

      let currentSection = "";
      let maxVisibleRatio = 0;

      // Find which section is most visible in viewport
      navLinks.forEach((link) => {
        const element = document.getElementById(link.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = scrollPosition + rect.top;
          const elementBottom = elementTop + rect.height;
          
          // Check if section top has passed the header offset
          if (elementTop <= scrollPosition + headerOffset) {
            // Calculate how much of section is visible in viewport
            const viewportTop = scrollPosition;
            const viewportBottom = scrollPosition + window.innerHeight;
            
            const visibleTop = Math.max(elementTop, viewportTop);
            const visibleBottom = Math.min(elementBottom, viewportBottom);
            const visibleHeight = Math.max(0, visibleBottom - visibleTop);
            const sectionHeight = rect.height;
            const visibleRatio = sectionHeight > 0 ? visibleHeight / sectionHeight : 0;
            
            // Select section with highest visibility that has passed header
            if (visibleRatio > maxVisibleRatio || (visibleRatio > 0.1 && !currentSection)) {
              maxVisibleRatio = visibleRatio;
              currentSection = link.id;
            }
          }
        }
      });

      // If no section found with visibility, find closest section to viewport top
      if (!currentSection) {
        let closestDistance = Infinity;
        navLinks.forEach((link) => {
          const element = document.getElementById(link.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            const elementTop = scrollPosition + rect.top;
            const distance = Math.abs(elementTop - (scrollPosition + headerOffset));
            
            if (distance < closestDistance && elementTop <= scrollPosition + headerOffset + 200) {
              closestDistance = distance;
              currentSection = link.id;
            }
          }
        });
      }

      setActiveSection(currentSection);
    };

    // Also handle hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash && navLinks.some(link => link.id === hash)) {
        setTimeout(() => {
          setActiveSection(hash);
        }, 100);
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", handleHashChange);
    
    // Initial check
    handleScroll();
    handleHashChange();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="text-xl font-bold text-gradient">
            VT
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm relative group transition-colors duration-300 ${
                    isActive 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`} 
                  />
                </a>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Resume
              </a>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-4 w-4" />
                Get in Touch
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`transition-colors duration-300 py-2 ${
                      isActive 
                        ? "text-primary font-medium" 
                        : "text-muted-foreground hover:text-primary"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                );
              })}
              <Button variant="hero" size="sm" className="mt-2" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="h-4 w-4" />
                  Get in Touch
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
