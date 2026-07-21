import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Definition from "@/components/Definition";
import HowItWorks from "@/components/HowItWorks";
import Demo from "@/components/Demo";
import Outputs from "@/components/Outputs";
import Audience from "@/components/Audience";
import ArabicFirst from "@/components/ArabicFirst";
import ResponsibleAI from "@/components/ResponsibleAI";
import Impact from "@/components/Impact";
import Roadmap from "@/components/Roadmap";
import Partnership from "@/components/Partnership";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Definition />
        <HowItWorks />
        <Demo />
        <Outputs />
        <Audience />
        <ArabicFirst />
        <ResponsibleAI />
        <Impact />
        <Roadmap />
        <Partnership />
      </main>
      <Footer />
    </>
  );
}
