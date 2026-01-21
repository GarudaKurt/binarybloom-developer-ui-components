"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

const colors = {
  primaryColor: "#8054DA",
  dateMiddleColor: "#B692F6",
  hoverPrimaryColor: "#53389E",
  secondaryColor: "#262626",
  warnColor: "#E02727",
  successColor: "#34C759",
};

export default function CarouselPreview() {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  const code = "/* Your carousel code here */";

  return (
    <div className="rounded-lg border bg-background">
      {/* Tabs */}
      <div className="flex border-b">
        <button
          onClick={() => setTab("preview")}
          className={cn(
            "px-4 py-2 text-sm font-medium transition",
            tab === "preview"
              ? "border-b-2 border-foreground text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Preview
        </button>
        <button
          onClick={() => setTab("code")}
          className={cn(
            "px-4 py-2 text-sm font-medium transition",
            tab === "code"
              ? "border-b-2 border-foreground text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Code
        </button>
      </div>

      <div className="p-6 flex flex-col items-center gap-6 w-full">
        {tab === "preview" && <Carousel />}
        {tab === "code" && (
          <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm w-full">
            <code>{code}</code>
          </pre>
        )}
      </div>
    </div>
  );
}

// Carousel component with transparent / brand-colored backgrounds
function Carousel() {
  const images = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=80",
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  const handlePrev = () =>
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleNext = () =>
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="flex flex-col gap-2 w-full max-w-4xl mx-auto relative">
      <div
        className="relative w-full overflow-hidden rounded-lg border aspect-[16/9]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
        >
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full flex-shrink-0 h-full object-cover"
            />
          ))}
        </div>

        {/* Nav Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 -translate-y-1/2 p-2 rounded-full shadow transition"
          style={{ backgroundColor: colors.primaryColor }}
        >
          <ChevronLeft size={24} className="text-white" />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 -translate-y-1/2 p-2 rounded-full shadow transition"
          style={{ backgroundColor: colors.primaryColor }}
        >
          <ChevronRight size={24} className="text-white" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 px-3 py-1 rounded-full">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                idx === selectedIndex ? "scale-125" : "hover:scale-110"
              )}
              style={{
                backgroundColor:
                  idx === selectedIndex
                    ? colors.primaryColor
                    : colors.dateMiddleColor,
              }}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto py-1">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className="flex-shrink-0 w-20 h-16 rounded-md overflow-hidden border-2 transition scale-105"
            style={{
              borderColor:
                idx === selectedIndex
                  ? colors.primaryColor
                  : colors.dateMiddleColor,
              filter: "none",
            }}
          >
            <img
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-200"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
