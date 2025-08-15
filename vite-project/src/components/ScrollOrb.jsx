import { useState, useEffect } from 'react';

export const ScrollOrb = () => {
    const [orbPosition, setOrbPosition] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let timeoutId;

        const updateOrbPosition = () => {
            // Get current scroll position
            const scrollY = window.scrollY;
            
            // Get total scrollable height (document height minus viewport height)
            const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            
            // Calculate orb position as percentage of scroll progress
            // This ensures orb only reaches bottom when at the very end
            const scrollProgress = Math.min(scrollY / totalScrollHeight, 1);
            
            // Calculate orb Y position: start at top (0) and move to bottom (100vh - orb height)
            const viewportHeight = window.innerHeight;
            const orbHeight = 60; // Approximate orb height
            const maxOrbY = viewportHeight - orbHeight;
            
            // Map scroll progress to orb position
            const orbY = scrollProgress * maxOrbY;
            
            setOrbPosition(orbY);
        };

        const handleScroll = () => {
            setIsVisible(true);
            
            // Clear previous timeout
            if (timeoutId) clearTimeout(timeoutId);
            
            // Update orb position
            updateOrbPosition();
            
            // Hide orb after scrolling stops
            timeoutId = setTimeout(() => {
                setIsVisible(false);
            }, 1000);
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
                    position: 'fixed',
                    right: '2%',
                    top: `${orbPosition}px`,
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 0.3s ease, top 0.1s ease',
                    pointerEvents: 'none',
                    zIndex: 1000
                }}
            />
        </>
    );
};
