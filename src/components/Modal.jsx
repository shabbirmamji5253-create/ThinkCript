import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import MediaRenderer from "./MediaRenderer";

export default function Modal({ item, onClose }) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#080c0f] shadow-2xl"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.35 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-electric">
                  {item.category || item.type}
                </p>
                <h3 className="font-display text-2xl font-bold text-white">{item.title}</h3>
              </div>
              <button
                type="button"
                aria-label="Close modal"
                onClick={onClose}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-electric hover:text-electric"
              >
                <X size={18} />
              </button>
            </div>
            <div className="grid gap-0 lg:grid-cols-[1.45fr_.75fr]">
              <div className="bg-black">
                <MediaRenderer
                  item={item}
                  className="aspect-video h-full w-full object-cover"
                  controls={item.type === "video"}
                  autoPlay={item.type === "video"}
                />
              </div>
              <div className="space-y-5 p-5">
                <p className="text-sm leading-7 text-white/70">{item.description}</p>
                {item.gallery?.length > 0 && (
                  <div className="grid grid-cols-2 gap-3">
                    {item.gallery.map((image) => (
                      <img
                        key={image}
                        src={image}
                        alt={`${item.title} gallery frame`}
                        loading="lazy"
                        className="aspect-square rounded-2xl object-cover"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
