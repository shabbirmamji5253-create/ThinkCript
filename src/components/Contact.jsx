import { Instagram, Mail, MessageCircle } from "lucide-react";
import { site } from "../config/content";
import Button from "./Button";
import MotionSection from "./MotionSection";

export default function Contact() {
  return (
    <MotionSection id="contact" eyebrow="Contact" title="Let's build something with momentum.">
      <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[.035] p-6">
          <p className="text-lg leading-8 text-white/68">
            Tell us what you are launching, where your content is stuck, or what
            kind of edit system you want to build. We will reply with the next
            best move.
          </p>
          <div className="mt-8 grid gap-3">
            <a
              href={site.socials.whatsapp}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.04] px-4 py-3 text-white/75 transition hover:border-electric hover:text-electric"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a
              href={site.socials.instagram}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.04] px-4 py-3 text-white/75 transition hover:border-electric hover:text-electric"
            >
              <Instagram size={18} /> Instagram
            </a>
            <a
              href={site.socials.email}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.04] px-4 py-3 text-white/75 transition hover:border-electric hover:text-electric"
            >
              <Mail size={18} /> Email
            </a>
          </div>
        </div>

        <form
          className="rounded-3xl border border-electric/25 bg-[#071014]/80 p-6 shadow-glow backdrop-blur"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-white/70">
              Name
              <input
                className="min-h-12 rounded-2xl border border-white/10 bg-black/45 px-4 text-white outline-none transition placeholder:text-white/25 focus:border-electric"
                placeholder="Your name"
                name="name"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-white/70">
              Email
              <input
                className="min-h-12 rounded-2xl border border-white/10 bg-black/45 px-4 text-white outline-none transition placeholder:text-white/25 focus:border-electric"
                placeholder="you@brand.com"
                type="email"
                name="email"
              />
            </label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-semibold text-white/70">
            Message
            <textarea
              className="min-h-44 rounded-2xl border border-white/10 bg-black/45 p-4 text-white outline-none transition placeholder:text-white/25 focus:border-electric"
              placeholder="Tell us about the campaign, content goals, timeline, and scope."
              name="message"
            />
          </label>
          <Button href="mailto:cutxstudio53@gmail.com" className="mt-6">
            Let's Build Something
          </Button>
        </form>
      </div>
    </MotionSection>
  );
}
