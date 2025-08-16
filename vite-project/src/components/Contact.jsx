import React from 'react';

export const Contact = () => {
  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 shimmer-text">
            Contact Me!
          </h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto whitespace-nowrap">
            Let's connect! Feel free to reach out through any of these platforms
          </p>
        </div>
        
        {/* Contact Icons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 mb-12">
          {/* GitHub */}
          <a 
            href="https://github.com/v-par23" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-background/60 border-2 border-primary/20 flex items-center justify-center hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 group-hover:scale-110">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-foreground group-hover:text-primary transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <p className="text-center mt-3 text-foreground/80 font-medium text-sm sm:text-base">GitHub</p>
          </a>
          
          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/vedant-parikh-4418981a4/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-background/60 border-2 border-primary/20 flex items-center justify-center hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 group-hover:scale-110">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-foreground group-hover:text-primary transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <p className="text-center mt-3 text-foreground/80 font-medium text-sm sm:text-base">LinkedIn</p>
          </a>
          
          {/* Email */}
          <a 
            href="mailto:vsparikh@uwaterloo.ca" 
            className="group flex flex-col items-center"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-background/60 border-2 border-primary/20 flex items-center justify-center hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 group-hover:scale-110">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-foreground group-hover:text-primary transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-center mt-3 text-foreground/80 font-medium text-sm sm:text-base">Email</p>
          </a>
        </div>
        
        {/* Additional Contact Info */}
        <div className="text-center mt-4">
          <div className="cosmic-card bg-card/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
              Let's Work Together!
            </h3>
            <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-6">
              I'm always open to discussing new opportunities, collaborations, or just having a great conversation about technology and innovation.
            </p>
            <p className="text-primary text-base md:text-lg font-medium">
              Looking forward to hearing from you! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
