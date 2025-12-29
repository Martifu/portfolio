import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { TopBar } from "@/components/TopBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black font-sans text-slate-900 dark:text-white">
      <TopBar />
      <Hero />
      <Navbar />
    </main>
  );
}
