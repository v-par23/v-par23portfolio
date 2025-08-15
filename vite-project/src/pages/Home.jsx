import {StarBackground} from "../components/StarBackground.jsx";
import {Navbar} from "../components/Navbar.jsx";
import {HeroSection} from "../components/HeroSection.jsx";
import {About} from "../components/About.jsx";
import {Work} from "../components/Work.jsx";
import {Projects} from "../components/Projects.jsx";

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
        <Projects />

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
