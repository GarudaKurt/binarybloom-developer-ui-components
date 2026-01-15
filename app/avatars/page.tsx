"use client";

import {useState} from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export default function AvatarPreview() {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  const code = `"use client";

import {useState} from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarComponents() {
  return (
    <div className="flex flex-row flex-wrap items-center gap-12">
      <Avatar className="w-16 h-16">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="rounded-lg w-16 h-16">
        <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
      <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
        <Avatar className="w-12 h-12">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="w-12 h-12">
          <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar className="w-12 h-12">
          <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
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

      <div className="p-6 flex flex-col items-center gap-6 w-full">
        {tab === "preview" && (
          <div className="flex flex-row flex-wrap items-center gap-12">
            <Avatar className="w-16 h-16">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <Avatar className="rounded-lg w-16 h-16">
              <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>

            <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
              <Avatar className="w-12 h-12">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className="w-12 h-12">
                <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar className="w-12 h-12">
                <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </div>
          </div>
        )}

        {tab === "code" && (
          <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm w-full">
            <code>{code}</code>
          </pre>
        )}
      </div>
    </div>
  );
}
