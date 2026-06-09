import { About } from "@/components/about";
import { Blog } from "@/components/blog";
import { Contact } from "@/components/contact";
import { ContactFab } from "@/components/contact-fab";
import { DemoChatbot } from "@/components/demo-chatbot";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { InstagramFeed } from "@/components/instagram-feed";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import { Programs } from "@/components/programs";
import { Schedule } from "@/components/schedule";
import { Testimonials } from "@/components/testimonials";
import { Trainers } from "@/components/trainers";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Schedule />
        <Trainers />
        <Pricing />
        <Testimonials />
        <InstagramFeed />
        <Contact />
        <Blog />
        <Faq />
      </main>
      <Footer />
      <ContactFab />
      <DemoChatbot />
    </>
  );
}
