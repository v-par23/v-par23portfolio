import {ThemeToggle} from "../components/ThemeToggle.jsx";
import {StarBackground} from "../components/StarBackground.jsx";

export const Home = () => {
    return (
    <div className = "min-h-screen bg-background text-foreground overflow-x-hidden"> 
        
        {/* Theme Toggle */}  
        <ThemeToggle />

        {/* Effects for Background */}
        <StarBackground />

        {/* Navbar */}

        {/* Main Content */}

        {/* Footer */}
        
        </div>
    );
};
