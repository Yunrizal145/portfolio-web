import { useEffect, type ReactNode } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

type Props = {
  id: string;
  children: ReactNode;
  onReveal?: () => void;
};

/**
 * Bungkus konten section supaya fade-up otomatis saat masuk viewport.
 * onReveal opsional dipakai misalnya untuk memicu animasi skill bar.
 */
export default function RevealSection({ id, children, onReveal }: Props) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  useEffect(() => {
    if (isVisible && onReveal) onReveal();
  }, [isVisible, onReveal]);

  return (
    <section id={id} ref={ref} className={`reveal ${isVisible ? "in" : ""}`}>
      {children}
    </section>
  );
}
