import {StarBackground} from "../components/StarBackground.jsx";
import {Navbar} from "../components/Navbar.jsx";
import {HeroSection} from "../components/HeroSection.jsx";
import {About} from "../components/About.jsx";
import {Work} from "../components/Work.jsx";

export const Home = () => {
    return (
    <div className = "min-h-screen bg-background text-foreground overflow-x-hidden"> 

        {/* Effects for Background */}
        <StarBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>

        <HeroSection />

        {/* About Section */}
        <About />

        {/* Work Section */}
        <Work />

        {/* Projects Section */}
        <section className="min-h-screen flex items-center justify-center border-b border-gray-800">
            <div className="text-center max-w-4xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-white mb-6 shimmer-text">
                    Projects
                </h2>
                
                {/* Sample Project Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {Array.from({ length: 3 }, (_, index) => (
                        <div key={index} className="cosmic-card bg-gray-800/50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-3">
                                Project {index + 1}
                            </h3>
                            <p className="text-gray-300">
                                This is a sample project card. Hover over it to see the cosmic effect!
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center border-b border-gray-800">
            <div className="text-center max-w-4xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-white mb-6 shimmer-text">
                    Contact
                </h2>
                <div className="cosmic-button mt-8">
                    Get In Touch
                </div>
            </div>
        </section>

        </main>
        
        </div>
    );
};
