"use client"

import Link from "next/link"
import React from "react"

type MenuItem = {
  title: string
  href: string
}

const componentMenu: MenuItem[] = [
  { title: "Buttons", href: "/buttons" },
  { title: "Sheets", href: "/sheets" },
  { title: "Calendar", href: "/calendar" },
  { title: "Avatars", href: "/avatars" },
  { title: "Carousels", href: "/carousels" },
  { title: "Labels", href: "/labels" },
  { title: "Inputs", href: "/inputs" },
  { title: "Paginations", href: "/paginations" },
  { title: "Sidebars", href: "/sidebars" },
  { title: "Sliders", href: "/sliders" },
  { title: "Skeleton", href: "/skeleton" },
  { title: "Badge", href: "/badge" },
  { title: "Icons", href: "/icons" },
  { title: "Alerts", href: "/alerts" },
]

export default function Sidebar() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-background p-4">
        <h2 className="mb-4 text-2xl font-bold">Components</h2>
        <nav className="space-y-1">
          {componentMenu.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="block rounded-lg px-3 py-2 text-lg font-semibold transition hover:bg-blue-300 hover:text-white transition"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Page Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-2">Sidebars</h1>
        <p className="text-muted-foreground">
          This page demonstrates a sidebar menu layout implemented directly in
          <code className="mx-1 rounded bg-muted px-1">sidebas/page.tsx</code>.
        </p>
      </main>
    </div>
  )
}
