import { motion } from "framer-motion";
import { founders } from "../config/content";
import Button from "../components/Button";

export default function Founders() {
  return (
    <main className="min-h-screen bg-ink pt-28">
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-electric">
            Founders
          </p>
          <h1 className="font-display text-5xl font-black leading-tight text-white sm:text-7xl">
            Two operators. One cinematic growth engine.
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/65">
            Strategy and post-production sit in the same room here. That means
            each frame has a job, each hook has a reason, and each campaign has
            a rhythm built before the timeline opens.
          </p>
        </motion.div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        {founders.map((founder, index) => (
          <motion.section
            key={founder.name}
            className={`grid items-center gap-10 border-t border-white/10 py-16 lg:grid-cols-2 ${
              index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
            }`}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.24 }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-electric">
                {founder.role}
              </p>
              <h2 className="font-display text-4xl font-black text-white sm:text-5xl">
                {founder.name}
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/66">{founder.story}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {founder.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[.04] px-4 py-2 text-sm font-semibold text-white/70"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-electric/10 blur-2xl" />
              <img
                src={founder.image}
                alt={founder.name}
                loading="lazy"
                className="relative aspect-[4/5] w-full rounded-[2rem] border border-white/10 object-cover shadow-2xl"
              />
            </div>
          </motion.section>
        ))}
        <Button href="/#contact">Start a Project</Button>
      </div>
    </main>
  );
}
