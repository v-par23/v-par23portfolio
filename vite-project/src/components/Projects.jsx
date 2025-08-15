import React, { useState } from 'react';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Protivity",
      description: "Decodes complex ingredient labels - Best AI Safety + Responsible hack at UofT",
      award: "Winner @ Clockhacks2",
      image: "/path-to-labellens-screenshot.jpg",
      technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
      details: {
        overview: "LabelLens is an AI-powered application that analyzes ingredient labels on products to provide safety assessments and detailed information about chemical components.",
        features: [
          "AI-powered ingredient analysis using Google Gemini",
          "Real-time safety assessment with color-coded risk levels",
          "Comprehensive ingredient database with detailed information",
          "Responsive web interface for mobile and desktop use"
        ],
        impact: "Won Best AI Safety + Responsible hack at UofT's GenAI Genesis 2025 hackathon, demonstrating innovation in consumer safety and AI ethics."
      }
    },
    {
      id: 2,
      title: "Visualizicar",
      description: "Predicts funding success and trends - 2nd place in runQL's category at canada's largest data hackathon by UWaterloo",
      image: "/path-to-investment-screenshot.jpg",
      technologies: ["Processing", "Java"],
      details: {
        overview: "A comprehensive investment analysis platform that predicts funding success and identifies investment trends using machine learning and data visualization.",
        features: [
          "Machine learning models for funding success prediction",
          "Interactive data visualizations with Plotly and Dash",
          "Geographic analysis of investment trends by location",
          "Sector-based investment insights and analytics"
        ],
        impact: "Achieved 2nd place in runQL's category at Canada's largest data hackathon by UWaterloo, showcasing advanced data science and business intelligence capabilities."
      }
    },
    {
      id: 3,
      title: "Sentilytics",
      description: "Detects and rewrites bias in emails - winner at WiE Hackathon 2024 by UWaterloo",
      image: "/path-to-bias-screenshot.jpg",
      technologies: ["Python", "Streamlit", "Hugging Face Transformers"],
      details: {
        overview: "An AI-powered tool that detects and helps rewrite biased language in emails, promoting inclusive and professional communication.",
        features: [
          "AI-powered bias detection in written text",
          "Real-time email analysis and suggestions",
          "Bias-free rewriting recommendations",
          "User-friendly web interface for easy access"
        ],
        impact: "Won the WiE Hackathon 2024 by UWaterloo, highlighting the importance of inclusive communication and AI for social good."
      }
    },
    {
      id: 4,
      title: "TrueNorth",
      description: "Real-time feedback on tone, clarity, and body language",
      image: "/path-to-pitch-screenshot.jpg",
      technologies: ["ReactJS", "TailwindCSS", "Framer Motion"],
      details: {
        overview: "A comprehensive presentation coaching platform that provides real-time feedback on tone, clarity, and body language during presentations.",
        features: [
          "Real-time video analysis using DeepFace",
          "Speech transcription and analysis with Whisper",
          "AI-powered feedback on presentation delivery",
          "Comprehensive coaching insights and recommendations"
        ],
        impact: "Helps users improve their presentation skills through AI-powered analysis and personalized feedback, making public speaking more accessible and effective."
      }
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleBackClick = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center px-4 py-16">
      <div className="container max-w-7xl mx-auto">
        
        {!selectedProject ? (
          // Overview View - Project Grid
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 shimmer-text">
                My Projects
              </h2>
              <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
                Here are some of the projects I've built, each showcasing different skills and technologies
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => handleProjectClick(project)}
                  className="cosmic-card bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 cursor-pointer group hover:scale-105 transition-all duration-300"
                >
                  {/* Top Indicator */}
                  <div className="flex justify-center mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full border border-white" />
                  </div>
                  
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                        {project.title}
                      </h3>
                      <svg className="w-5 h-5 text-foreground/60" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    {project.award && (
                      <span className="bg-red-600/20 text-red-400 text-xs px-3 py-1 rounded-full border border-red-500/30">
                        {project.award}
                      </span>
                    )}
                  </div>
                  
                  {/* Project Image Placeholder */}
                  <div className="w-full h-48 bg-background/40 rounded-lg mb-4 border border-primary/20 flex items-center justify-center">
                    <span className="text-foreground/40 text-sm">Project Screenshot</span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-foreground/80 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-md border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-foreground/60 text-xs text-center mt-4">
                    Click for more
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Detailed View - Single Project
          <div className="cosmic-card bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 max-w-5xl mx-auto">
            {/* Top Indicator */}
            <div className="flex justify-center mb-6">
              <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white" />
            </div>
            
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  {selectedProject.title}
                </h2>
                <svg className="w-6 h-6 text-foreground/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              {selectedProject.award && (
                <span className="bg-red-600/20 text-red-400 text-sm px-4 py-2 rounded-full border border-red-500/30 mb-4 inline-block">
                  {selectedProject.award}
                </span>
              )}
              <p className="text-foreground/80 text-lg max-w-3xl mx-auto">
                {selectedProject.description}
              </p>
            </div>
            
            {/* Project Image Placeholder */}
            <div className="w-full h-64 bg-background/40 rounded-lg mb-8 border border-primary/20 flex items-center justify-center">
              <span className="text-foreground/40 text-lg">Project Screenshot</span>
            </div>
            
            {/* Overview */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Overview</h3>
              <p className="text-foreground/90 leading-relaxed">
                {selectedProject.details.overview}
              </p>
            </div>
            
            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Key Features</h3>
              <div className="space-y-3">
                {selectedProject.details.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-foreground/90 leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Impact */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Impact & Recognition</h3>
              <p className="text-foreground/90 leading-relaxed">
                {selectedProject.details.impact}
              </p>
            </div>
            
            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-primary/10 text-primary px-3 py-2 rounded-lg border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Back Button */}
            <div className="text-center">
              <button
                onClick={handleBackClick}
                className="cosmic-button"
              >
                ← Back to Projects
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
