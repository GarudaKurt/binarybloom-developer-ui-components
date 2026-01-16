"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type MenuItem = {
  title: string;
  href: string;
};

const componentMenu: MenuItem[] = [
  { title: "Sidebar 1", href: "#" },
  { title: "Sidebar 2", href: "#" },
  { title: "Sidebar 3", href: "#" },
];

const sidebarCode = `
const componentMenu = [
  { title: "Sidebar 1", href: "#" },
  { title: "Sidebar 2", href: "#" },
  { title: "Sidebar 3", href: "#" },
]

<div className="flex min-h-screen">
  <aside className="w-64 border-r bg-background p-4">
    <h2 className="mb-4 text-2xl font-bold">Components</h2>
    <nav className="space-y-1">
      {componentMenu.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="block rounded-2xl px-3 py-2 text-lg font-semibold transition
                     hover:bg-primaryColor hover:text-white"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  </aside>
</div>
`.trim();

export default function SidebarPreview() {
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
          <div className="flex min-h-[300px] rounded-lg border overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 border-r bg-background p-4">
              <h2 className="mb-4 text-xl font-bold">Components</h2>
              <nav className="space-y-1">
                {componentMenu.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block rounded-2xl px-3 py-2 text-[18px] font-semibold transition
                               hover:bg-primaryColor hover:text-white"
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </aside>

            {/* Page Content */}
            <main className="flex-1 p-6">
              <h1 className="text-2xl font-bold mb-2">Sidebars</h1>
              <p className="text-muted-foreground text-sm">
                This is a preview of the sidebar layout.
              </p>
            </main>
          </div>
        ) : (
          <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
            <code>{sidebarCode}</code>
          </pre>
        )}
      </div>
    </div>
  );
}
