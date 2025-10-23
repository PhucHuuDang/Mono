import Image from "next/image";
import Link from "next/link";
import { GlassEffect } from "../../../../packages/ui/src/common/liquid-glass";
import { cn } from "@workspace/ui/lib/utils";

export const Navbar = () => {
  return (
    <GlassEffect className="flex items-center justify-between fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-sm">
      <div
        className={cn(`"transition-all duration-700"`)}
        style={{
          transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
        }}
      >
        <div>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Mono Blog"
              width={50}
              height={50}
              className="h-52 w-52"
            />
          </Link>
        </div>
      </div>
    </GlassEffect>
  );
};
