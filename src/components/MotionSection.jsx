import { motion } from "framer-motion";

export default function MotionSection({ id, eyebrow, title, children, className = "" }) {
  return (
    <motion.section
      id={id}
      className={`relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 ${className}`}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {(eyebrow || title) && (
        <div className="mb-10 max-w-3xl">
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-electric">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="font-display text-3xl font-black leading-tight text-white sm:text-5xl">
              {title}
            </h2>
          )}
        </div>
      )}
      {children}
    </motion.section>
  );
}
