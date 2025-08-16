import { useState, useEffect } from 'react';

export const ScrollOrb = () => {
    const [orbPosition, setOrbPosition] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let timeoutId;

        const updateOrbPosition = () => {
            // Calculate X position (right side of screen)
            const orbX = window.innerWidth * 0.93;
            
            // Get current scroll position
            const scrollY = window.scrollY;
            
            // Get total scrollable height (document height minus viewport height)
            const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            
            // Calculate scroll progress (0 = top, 1 = bottom)
            const scrollProgress = Math.min(scrollY / totalScrollHeight, 1);
            
            // Calculate orb Y position: map scroll progress to viewport height
            // Start at top (20px) and end at bottom (viewportHeight - 60px)
            const viewportHeight = window.innerHeight;
            const orbHeight = 60; // Approximate orb height
            const startY = 20; // Start 20px from top
            const endY = viewportHeight - orbHeight - 20; // End 20px from bottom
            
            // Map scroll progress to orb position
            const orbY = startY + (scrollProgress * (endY - startY));
            
            setOrbPosition({ x: orbX, y: orbY });
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
                    left: `${orbPosition.x}px`,
                    top: `${orbPosition.y}px`,
                    opacity: isVisible ? 1 : 0,
                    transform: 'translate(-50%, -50%)',
                    transition: 'opacity 0.3s ease',
                    pointerEvents: 'none',
                    zIndex: 1000
                }}
            />
        </>
    );
};
