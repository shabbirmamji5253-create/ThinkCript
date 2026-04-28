import BehindScenes from "../components/BehindScenes";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Process from "../components/Process";
import WorkGrid from "../components/WorkGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkGrid />
      <Pricing />
      <Process />
      <BehindScenes />
      <Contact />
    </>
  );
}
