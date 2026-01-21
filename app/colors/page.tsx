"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const colorCode = `
const ColorComponents = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex flex-col items-center gap-2">
        <div className="h-12 w-12 rounded-md bg-[#8054DA]" />
        <span className="text-sm">Primary</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="h-12 w-12 rounded-md bg-[#B692F6]" />
        <span className="text-sm">Date Middle</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="h-12 w-12 rounded-md bg-[#53389E]" />
        <span className="text-sm">Hover Primary</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="h-12 w-12 rounded-md bg-[#262626]" />
        <span className="text-sm">Secondary</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="h-12 w-12 rounded-md bg-[#E02727]" />
        <span className="text-sm">Warn</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="h-12 w-12 rounded-md bg-[#34C759]" />
        <span className="text-sm">Success</span>
      </div>
    </div>
  )
}

export default ColorComponents
`.trim()

export default function ColorPreview() {
  const [tab, setTab] = useState<"preview" | "code">("preview")

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
        {tab === "preview" ? <ColorComponents /> : (
          <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
            <code>{colorCode}</code>
          </pre>
        )}
      </div>
    </div>
  )
}

/* --- Preview Component --- */
const ColorComponents = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {/* Primary */}
      <div className="flex flex-col items-center gap-2">
        <div className="h-12 w-12 rounded-md bg-[#8054DA]" />
        <span className="text-sm">Primary</span>
      </div>
      {/* Date Middle */}
      <div className="flex flex-col items-center gap-2">
        <div className="h-12 w-12 rounded-md bg-[#B692F6]" />
        <span className="text-sm">Date Middle</span>
      </div>
      {/* Hover Primary */}
      <div className="flex flex-col items-center gap-2">
        <div className="h-12 w-12 rounded-md bg-[#53389E]" />
        <span className="text-sm">Hover Primary</span>
      </div>
      {/* Secondary */}
      <div className="flex flex-col items-center gap-2">
        <div className="h-12 w-12 rounded-md bg-[#262626]" />
        <span className="text-sm">Secondary</span>
      </div>
      {/* Warn */}
      <div className="flex flex-col items-center gap-2">
        <div className="h-12 w-12 rounded-md bg-[#E02727]" />
        <span className="text-sm">Warn</span>
      </div>
      {/* Success */}
      <div className="flex flex-col items-center gap-2">
        <div className="h-12 w-12 rounded-md bg-[#34C759]" />
        <span className="text-sm">Success</span>
      </div>
    </div>
  )
}
