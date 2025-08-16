import React, { useState } from 'react';

export const Work = () => {
  const [selectedWork, setSelectedWork] = useState(null);

  const workExperiences = [
    {
      id: 1,
      company: "ESGTree",
      period: "July 2025-Present",
      overview: "Software Engineer Intern",
      details: {
        title: "Software Engineer Intern",
        achievements: [
          "Developed Retool dashboards via dynamic filters and data visualization, writing SQL queries for login analytics",
          "Automated MySQL database sync with Fivetran pipelines, managing connector configuration and integration",
          "Built data tables comparing company coverage rates and availability percentages with interactive filtering"
        ]
      }
    },
    {
      id: 2,
      company: "ESGTree",
      period: "July-September 2024",
      overview: "Software Engineer Intern",
      details: {
        title: "Software Engineer Intern",
        achievements: [
          "Developed a secure login API and integrated business logic into the web application's frontend",
          "Designed a MySQL data model and queries to handle backend data entries, improving performance by 26%",
          "Created CI/CD pipelines using GitLab to automate linting, testing, and deployment"
        ]
      }
    },
    {
      id: 3,
      company: "LoopX",
      period: "May-July 2024",
      overview: "Software Engineer Intern",
      details: {
        title: "Software Engineer Intern",
        achievements: [
          "Developed Python scripts to detect duplicate frames in 1M+ images, resulting in a 20% improvement in the efficiency of the Autonomous Operation System (AOS)",
          "Created dashboards and real-time reports using CVAT.ai and ROS, enhancing decision-making for operators",
          "Boosted AI performance by testing and optimizing models in ROS, accelerating base model speed by 1.5x"
        ]
      }
    }
  ];

  const handleWorkClick = (work) => {
    setSelectedWork(work);
  };

  const handleBackClick = () => {
    setSelectedWork(null);
  };

  return (
    <section id="work" className="relative min-h-screen flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-6xl mx-auto">
        

        {!selectedWork ? (
          // Overview View - Multiple Work Cards
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4 shimmer-text">
              My Work Experience
            </h2>
            <p className="text-foreground/80 text-lg max-w-2xl mx-auto whitespace-nowrap mb-12">
              My journey in the real-world, gaining hands-on experience and building impactful solutions
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {workExperiences.map((work) => (
                <div
                  key={work.id}
                  onClick={() => handleWorkClick(work)}
                  className="cosmic-card bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 cursor-pointer group hover:scale-105 transition-all duration-300"
                >
                  {/* Top Indicator */}
                  <div className="flex justify-center mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full border border-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="text-center space-y-3">
                    <h3 className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                      {work.company}
                    </h3>
                    <p className="text-foreground/80 text-sm">
                      {work.overview}
                    </p>
                    <p className="text-primary/90 text-sm font-medium">
                      {work.period}
                    </p>
                    <p className="text-foreground/60 text-xs">
                      Click for more
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Detailed View - Single Work Experience
          <div className="cosmic-card bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 max-w-4xl mx-auto">
            {/* Top Indicator */}
            <div className="flex justify-center mb-6">
              <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white" />
            </div>
            
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                {selectedWork.company}
              </h2>
              <h3 className="text-xl text-primary mb-2">
                {selectedWork.details.title}
              </h3>
              <p className="text-foreground/80">
                {selectedWork.period}
              </p>
            </div>
            
            {/* Achievements */}
            <div className="space-y-4 mb-8">
              {selectedWork.details.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground/90 leading-relaxed text-left">
                    {achievement.trim()}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Back Button */}
            <div className="text-center">
              <button
                onClick={handleBackClick}
                className="cosmic-button"
              >
                ← Back to Overview
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
