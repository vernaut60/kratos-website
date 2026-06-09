"use client";

import { useEffect, useState } from "react";
import { app } from "@/lib/content";

type GetAppButtonProps = {
  variant?: "primary" | "outline" | "mobile" | "ghost";
  className?: string;
  onPress?: () => void;
};

const variantStyles = {
  primary:
    "bg-accent px-8 py-3.5 text-[13px] font-semibold tracking-wide text-background transition-opacity hover:opacity-90",
  outline:
    "border border-accent/50 px-5 py-2 text-[13px] font-medium text-accent transition-colors hover:bg-accent hover:text-background",
  mobile: "mt-2 w-fit border border-accent px-6 py-3 text-sm font-medium text-accent",
  ghost:
    "border border-line px-8 py-3.5 text-[13px] font-medium tracking-wide text-foreground transition-colors hover:border-accent hover:text-accent",
} as const;

export function GetAppButton({
  variant = "primary",
  className = "",
  onPress,
}: GetAppButtonProps) {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    if (!showNotice) {
      return;
    }

    const timer = window.setTimeout(() => setShowNotice(false), 2800);
    return () => window.clearTimeout(timer);
  }, [showNotice]);

  function handleClick() {
    onPress?.();
    setShowNotice(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={`rounded-full ${variantStyles[variant]} ${className}`.trim()}
      >
        {app.ctaLabel}
      </button>

      {showNotice ? (
        <p
          role="status"
          aria-live="polite"
          className="fixed bottom-8 left-1/2 z-[60] -translate-x-1/2 rounded-full border border-border bg-surface-elevated px-5 py-3 text-[13px] text-foreground shadow-lg"
        >
          {app.comingSoonMessage}
        </p>
      ) : null}
    </>
  );
}
