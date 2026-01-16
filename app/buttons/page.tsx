"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ButtonComponent() {
  const [tab, setTab] = useState<"preview" | "code">("preview")

  // Tailwind classes for buttons
  const btnSm =
     "flex items-center justify-center gap-2 text-base text-white bg-primaryColor hover:bg-hoverPrimaryColor h-10 w-32 rounded-2xl border-2 border-white transition duration-100 hover:scale-105"
  const btnMd =
    "flex items-center justify-center gap-2 text-base text-white bg-primaryColor hover:bg-hoverPrimaryColor h-10 w-48 rounded-3xl border-2 border-white transition duration-100 hover:scale-105"
  const btnLg =
    "flex items-center justify-center gap-2 text-base text-white bg-primaryColor hover:bg-hoverPrimaryColor h-10 w-56 rounded-3xl border-2 border-white transition duration-100 hover:scale-105"

  const code = `"use client"

import { Button } from "@/components/ui/button"

export default function Example() {
  return (
    <div className="space-y-4">
      <Button className="${btnSm}">Small Button</Button>
      <Button className="${btnMd}">Medium Button</Button>
      <Button className="${btnMd}">Large Button</Button>
    </div>
  )
}
`

  return (
    <div className="rounded-lg border bg-background">
      {/* Tabs */}
      <div className="flex border-b">
        <button
          onClick={() => setTab("preview")}
          className={`px-4 py-2 text-sm font-medium transition ${
            tab === "preview"
              ? "border-b-2 border-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Preview
        </button>
        <button
          onClick={() => setTab("code")}
          className={`px-4 py-2 text-sm font-medium transition ${
            tab === "code"
              ? "border-b-2 border-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Code
        </button>
      </div>

      <div className="p-6 flex flex-col items-center gap-4">
        {tab === "preview" && (
          <>
            <Button className={btnSm}>Small Button</Button>
            <Button className={btnMd}>Medium Button</Button>
            <Button className={btnLg}>
              Large Button
            </Button>
          </>
        )}

        {tab === "code" && (
          <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
            <code>{code}</code>
          </pre>
        )}
      </div>
    </div>
  )
}
