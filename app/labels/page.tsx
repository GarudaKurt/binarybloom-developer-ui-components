"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const labelCode = `
<label className="font-semibold text-[18px]">
  Hello 1
</label>

`.trim();

export default function LabelComponents() {
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
          <label className="font-semibold text-[18px]">
  Hello 1
</label>

        ) : (
          <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
            <code>{labelCode}</code>
          </pre>
        )}
      </div>
    </div>
  );
}
