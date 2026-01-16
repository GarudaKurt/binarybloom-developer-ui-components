"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

type SliderProps = React.ComponentProps<typeof Slider>;

const sliderCode = `
import { Slider } from "@/components/ui/slider"

<Slider
  defaultValue={[50]}
  max={100}
  step={1}
  className="w-[40%]"
/>
`.trim();

export default function SliderComponents({
  className,
  ...props
}: SliderProps) {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  return (
    <div className="w-full rounded-xl border bg-background">
      {/* Tabs */}
      <div className="flex border-b">
        <button
          onClick={() => setTab("preview")}
          className={cn(
            "px-4 py-2 text-sm font-medium",
            tab === "preview"
              ? "border-b-2 border-brand-primary text-brand-primary"
              : "text-muted-foreground"
          )}
        >
          Preview
        </button>

        <button
          onClick={() => setTab("code")}
          className={cn(
            "px-4 py-2 text-sm font-medium",
            tab === "code"
              ? "border-b-2 bg-primaryColor text-semibold"
              : "text-muted-foreground"
          )}
        >
          Code
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {tab === "preview" ? (
          <div className="flex items-center justify-center">
            <Slider
              defaultValue={[50]}
              max={100}
              step={1}
              className={cn("w-[40%] bg-primaryColor", className)}
              {...props}
            />
          </div>
        ) : (
          <pre className="rounded-lg bg-muted bg-primaryColor p-4 text-sm overflow-x-auto">
            <code>{sliderCode}</code>
          </pre>
        )}
      </div>
    </div>
  );
}
