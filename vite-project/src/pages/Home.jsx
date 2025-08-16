import {StarBackground} from "../components/StarBackground.jsx";
import {Navbar} from "../components/Navbar.jsx";
import {HeroSection} from "../components/HeroSection.jsx";
import {About} from "../components/About.jsx";
import {Work} from "../components/Work.jsx";
import {Projects} from "../components/Projects.jsx";
import {Contact} from "../components/Contact.jsx";
import {ScrollOrb} from "../components/ScrollOrb.jsx";

export const Home = () => {
    return (
    <div className = "min-h-screen bg-background text-foreground overflow-x-hidden"> 

        {/* Effects for Background */}
        <StarBackground />

        {/* Scroll Orb */}
        <ScrollOrb />

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
        <Contact />

        </main>
        
        </div>
    );
};
