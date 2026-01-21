"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const badgeCode = `
"use client"

import { Badge } from "@/components/ui/badge"

const BadgeComponents = () => {
  return (
    <div className="flex w-full flex-wrap justify-center gap-2">
      <Badge className="bg-successColor hover:bg-successColor text-white rounded-full">
        Success badge
      </Badge>
      <Badge className="bg-warnColor hover:bg-warnColor text-white rounded-full">
        Warning badge
      </Badge>
    </div>
  )
}

export default BadgeComponents
`.trim()

export default function BadgePreview() {
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
        {tab === "preview" ? (
          <BadgeComponents />
        ) : (
          <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
            <code>{badgeCode}</code>
          </pre>
        )}
      </div>
    </div>
  )
}

/* --- Preview Component --- */
const BadgeComponents = () => {
  return (
    <div className="flex w-full flex-wrap justify-center gap-2">
      <Badge className="bg-successColor hover:bg-successColor text-white rounded-full">
        Success badge
      </Badge>
      <Badge className="bg-warnColor hover:bg-warnColor text-white rounded-full">
        Warning badge
      </Badge>
    </div>
  )
}
