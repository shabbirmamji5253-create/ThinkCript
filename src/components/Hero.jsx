import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { founders, heroBadges, stats } from "../config/content";
import Button from "./Button";

function ParticleField() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(22)].map((_, index) => (
        <motion.span
          key={index}
          className="absolute h-1 w-1 rounded-full bg-electric/70 shadow-glow"
          style={{
            left: `${(index * 37) % 100}%`,
            top: `${(index * 23) % 100}%`,
          }}
          animate={{
            y: [0, -36, 0],
            opacity: [0.18, 0.9, 0.18],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 4 + (index % 5),
            repeat: Infinity,
            delay: index * 0.13,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-radial-grid pt-24">
      <ParticleField />
      <motion.div
        className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-electric/10 blur-3xl"
        animate={{ scale: [1, 1.25, 1], opacity: [0.45, 0.8, 0.45] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 flex flex-wrap gap-3">
            {heroBadges.map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/70 backdrop-blur"
              >
                <Icon size={14} className="text-electric" />
                {text}
              </span>
            ))}
          </div>
          <h1 className="font-display text-5xl font-black leading-[0.95] text-white sm:text-7xl lg:text-8xl">
            Marketing that moves. Edits that sell.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
            We craft cinematic campaigns, scroll-stopping social systems, and
            premium assets for brands ready to look impossible to ignore.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#work">View Work</Button>
            <Button href="#contact" variant="secondary">
              Start Project
            </Button>
          </div>
          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l border-electric/40 pl-4">
                <p className="font-display text-2xl font-black text-white sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wide text-white/45">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -inset-5 rounded-[2rem] border border-electric/25 bg-electric/5 blur-xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-white/[.045] p-4 shadow-2xl backdrop-blur-xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {founders.map((founder, index) => (
                <motion.div
                  key={founder.name}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-black/35"
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                >
                  <img
                    src={founder.image}
                    alt={founder.name}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="h-72 w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="p-5">
                    <h3 className="font-display text-xl font-bold text-white">{founder.name}</h3>
                    <p className="mt-1 text-sm text-electric">{founder.role}</p>
                    <p className="mt-3 text-sm leading-6 text-white/60">{founder.short}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <Link
              to="/founders"
              className="mt-4 flex min-h-12 items-center justify-center rounded-2xl border border-electric/40 bg-electric/10 px-5 text-sm font-bold text-white transition hover:bg-electric hover:text-black"
            >
              Meet the Founders
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
