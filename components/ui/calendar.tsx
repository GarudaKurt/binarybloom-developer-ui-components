"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        month: "space-y-4",
        months: "flex flex-col sm:flex-row space-y-4 sm:space-y-0 relative",
        month_caption: "flex justify-center pt-1 relative items-center",
        month_grid: "w-full border-collapse space-y-1",
        caption_label: "text-sm font-medium",
        nav: "flex items-center justify-between absolute inset-x-0",
        button_previous: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 z-10"
        ),
        button_next: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 z-10"
        ),
        weeks: "w-full border-collapse",
        weekdays: "flex",
        weekday: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        week: "flex w-full mt-2",

        day_button: "h-9 w-9 p-0 relative focus-within:z-20",

        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal flex items-center justify-center rounded-full aria-selected:opacity-100"
        ),

        selected:
          "bg-primaryColor text-white hover:bg-hoverPrimaryColor focus:bg-primaryColor focus:text-white hover:text-white",

        range_start:
          "bg-primaryColor text-white rounded-l-full h-9 w-9 flex items-center justify-center hover:bg-hoverPrimaryColor focus:bg-primaryColor focus:text-white",

        range_end:
          "bg-primaryColor text-white rounded-r-full h-9 w-9 flex items-center justify-center hover:bg-hoverPrimaryColor focus:bg-primaryColor focus:text-white",

        range_middle:
          "bg-dateMiddleColor text-white h-9 flex-1 flex items-center justify-center",

        today:
          "border border-accent text-accent-foreground rounded-full h-9 w-9 flex items-center justify-center",

        outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        disabled: "text-muted-foreground opacity-50",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ ...props }) =>
          props.orientation === "left" ? (
            <ChevronLeft {...props} className="h-4 w-4" />
          ) : (
            <ChevronRight {...props} className="h-4 w-4" />
          ),
      }}
      {...props}
    />
  );
}

Calendar.displayName = "Calendar";

export { Calendar };
