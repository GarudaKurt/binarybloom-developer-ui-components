"use client";

import {useState, useEffect} from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CarouselPreview() {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  // Use String.raw to safely include backticks and JSX in the code string
  const code = String.raw`import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel() {
  const images = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=80"
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setSelectedIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  const handlePrev = () => setSelectedIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
  const handleNext = () => setSelectedIndex(prev => prev === images.length - 1 ? 0 : prev + 1);

  return (
    <div className="flex flex-col gap-2 w-full max-w-4xl mx-auto relative">
      <div
        className="relative w-full overflow-hidden rounded-lg border aspect-[16/9]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: \`translateX(-\${selectedIndex * 100}%)\` }}>
          {images.map((img, idx) => (
            <img key={idx} src={img} alt={\`Slide \${idx + 1}\`} className="w-full flex-shrink-0 h-full object-cover" />
          ))}
        </div>

        <button onClick={handlePrev} className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/60 hover:bg-white/90 p-2 rounded-full shadow transition">
          <ChevronLeft size={24} />
        </button>

        <button onClick={handleNext} className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/60 hover:bg-white/90 p-2 rounded-full shadow transition">
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 bg-black/20 px-3 py-1 rounded-full">
          {images.map((_, idx) => (
            <button key={idx} onClick={() => setSelectedIndex(idx)} className={cn(
              "w-3 h-3 rounded-full transition-all",
              idx === selectedIndex ? "bg-purple-400 scale-125" : "bg-gray-300 hover:bg-gray-400"
            )} />
          ))}
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto py-1">
        {images.map((img, idx) => (
          <button key={idx} onClick={() => setSelectedIndex(idx)} className={cn(
            "flex-shrink-0 w-20 h-16 rounded-md overflow-hidden border-2 transition",
            idx === selectedIndex ? "border-purple-400 filter-none scale-105" : "border-transparent hover:border-gray-300 filter grayscale hover:filter-none"
          )}>
            <img src={img} alt={\`Thumbnail \${idx + 1}\`} className="w-full h-full object-cover transition-transform duration-200" />
          </button>
        ))}
      </div>
    </div>
  );
}`;

  return (
    <div className="rounded-lg border bg-background">
      {/* Tabs */}
      <div className="flex border-b">
        <button
          onClick={() => setTab("preview")}
          className={`px-4 py-2 text-sm font-medium transition ${
            tab === "preview" ? "border-b-2 border-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Preview
        </button>
        <button
          onClick={() => setTab("code")}
          className={`px-4 py-2 text-sm font-medium transition ${
            tab === "code" ? "border-b-2 border-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
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

// Carousel component used in preview
function Carousel() {
  const images = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=80"
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setSelectedIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  const handlePrev = () => setSelectedIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
  const handleNext = () => setSelectedIndex(prev => prev === images.length - 1 ? 0 : prev + 1);

  return (
    <div className="flex flex-col gap-2 w-full max-w-4xl mx-auto relative">
      <div
        className="relative w-full overflow-hidden rounded-lg border aspect-[16/9]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${selectedIndex * 100}%)` }}>
          {images.map((img, idx) => (
            <img key={idx} src={img} alt={`Slide ${idx + 1}`} className="w-full flex-shrink-0 h-full object-cover" />
          ))}
        </div>

        <button onClick={handlePrev} className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/60 hover:bg-white/90 p-2 rounded-full shadow transition">
          <ChevronLeft size={24} />
        </button>

        <button onClick={handleNext} className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/60 hover:bg-white/90 p-2 rounded-full shadow transition">
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 bg-black/20 px-3 py-1 rounded-full">
          {images.map((_, idx) => (
            <button key={idx} onClick={() => setSelectedIndex(idx)} className={cn(
              "w-3 h-3 rounded-full transition-all",
              idx === selectedIndex ? "bg-purple-400 scale-125" : "bg-gray-300 hover:bg-gray-400"
            )} />
          ))}
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto py-1">
        {images.map((img, idx) => (
          <button key={idx} onClick={() => setSelectedIndex(idx)} className={cn(
            "flex-shrink-0 w-20 h-16 rounded-md overflow-hidden border-2 transition",
            idx === selectedIndex ? "border-purple-400 filter-none scale-105" : "border-transparent hover:border-gray-300 filter grayscale hover:filter-none"
          )}>
            <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-200" />
          </button>
        ))}
      </div>
    </div>
  );
}
