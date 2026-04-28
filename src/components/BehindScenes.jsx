import { useState } from "react";
import { behindScenes } from "../config/content";
import MediaRenderer from "./MediaRenderer";
import Modal from "./Modal";
import MotionSection from "./MotionSection";

export default function BehindScenes() {
  const [selected, setSelected] = useState(null);

  return (
    <MotionSection
      id="behind-scenes"
      eyebrow="Behind the scenes"
      title="Raw frames, timelines, notes, and the useful mess behind polished motion."
    >
      <div className="flex snap-x gap-5 overflow-x-auto pb-4">
        {behindScenes.map((item) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setSelected({ ...item, description: "A production snapshot from the studio floor." })}
            className="group relative min-w-[78%] snap-center overflow-hidden rounded-3xl border border-white/10 bg-white/[.035] sm:min-w-[420px]"
          >
            <MediaRenderer
              item={item}
              className="aspect-[4/5] w-full object-cover opacity-80 transition duration-700 group-hover:scale-110 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <h3 className="absolute bottom-5 left-5 font-display text-2xl font-bold text-white">
              {item.title}
            </h3>
          </button>
        ))}
      </div>
      <Modal item={selected} onClose={() => setSelected(null)} />
    </MotionSection>
  );
}
