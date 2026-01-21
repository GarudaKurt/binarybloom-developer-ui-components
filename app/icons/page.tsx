"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const iconsCode = `
const IconsComponents = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center">
      {/* Success Icon */}
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8054DA]">
        <img
          src="https://img.icons8.com/ios-filled/50/ffffff/checkmark.png"
          alt="Success"
          className="h-8 w-8"
        />
      </div>

      {/* Info Icon */}
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8054DA]">
        <img
          src="https://img.icons8.com/ios-filled/50/ffffff/info.png"
          alt="Info"
          className="h-8 w-8"
        />
      </div>

      {/* Warning Icon */}
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8054DA]">
        <img
          src="https://img.icons8.com/ios-filled/50/ffffff/error.png"
          alt="Warning"
          className="h-8 w-8"
        />
      </div>

      {/* Custom Icon */}
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8054DA]">
        <img
          src="https://img.icons8.com/ios-filled/50/ffffff/info--v1.png"
          alt="Custom"
          className="h-8 w-8"
        />
      </div>
    </div>
  )
}

export default IconsComponents
`.trim()

export default function IconsPreview() {
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
        {tab === "preview" ? <IconsComponents /> : (
          <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
            <code>{iconsCode}</code>
          </pre>
        )}
      </div>
    </div>
  )
}

/* --- Preview Component --- */
const IconsComponents = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center">
      {/* Success Icon */}
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8054DA]">
        <img
          src="https://img.icons8.com/ios-filled/50/ffffff/checkmark.png"
          alt="Success"
          className="h-8 w-8"
        />
      </div>

      {/* Info Icon */}
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8054DA]">
        <img
          src="https://img.icons8.com/ios-filled/50/ffffff/info.png"
          alt="Info"
          className="h-8 w-8"
        />
      </div>

      {/* Warning Icon */}
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8054DA]">
        <img
          src="https://img.icons8.com/ios-filled/50/ffffff/error.png"
          alt="Warning"
          className="h-8 w-8"
        />
      </div>

      {/* Custom Icon */}
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8054DA]">
        <img
          src="https://img.icons8.com/ios-filled/50/ffffff/info--v1.png"
          alt="Custom"
          className="h-8 w-8"
        />
      </div>
    </div>
  )
}
