import { useEffect, useRef, useState } from 'react';

interface UseSmoothScrollOptions {
  sectionSelector: string;
  transitionDuration?: number;
}

export const useSmoothScroll = ({ sectionSelector, transitionDuration = 800 }: UseSmoothScrollOptions) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = container.querySelectorAll(sectionSelector);
    if (sections.length === 0) return;

    const scrollToSection = (index: number) => {
      if (index < 0 || index >= sections.length || isScrolling.current) return;
      
      isScrolling.current = true;
      setCurrentSection(index);
      
      const target = sections[index] as HTMLElement;
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      setTimeout(() => {
        isScrolling.current = false;
      }, transitionDuration);
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isScrolling.current) return;
      
      if (e.deltaY > 0) {
        // Scroll down
        scrollToSection(currentSection + 1);
      } else if (e.deltaY < 0) {
        // Scroll up
        scrollToSection(currentSection - 1);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling.current) return;
      
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY.current - touchEndY;
      
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          scrollToSection(currentSection + 1);
        } else {
          scrollToSection(currentSection - 1);
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling.current) return;
      
      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          scrollToSection(currentSection + 1);
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          scrollToSection(currentSection - 1);
          break;
        case 'Home':
          e.preventDefault();
          scrollToSection(0);
          break;
        case 'End':
          e.preventDefault();
          scrollToSection(sections.length - 1);
          break;
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection, sectionSelector, transitionDuration]);

  return { containerRef, currentSection, setCurrentSection };
};
