export const HeroSection = () => {
    return (
        <section 
            id="hero" 
            className="relative min-h-screen flex items-center justify-center px-4"
        >
            <div className="w-full max-w-4xl mx-auto text-center">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-light">
                        <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> 
                            {" "}
                            Vedant
                        </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> 
                            {" "}
                            Parikh
                        </span>
                    </h1>
                    <p className="text-xl md:text-xl text-foreground/80 max-w-full lg:whitespace-nowrap opacity-0 animate-fade-in-delay-3">
                        software engineer, open-source contributor, and sport enthusiast | Systems Design Engineering at UWaterloo.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#contact" className="cosmic-button">
                            Contact Me
                        </a>
                    </div>
                </div>    
            </div>
        </section>
    )
}
