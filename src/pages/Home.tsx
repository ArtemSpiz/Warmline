import Built from "../components/Home/Built";
import CTA from "../components/Home/CTA";
import FAQ from "../components/Home/FAQ";
import Hero from "../components/Home/Hero";
import HowItWorks from "../components/Home/HowItWorks";
import Scroll from "../components/Home/Scroll";
import Services from "../components/Home/Services";
import WhyUs from "../components/Home/WhyUs";
import Workspace from "../components/Home/Workspace";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <WhyUs />
      <Workspace />
      <Built />
      <Scroll />
      <FAQ />
      <CTA />
    </>
  );
}

export default Home;
