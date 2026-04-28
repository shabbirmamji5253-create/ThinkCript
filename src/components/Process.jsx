import { motion } from "framer-motion";
import { processSteps } from "../config/content";
import MotionSection from "./MotionSection";

export default function Process() {
  return (
    <MotionSection id="process" eyebrow="How we work" title="A focused flow from strategy to shipped creative.">
      <div className="relative">
        <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-electric via-white/15 to-transparent md:block" />
        <div className="grid gap-5">
          {processSteps.map(({ icon: Icon, title, text }, index) => (
            <motion.div
              key={title}
              className="grid gap-5 rounded-3xl border border-white/10 bg-white/[.035] p-5 md:grid-cols-[4rem_1fr] md:items-center"
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl border border-electric/40 bg-electric/10 text-electric shadow-glow">
                <Icon size={24} />
              </div>
              <div className="grid gap-2 md:grid-cols-[.35fr_1fr] md:items-center">
                <h3 className="font-display text-2xl font-bold text-white">
                  {String(index + 1).padStart(2, "0")} / {title}
                </h3>
                <p className="text-sm leading-7 text-white/62">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
