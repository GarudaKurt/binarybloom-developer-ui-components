"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

const sliderCode = `
"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"

export default function PriceRangeSlider() {
  const [price, setPrice] = useState<[number, number]>([20, 80])

  return (
    <div className="w-full max-w-xs space-y-3">
      <div className="flex justify-between text-sm font-medium">
        <span>₱{price[0]}</span>
        <span>₱{price[1]}</span>
      </div>

      <Slider
        value={price}
        onValueChange={setPrice}
        min={0}
        max={100}
        step={1}
        className="
            [&_.range]:bg-[#53389E]
            [&_.track]:bg-[#B692F6]
        "
      />
    </div>
  )
}
`.trim()

export default function SliderPreview() {
  const [tab, setTab] = useState<"preview" | "code">("preview")
  const [price, setPrice] = useState<[number, number]>([20, 80])

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
              ? "border-b-2 border-brand-primary text-brand-primary"
              : "text-muted-foreground"
          )}
        >
          Code
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {tab === "preview" ? (
          <div className="flex justify-center">
            <div className="w-full max-w-xs space-y-3">
              <div className="flex justify-between text-sm font-medium">
                <span>₱{price[0]}</span>
                <span>₱{price[1]}</span>
              </div>

              <Slider
                value={price}
                onValueChange={(val: number[]) => setPrice(val as [number, number])}
                min={0}
                max={100}
                step={1}
                className="
                  [&_.range]:bg-[#53389E]
                  [&_.track]:bg-[#B692F6]
                "
              />
            </div>
          </div>
        ) : (
          <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
            <code>{sliderCode}</code>
          </pre>
        )}
      </div>
    </div>
  )
}
