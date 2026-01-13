"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet"

const SheetsComponents = () => {
  const [tab, setTab] = useState<"preview" | "code">("preview")

  // Full JSX code for Code tab
  const code = `"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet"

export default function App() {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
      {/* Right-side Sheet */}
      <Sheet>
        <SheetTrigger asChild>
          <Button className="bg-blue-500 text-white hover:bg-blue-600">Open Right Sheet</Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-96">
          <SheetHeader>
            <SheetTitle>User Info (Right)</SheetTitle>
            <SheetDescription>Fill out the form below</SheetDescription>
          </SheetHeader>

          <div className="flex flex-col gap-4 mt-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder=" "
                className="peer block w-full rounded-md border border-gray-200 bg-[#fafafa] px-3 pt-5 pb-2 text-sm placeholder-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
              <label className="absolute left-3 top-2.5 text-gray-400 text-sm transition-all
                peer-placeholder-shown:top-5
                peer-placeholder-shown:text-gray-400
                peer-placeholder-shown:text-sm
                peer-focus:top-1
                peer-focus:text-blue-500
                peer-focus:text-xs">
                Name
              </label>
            </div>

            <div className="relative w-full">
              <input
                type="text"
                placeholder=" "
                className="peer block w-full rounded-md border border-gray-200 bg-[#fafafa] px-3 pt-5 pb-2 text-sm placeholder-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
              <label className="absolute left-3 top-2.5 text-gray-400 text-sm transition-all
                peer-placeholder-shown:top-5
                peer-placeholder-shown:text-gray-400
                peer-placeholder-shown:text-sm
                peer-focus:top-1
                peer-focus:text-blue-500
                peer-focus:text-xs">
                Address
              </label>
            </div>

            <div className="relative w-full">
              <input
                type="text"
                placeholder=" "
                className="peer block w-full rounded-md border border-gray-200 bg-[#fafafa] px-3 pt-5 pb-2 text-sm placeholder-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
              <label className="absolute left-3 top-2.5 text-gray-400 text-sm transition-all
                peer-placeholder-shown:top-5
                peer-placeholder-shown:text-gray-400
                peer-placeholder-shown:text-sm
                peer-focus:top-1
                peer-focus:text-blue-500
                peer-focus:text-xs">
                Number
              </label>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Bottom Sheet */}
      <Sheet>
        <SheetTrigger asChild>
          <Button className="bg-blue-500 text-white hover:bg-blue-600">Open Bottom Sheet</Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-96">
          <SheetHeader>
            <SheetTitle>User Info (Bottom)</SheetTitle>
            <SheetDescription>Fill out the form below</SheetDescription>
          </SheetHeader>

          <div className="flex flex-col gap-4 mt-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder=" "
                className="peer block w-full rounded-md border border-gray-200 bg-[#fafafa] px-3 pt-5 pb-2 text-sm placeholder-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
              <label className="absolute left-3 top-2.5 text-gray-400 text-sm transition-all
                peer-placeholder-shown:top-5
                peer-placeholder-shown:text-gray-400
                peer-placeholder-shown:text-sm
                peer-focus:top-1
                peer-focus:text-blue-500
                peer-focus:text-xs">
                Name
              </label>
            </div>

            <div className="relative w-full">
              <input
                type="text"
                placeholder=" "
                className="peer block w-full rounded-md border border-gray-200 bg-[#fafafa] px-3 pt-5 pb-2 text-sm placeholder-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
              <label className="absolute left-3 top-2.5 text-gray-400 text-sm transition-all
                peer-placeholder-shown:top-5
                peer-placeholder-shown:text-gray-400
                peer-placeholder-shown:text-sm
                peer-focus:top-1
                peer-focus:text-blue-500
                peer-focus:text-xs">
                Address
              </label>
            </div>

            <div className="relative w-full">
              <input
                type="text"
                placeholder=" "
                className="peer block w-full rounded-md border border-gray-200 bg-[#fafafa] px-3 pt-5 pb-2 text-sm placeholder-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
              <label className="absolute left-3 top-2.5 text-gray-400 text-sm transition-all
                peer-placeholder-shown:top-5
                peer-placeholder-shown:text-gray-400
                peer-placeholder-shown:text-sm
                peer-focus:top-1
                peer-focus:text-blue-500
                peer-focus:text-xs">
                Number
              </label>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}`

  return (
    <div className="rounded-lg border bg-background p-6">
      <div className="flex border-b mb-4">
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

      <div className="flex flex-col items-center gap-4 w-full">
        {tab === "preview" && (
          <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button className="bg-primaryColor text-white hover:bg-hoverPrimaryColor">
                  Open Right Sheet
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-96">
                <SheetHeader>
                  <SheetTitle>User Info (Right)</SheetTitle>
                  <SheetDescription>Fill out the form below</SheetDescription>
                </SheetHeader>

                <div className="flex flex-col gap-4 mt-4">
                  <div className="relative w-full">
                    <input
                      type="text"
                      placeholder=" "
                      className="peer block w-full rounded-md border border-gray-200 bg-[#fafafa] px-3 pt-5 pb-2 text-sm placeholder-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <label className="absolute left-3 top-2.5 text-gray-400 text-sm transition-all
                      peer-placeholder-shown:top-5
                      peer-placeholder-shown:text-gray-400
                      peer-placeholder-shown:text-sm
                      peer-focus:top-1
                      peer-focus:text-blue-500
                      peer-focus:text-xs">
                      Name
                    </label>
                  </div>

                  <div className="relative w-full">
                    <input
                      type="text"
                      placeholder=" "
                      className="peer block w-full rounded-md border border-gray-200 bg-[#fafafa] px-3 pt-5 pb-2 text-sm placeholder-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <label className="absolute left-3 top-2.5 text-gray-400 text-sm transition-all
                      peer-placeholder-shown:top-5
                      peer-placeholder-shown:text-gray-400
                      peer-placeholder-shown:text-sm
                      peer-focus:top-1
                      peer-focus:text-blue-500
                      peer-focus:text-xs">
                      Address
                    </label>
                  </div>

                  <div className="relative w-full">
                    <input
                      type="text"
                      placeholder=" "
                      className="peer block w-full rounded-md border border-gray-200 bg-[#fafafa] px-3 pt-5 pb-2 text-sm placeholder-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <label className="absolute left-3 top-2.5 text-gray-400 text-sm transition-all
                      peer-placeholder-shown:top-5
                      peer-placeholder-shown:text-gray-400
                      peer-placeholder-shown:text-sm
                      peer-focus:top-1
                      peer-focus:text-blue-500
                      peer-focus:text-xs">
                      Number
                    </label>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button className="bg-primaryColor text-white hover:bg-hoverPrimaryColor">
                  Open Bottom Sheet
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-96">
                <SheetHeader>
                  <SheetTitle>User Info (Bottom)</SheetTitle>
                  <SheetDescription>Fill out the form below</SheetDescription>
                </SheetHeader>

                <div className="flex flex-col gap-4 mt-4">
                  <div className="relative w-full">
                    <input
                      type="text"
                      placeholder=" "
                      className="peer block w-full rounded-md border border-gray-200 bg-[#fafafa] px-3 pt-5 pb-2 text-sm placeholder-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <label className="absolute left-3 top-2.5 text-gray-400 text-sm transition-all
                      peer-placeholder-shown:top-5
                      peer-placeholder-shown:text-gray-400
                      peer-placeholder-shown:text-sm
                      peer-focus:top-1
                      peer-focus:text-blue-500
                      peer-focus:text-xs">
                      Name
                    </label>
                  </div>

                  <div className="relative w-full">
                    <input
                      type="text"
                      placeholder=" "
                      className="peer block w-full rounded-md border border-gray-200 bg-[#fafafa] px-3 pt-5 pb-2 text-sm placeholder-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <label className="absolute left-3 top-2.5 text-gray-400 text-sm transition-all
                      peer-placeholder-shown:top-5
                      peer-placeholder-shown:text-gray-400
                      peer-placeholder-shown:text-sm
                      peer-focus:top-1
                      peer-focus:text-blue-500
                      peer-focus:text-xs">
                      Address
                    </label>
                  </div>

                  <div className="relative w-full">
                    <input
                      type="text"
                      placeholder=" "
                      className="peer block w-full rounded-md border border-gray-200 bg-[#fafafa] px-3 pt-5 pb-2 text-sm placeholder-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <label className="absolute left-3 top-2.5 text-gray-400 text-sm transition-all
                      peer-placeholder-shown:top-5
                      peer-placeholder-shown:text-gray-400
                      peer-placeholder-shown:text-sm
                      peer-focus:top-1
                      peer-focus:text-blue-500
                      peer-focus:text-xs">
                      Number
                    </label>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        )}

        {tab === "code" && (
          <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm w-full">
            <code>{code}</code>
          </pre>
        )}
      </div>
    </div>
  )
}

export default SheetsComponents
