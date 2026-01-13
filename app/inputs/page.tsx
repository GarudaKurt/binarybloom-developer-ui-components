"use client"

import React, { useState } from "react"

const InputsComponents = () => {
  const [tab, setTab] = useState<"preview" | "code">("preview")

  const code = `"use client"

import React from "react"

export default function App() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
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
          type="email"
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
          Email
        </label>
      </div>

      <div className="relative w-full">
        <input
          type="password"
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
          Password
        </label>
      </div>
    </div>
  )
}"`

  return (
    <div className="rounded-lg border bg-background p-6">
      {/* Tabs */}
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

      {/* Content */}
      <div className="flex flex-col items-center gap-4 w-full max-w-md mx-auto">
        {tab === "preview" && (
          <div className="flex flex-col gap-4 w-full">
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
                type="email"
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
                Email
              </label>
            </div>

            <div className="relative w-full">
              <input
                type="password"
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
                Password
              </label>
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
  )
}

export default InputsComponents
