import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const HERO_SLIDES = [
  {
    id: 1,
    tag: "BREAKING",
    title: "RoboSports Championship Finals: BlockFC vs. PixelUnited",
    subtitle:
      "The biggest Roblox sports event of the year — 4.2M players watching LIVE",
    image: "/assets/generated/hero-main-card.dim_800x500.jpg",
    color: "oklch(0.44 0.19 25)",
  },
  {
    id: 2,
    tag: "NBA LIVE",
    title: "Lakers Defeat Celtics in Overtime Thriller — 108-102",
    subtitle: "LeBron drops 38 points in what could be his final playoff run",
    image: "/assets/generated/news-basketball.dim_400x250.jpg",
    color: "oklch(0.57 0.16 245)",
  },
  {
    id: 3,
    tag: "NFL UPDATE",
    title: "Chiefs Secure AFC West Title with Dominant 27-14 Victory",
    subtitle:
      "Mahomes throws 4 TDs as Kansas City clinches home-field advantage",
    image: "/assets/generated/news-football.dim_400x250.jpg",
    color: "oklch(0.50 0.21 25)",
  },
];

const PIXEL_SQUARES = [
  { size: 20, top: "8%", left: "5%", color: "#E53935", float: 1 },
  { size: 14, top: "15%", left: "90%", color: "#1E88E5", float: 2 },
  { size: 24, top: "70%", left: "8%", color: "#FDD835", float: 3 },
  { size: 16, top: "80%", left: "88%", color: "#26C6DA", float: 4 },
  { size: 10, top: "40%", left: "3%", color: "#E53935", float: 5 },
  { size: 18, top: "30%", left: "93%", color: "#FDD835", float: 1 },
  { size: 12, top: "60%", left: "2%", color: "#1E88E5", float: 2 },
  { size: 22, top: "20%", left: "85%", color: "#26C6DA", float: 3 },
  { size: 8, top: "55%", left: "96%", color: "#E53935", float: 4 },
  { size: 16, top: "88%", left: "50%", color: "#FDD835", float: 5 },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = HERO_SLIDES[activeSlide];
  const others = HERO_SLIDES.filter((_, i) => i !== activeSlide);

  return (
    <section
      className="relative overflow-hidden py-12 px-4"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.15 0 0) 0%, oklch(0.22 0 0) 100%)",
      }}
      data-ocid="hero.section"
    >
      {/* Pixel confetti */}
      {PIXEL_SQUARES.map((sq) => (
        <div
          key={`${sq.top}-${sq.left}`}
          className={`pixel-square pixel-float-${sq.float}`}
          style={{
            width: sq.size,
            height: sq.size,
            top: sq.top,
            left: sq.left,
            background: sq.color,
          }}
        />
      ))}

      {/* Headline */}
      <div className="relative z-10 text-center mb-10">
        <h1
          className="font-pixel text-white mb-3"
          style={{
            fontSize: "clamp(24px, 5vw, 64px)",
            textShadow: "4px 4px 0 #000, 6px 6px 0 oklch(0.44 0.19 25)",
            lineHeight: "1.3",
          }}
        >
          GAME ON!
        </h1>
        <p
          className="font-pixel text-white/70"
          style={{
            fontSize: "clamp(8px, 1.5vw, 14px)",
            letterSpacing: "0.2em",
          }}
        >
          YOUR SPORTS + GAMING HUB
        </p>
      </div>

      {/* Featured content carousel */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Main card */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden"
                style={{
                  border: "4px solid #fff",
                  boxShadow: "8px 8px 0 rgba(0,0,0,0.7)",
                }}
              >
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full object-cover"
                  style={{ height: "320px" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 50%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span
                    className="font-pixel text-white px-2 py-1 mb-2 inline-block"
                    style={{ background: current.color, fontSize: "8px" }}
                  >
                    {current.tag}
                  </span>
                  <h2
                    className="font-sport font-bold text-white text-xl leading-tight mb-1"
                    style={{ textShadow: "1px 1px 0 #000" }}
                  >
                    {current.title}
                  </h2>
                  <p className="font-sport text-white/80 text-sm">
                    {current.subtitle}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Side cards */}
          <div className="flex flex-col gap-4">
            {others.map((slide) => (
              <button
                type="button"
                key={slide.id}
                className="relative overflow-hidden cursor-pointer flex-1 text-left"
                style={{
                  border: "3px solid rgba(255,255,255,0.4)",
                  boxShadow: "4px 4px 0 rgba(0,0,0,0.5)",
                  minHeight: "148px",
                }}
                onClick={() => setActiveSlide(HERO_SLIDES.indexOf(slide))}
                data-ocid={`hero.button.${slide.id}`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full object-cover"
                  style={{ height: "148px" }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "rgba(0,0,0,0.5)" }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span
                    className="font-pixel text-white px-1.5 py-0.5 mb-1 inline-block"
                    style={{ background: slide.color, fontSize: "7px" }}
                  >
                    {slide.tag}
                  </span>
                  <p className="font-sport font-bold text-white text-sm leading-tight">
                    {slide.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-5">
          {HERO_SLIDES.map((slide, i) => (
            <button
              type="button"
              key={slide.id}
              onClick={() => setActiveSlide(i)}
              data-ocid={`hero.toggle.${i + 1}`}
              className="w-4 h-4 transition-all"
              style={{
                background:
                  i === activeSlide
                    ? "oklch(0.44 0.19 25)"
                    : "rgba(255,255,255,0.3)",
                border: "2px solid #fff",
                boxShadow:
                  i === activeSlide ? "2px 2px 0 rgba(0,0,0,0.5)" : "none",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
