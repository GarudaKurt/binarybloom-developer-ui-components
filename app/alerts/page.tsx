"use client"

import { useState } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2Icon, InfoIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const alertCode = `
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2Icon, InfoIcon } from "lucide-react"

const AlertDemo = () => {
  return (
    <div className="grid w-full max-w-md items-start gap-4">
      <Alert className="flex items-start gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-successColor">
          <CheckCircle2Icon className="h-5 w-5 text-white" />
        </div>
        <div className="flex-1">
          <AlertTitle>Payment successful</AlertTitle>
          <AlertDescription>
            Your payment of $29.99 has been processed. A receipt has been sent to
            your email address.
          </AlertDescription>
        </div>
      </Alert>

      <Alert className="flex items-start gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-warnColor">
          <InfoIcon className="h-5 w-5 text-white" />
        </div>
        <div className="flex-1">
          <AlertTitle>New feature available</AlertTitle>
          <AlertDescription>
            We&apos;ve added dark mode support. You can enable it in your account
            settings.
          </AlertDescription>
        </div>
      </Alert>
    </div>
  )
}

export default AlertDemo
`.trim()

export default function AlertPreview() {
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
          <AlertDemo />
        ) : (
          <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
            <code>{alertCode}</code>
          </pre>
        )}
      </div>
    </div>
  )
}

/* --- Preview Component --- */
const AlertDemo = () => {
  return (
    <div className="grid w-full max-w-md items-start gap-4">
      <Alert className="flex items-start gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-successColor">
          <CheckCircle2Icon className="h-5 w-5 text-white" />
        </div>
        <div className="flex-1">
          <AlertTitle>Payment successful</AlertTitle>
          <AlertDescription>
            Your payment of $29.99 has been processed. A receipt has been sent to
            your email address.
          </AlertDescription>
        </div>
      </Alert>

      <Alert className="flex items-start gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-warnColor">
          <InfoIcon className="h-5 w-5 text-white" />
        </div>
        <div className="flex-1">
          <AlertTitle>New feature available</AlertTitle>
          <AlertDescription>
            We&apos;ve added dark mode support. You can enable it in your account
            settings.
          </AlertDescription>
        </div>
      </Alert>
    </div>
  )
}
