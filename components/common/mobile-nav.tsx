"use client";

import { useLang } from "@/providers/lang-provider";
import { siteConfig } from "@/config/site";
import { useLockBody } from "@/hooks/use-lock-body";
import { cn } from "@/lib/utils";
import { Norican } from "next/font/google";
import Link from "next/link";
import * as React from "react";

interface MobileNavProps {
  items: any[];
  children?: React.ReactNode;
}

const norican = Norican({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export function MobileNav({ items, children }: MobileNavProps) {
  useLockBody();
  const { lang } = useLang();

  return (
    <div
      className={cn(
        "fixed inset-0 top-12 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-top-10 md:hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <Link href="/" className="flex items-center space-x-2">
          <span className={cn(norican.className, "text-2xl")}>
            {siteConfig.authorName}
          </span>
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {item.title[lang]}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </div>
  );
}
