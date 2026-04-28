import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";
import { projects } from "../config/content";
import MediaRenderer from "./MediaRenderer";
import Modal from "./Modal";
import MotionSection from "./MotionSection";

export default function WorkGrid() {
  const [selected, setSelected] = useState(null);

  return (
    <MotionSection id="work" eyebrow="Our work" title="Campaigns built for velocity, clarity, and visual punch.">
      <div className="grid auto-rows-[260px] gap-5 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, index) => (
          <motion.button
            type="button"
            key={project.title}
            onClick={() => setSelected(project)}
            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[.035] text-left shadow-2xl ${
              index === 0 || index === 3 ? "lg:col-span-2 lg:row-span-2" : ""
            }`}
            whileHover={{ y: -7 }}
            transition={{ type: "spring", stiffness: 250, damping: 24 }}
          >
            <MediaRenderer
              item={project}
              className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-110 group-hover:opacity-100"
              autoPlay={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent opacity-95" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-electric">
                {project.category}
              </p>
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-2xl font-bold text-white">{project.title}</h3>
                {project.type === "video" && (
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-electric text-black shadow-glow">
                    <Play size={18} fill="currentColor" />
                  </span>
                )}
              </div>
            </div>
          </motion.button>
        ))}
      </div>
      <Modal item={selected} onClose={() => setSelected(null)} />
    </MotionSection>
  );
}
