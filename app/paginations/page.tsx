"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const paginationCode = `
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>

    <PaginationItem>
      <PaginationLink
        href="#"
        isActive
        className="bg-dateMiddleColor text-white hover:bg-primaryColor hover:text-white rounded-full"
      >
        1
      </PaginationLink>
    </PaginationItem>

    <PaginationItem>
      <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>

    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>

    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>

    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
`.trim();

export default function PaginationComponents() {
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
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>

              <PaginationItem>
                <PaginationLink
                  href="#"
                  isActive
                  className="bg-dateMiddleColor text-white hover:bg-primaryColor hover:text-white rounded-full"
                >
                  1
                </PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>

              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        ) : (
          <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
            <code>{paginationCode}</code>
          </pre>
        )}
      </div>
    </div>
  );
}
