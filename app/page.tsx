import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Difference from "@/components/Difference";
import Regions from "@/components/Regions";
import KnowledgeMap from "@/components/KnowledgeMap";
import Demo from "@/components/Demo";
import Analysis from "@/components/Analysis";
import Journey from "@/components/Journey";
import Audience from "@/components/Audience";
import ArabicFirst from "@/components/ArabicFirst";
import ResponsibleAI from "@/components/ResponsibleAI";
import Roadmap from "@/components/Roadmap";
import Revenue from "@/components/Revenue";
import Glossary from "@/components/Glossary";
import Faq from "@/components/Faq";
import Partnership from "@/components/Partnership";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Difference />
        <Regions />
        <KnowledgeMap />
        <Demo />
        <Analysis />
        <Journey />
        <Audience />
        <ArabicFirst />
        <ResponsibleAI />
        <Roadmap />
        <Revenue />
        <Glossary />
        <Faq />
        <Partnership />
      </main>
      <Footer />
    </>
  );
}
