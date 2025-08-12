import {useState, useEffect} from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration


export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);
    const [cosmicDust, setCosmicDust] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();
        generateCosmicDust();

        const handleResize = () => {
            generateStars();
            generateMeteors();
            generateCosmicDust();
        }

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
        }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000
        );

        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
                color: Math.random() > 0.7 ? 'rgba(120, 219, 255, 0.8)' : 'rgba(255, 255, 255, 0.8)',
            });
        }  
        
        setStars(newStars);
    };

    const generateMeteors = () => {
        const numberOfMeteors = 4;
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            });
        }  
        
        setMeteors(newMeteors);
    };

    const generateCosmicDust = () => {
        const numberOfDust = Math.floor(window.innerWidth * window.innerHeight / 15000);
        const newDust = [];

        for (let i = 0; i < numberOfDust; i++) {
            newDust.push({
                id: i,
                size: Math.random() * 2 + 0.5,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.3 + 0.1,
                animationDuration: Math.random() * 20 + 10,
                color: Math.random() > 0.5 ? 'rgba(120, 119, 198, 0.4)' : 'rgba(255, 119, 198, 0.4)',
            });
        }

        setCosmicDust(newDust);
    };

    return (
        <div className="fixed inset-8 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                        position: "absolute",
                        backgroundColor: star.color,
                        boxShadow: `0 0 ${star.size * 2}px ${star.color}`,
                    }}
                />
            ))}

            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        width: meteor.size * 60 + "px",
                        height: meteor.size * 2 + "px",
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        animationDelay: meteor.opacity,
                        animationDuration: meteor.animationDuration + "s",
                        position: "absolute",
                        background: `linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(120,219,255,0.6) 50%, transparent 100%)`,
                        boxShadow: `0 0 ${meteor.size * 10}px rgba(120,219,255,0.5)`,
                    }}
                />
            ))}

            {cosmicDust.map((dust) => (
                <div
                    key={dust.id}
                    className="animate-cosmic-drift"
                    style={{
                        width: dust.size + "px",
                        height: dust.size + "px",
                        left: dust.x + "%",
                        top: dust.y + "%",
                        opacity: dust.opacity,
                        animationDuration: dust.animationDuration + "s",
                        position: "absolute",
                        backgroundColor: dust.color,
                        borderRadius: "50%",
                        filter: "blur(0.5px)",
                    }}
                />
            ))}
        </div>
    );
};
