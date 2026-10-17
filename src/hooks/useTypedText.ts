import { useEffect, useRef, useState } from "react";

/**
 * Mengetik & menghapus daftar kalimat secara bergantian, ala terminal.
 * Menghormati prefers-reduced-motion: kalau aktif, langsung tampilkan
 * kalimat pertama tanpa animasi.
 */
export function useTypedText(phrases: string[]) {
  const [text, setText] = useState("");
  const indexRef = useRef(0); // index kalimat saat ini
  const charRef = useRef(0); // posisi karakter saat ini
  const deletingRef = useRef(false);

  useEffect(() => {
    if (phrases.length === 0) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setText(phrases[0]);
      return;
    }

    let timeoutId: number;

    const tick = () => {
      const current = phrases[indexRef.current];

      if (!deletingRef.current) {
        charRef.current += 1;
        setText(current.slice(0, charRef.current));
        if (charRef.current === current.length) {
          deletingRef.current = true;
          timeoutId = window.setTimeout(tick, 1400);
          return;
        }
      } else {
        charRef.current -= 1;
        setText(current.slice(0, charRef.current));
        if (charRef.current === 0) {
          deletingRef.current = false;
          indexRef.current = (indexRef.current + 1) % phrases.length;
        }
      }

      timeoutId = window.setTimeout(tick, deletingRef.current ? 40 : 80);
    };

    timeoutId = window.setTimeout(tick, 80);
    return () => window.clearTimeout(timeoutId);
  }, [phrases]);

  return text;
}
