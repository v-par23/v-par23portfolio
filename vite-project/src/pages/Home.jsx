import {ThemeToggle} from "../components/ThemeToggle.jsx";
import {StarBackground} from "../components/StarBackground.jsx";
import {Navbar} from "../components/Navbar.jsx";
import {HeroSection} from "../components/HeroSection.jsx";

export const Home = () => {
    return (
    <div className = "min-h-screen bg-background text-foreground overflow-x-hidden"> 
        
        {/* Theme Toggle */}  
        <ThemeToggle />

        {/* Effects for Background */}
        <StarBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>

        <HeroSection />

        </main>

        {/* Footer */}
        
        </div>
    );
};
