import { ArrowRight } from "lucide-react";

export default function Button({ href, children, variant = "primary", className = "", icon = true }) {
  const base =
    "group inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition duration-300";
  const styles =
    variant === "primary"
      ? "bg-electric text-black shadow-glow hover:-translate-y-0.5 hover:shadow-glow-strong"
      : "border border-white/15 bg-white/5 text-white backdrop-blur hover:border-electric/60 hover:bg-electric/10";

  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      <span>{children}</span>
      {icon && <ArrowRight size={16} className="transition group-hover:translate-x-1" />}
    </a>
  );
}
