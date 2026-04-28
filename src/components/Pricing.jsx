import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { useState } from "react";
import { plans } from "../config/content";
import Button from "./Button";
import MotionSection from "./MotionSection";

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");

  return (
    <MotionSection id="plans" eyebrow="Our plans" title="Flexible creative firepower for every growth stage.">
      <div className="mb-8 inline-flex rounded-2xl border border-white/10 bg-white/[.04] p-1">
        {[
          ["monthly", "Offers"],
        ].map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => setBilling(key)}
            className={`rounded-xl px-4 py-2 text-sm font-bold transition ${
              billing === key ? "bg-electric text-black shadow-glow" : "text-white/60 hover:text-white"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {plans.map((plan) => (
          <motion.article
            key={plan.name}
            className={`relative rounded-3xl border p-6 ${
              plan.recommended
                ? "border-electric/70 bg-electric/[.08] shadow-glow-strong"
                : "border-white/10 bg-white/[.035]"
            }`}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
          >
            {plan.recommended && (
              <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-electric px-3 py-1 text-xs font-black uppercase tracking-wide text-black">
                <Sparkles size={13} />
                Recommended
              </span>
            )}
            <h3 className="font-display text-2xl font-bold text-white">{plan.name}</h3>
            <p className="mt-3 min-h-16 text-sm leading-6 text-white/60">{plan.description}</p>
            <p className="mt-6 font-display text-4xl font-black text-white">
              {billing === "monthly" ? plan.monthly : plan.project}
            </p>
            <ul className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-white/72">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-electric/15 text-electric">
                    <Check size={14} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <Button href="#contact" className="mt-8 w-full" variant={plan.recommended ? "primary" : "secondary"}>
              Choose Plan
            </Button>
          </motion.article>
        ))}
      </div>
    </MotionSection>
  );
}
