import { useEffect, useRef } from "react";

/**
 * Cursor kustom: titik solid + lingkaran glow ungu yang mengikuti mouse.
 * Otomatis nonaktif di layar sentuh / lebar < 900px lewat CSS (lihat App.css).
 */
export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      <div ref={glowRef} id="cursor-glow" aria-hidden="true" />
      <div ref={dotRef} id="cursor-dot" aria-hidden="true" />
    </>
  );
}
