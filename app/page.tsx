import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { Testimonials } from "@/components/Testimonials";
import { Navbar } from "@/components/Navbar";
import { TopBar } from "@/components/TopBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 relative">
      <TopBar />
      <Hero />
      <Testimonials />
      <AboutMe />

      {/* Global Vertical Lines - Centered, below TopBar, spanning full height */}
      <div className="absolute top-[65px] md:top-[90px] bottom-0 left-0 right-0 w-[calc(100%-40px)] md:w-[calc(100%-48px)] xl:w-full max-w-5xl mx-auto border-x border-gray-100 pointer-events-none z-0" />
      <Navbar />
    </main>
  );
}
