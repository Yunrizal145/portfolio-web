import { useEffect, useRef, useState } from "react";

/**
 * Mengembalikan sebuah ref untuk dipasang ke elemen section, dan boolean
 * `isVisible` yang menjadi true begitu elemen tersebut masuk viewport.
 * Dipakai untuk animasi fade-up saat discroll.
 */
export function useScrollReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
