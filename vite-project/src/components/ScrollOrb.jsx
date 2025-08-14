import { useState, useEffect } from 'react';

export const ScrollOrb = () => {
    const [orbPosition, setOrbPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let timeoutId;

        const updateOrbPosition = () => {
            // Always position orb on the right side
            const orbX = window.innerWidth * 0.96;
            
            // Calculate Y position based on current scroll
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const orbY = scrollY + (windowHeight * 0.2);
            
            setOrbPosition({ x: orbX, y: orbY });
        };

        const handleScroll = () => {
            setIsVisible(true);
            
            // Clear previous timeout
            if (timeoutId) clearTimeout(timeoutId);
            
            // Hide orb after scrolling stops
            timeoutId = setTimeout(() => {
                setIsVisible(false);
            }, 1000);

            // Update orb position
            updateOrbPosition();
        };

        // Set initial position and add event listeners
        updateOrbPosition();
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', updateOrbPosition);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateOrbPosition);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    return (
        <>
            {/* Dark Orb that follows scroll */}
            <div 
                className="scroll-orb"
                style={{
                    right: '1%',
                    top: `${orbPosition.y}px`,
                    opacity: isVisible ? 1 : 0,
                    transform: `translateY(-50%) scale(${isVisible ? 1 : 0.8})`,
                    transition: 'opacity 0.3s ease, transform 0.3s ease'
                }}
            />
        </>
    );
};
