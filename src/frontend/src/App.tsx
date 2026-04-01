import { FeaturedGames } from "./components/FeaturedGames";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { NewsSection } from "./components/NewsSection";
import { PlayerCards } from "./components/PlayerCards";
import { Ticker } from "./components/Ticker";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed ticker at very top */}
      <Ticker />
      {/* Spacer for fixed ticker */}
      <div style={{ height: "36px" }} />
      {/* Sticky nav */}
      <Navbar />
      <main className="flex-1">
        <Hero />
        <NewsSection />
        <FeaturedGames />
        <PlayerCards />
      </main>
      <Footer />
    </div>
  );
}
