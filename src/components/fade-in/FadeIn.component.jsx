import { useEffect, useRef, useState } from "react";
import './FadeIn.style.scss'

const FadeIn = ({children}) => {
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef();
    useEffect(() => {
      const ref = domRef.current
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(ref);
      return () => observer.unobserve(ref);
    }, []);
    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {children}
      </div>
    );
  }

  export default FadeIn