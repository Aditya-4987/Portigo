import Hero from "@/components/marketing/Hero";
import Steps from "@/components/marketing/Steps";
import Templates from "@/components/marketing/Templates";
import Why from "@/components/marketing/Why";
import Showcase from "@/components/marketing/Showcase";
import StatsCta from "@/components/marketing/StatsCta";
import FAQ from "@/components/marketing/FAQ";
import Contact from "@/components/marketing/Contact";

export default function Index() {
  return (
    <div>
      <Hero />
      <Steps />
      <Templates />
      <Why />
      <Showcase />
      <StatsCta />
      <FAQ />
      <Contact />
    </div>
  );
}
