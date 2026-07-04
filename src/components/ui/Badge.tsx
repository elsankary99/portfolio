"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  size = "sm",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium rounded-full transition-colors",
        {
          "bg-overlay/5 text-foreground/80 border border-overlay/10": variant === "default",
          "bg-primary-500/10 text-primary-300 border border-primary-500/20": variant === "primary",
          "bg-transparent text-foreground/60 border border-overlay/20": variant === "outline",
        },
        {
          "px-3 py-1 text-xs": size === "sm",
          "px-4 py-1.5 text-sm": size === "md",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
