"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { type DateRange } from "react-day-picker";

const calendarSizeClass = `
  rounded-xl border
  text-md
  [--cell-size:2.5rem]
  md:[--cell-size:3rem]
`;

export default function CalendarPreview() {
  const [tab, setTab] = React.useState<"preview" | "code">("preview");
  const [singleDate, setSingleDate] = React.useState<Date | undefined>();
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>();

  const code = `"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { type DateRange } from "react-day-picker";

export default function Example() {
  const [singleDate, setSingleDate] = React.useState<Date>();
  const [dateRange, setDateRange] = React.useState<DateRange>();

  const calendarSizeClass = \`
    rounded-xl border
    text-md
    [--cell-size:2.5rem]
    md:[--cell-size:3rem]
  \`;

  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-8">
      <Calendar
        mode="single"
        selected={singleDate}
        onSelect={setSingleDate}
        className={calendarSizeClass}
      />
      <Calendar
        mode="range"
        selected={dateRange}
        onSelect={setDateRange}
        numberOfMonths={2}
        className={calendarSizeClass}
      />
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

      <div className="p-6 flex flex-col items-center gap-6">
        {tab === "preview" && (
          <div className="flex flex-col gap-6 md:flex-row md:gap-8">
            <Calendar
              mode="single"
              selected={singleDate}
              onSelect={setSingleDate}
              className={calendarSizeClass}
            />
            <Calendar
              mode="range"
              selected={dateRange}
              onSelect={setDateRange}
              numberOfMonths={2}
              className={calendarSizeClass}
            />
          </div>
        )}

        {tab === "code" && (
          <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
            <code>{code}</code>
          </pre>
        )}
      </div>
    </div>
  );
}
