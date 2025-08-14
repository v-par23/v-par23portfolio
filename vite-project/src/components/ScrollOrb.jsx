import { useState, useEffect } from 'react';

export const ScrollOrb = () => {
    const [orbPosition, setOrbPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let timeoutId;

        const handleScroll = () => {
            setIsVisible(true);
            
            // Clear previous timeout
            if (timeoutId) clearTimeout(timeoutId);
            
            // Hide orb after scrolling stops
            timeoutId = setTimeout(() => {
                setIsVisible(false);
            }, 1000);

            // Calculate orb position based on scroll
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            
            // Orb follows scroll with a slight delay and offset
            const orbY = Math.min(scrollY + windowHeight * 0.3, documentHeight - windowHeight);
            const orbX = window.innerWidth * 0.1; // Keep orb on the left side
            
            setOrbPosition({ x: orbX, y: orbY });
        };

        // Add event listeners
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    return (
        <>
            {/* Dark Orb that follows scroll */}
            <div 
                className="scroll-orb"
                style={{
                    left: `${orbPosition.x}px`,
                    top: `${orbPosition.y}px`,
                    opacity: isVisible ? 1 : 0,
                    transform: `translate(-50%, -50%) scale(${isVisible ? 1 : 0.5})`
                }}
            />
        </>
    );
};
