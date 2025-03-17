"use client";

import { cn } from "@/lib/utils"; 
import { DotPattern } from "@/components/magicui/dot-pattern";

export function DotPatternBackground() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(470px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  );
}
