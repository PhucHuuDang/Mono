"use client";

import { PlateEditor } from "@/components/editor/plate-editor";
import { Component, LiquidGlass } from "@/components/ui/liquid-glass";
import { Button } from "@workspace/ui/components/button";
import { useTheme } from "next-themes";

export default function Page() {
  const { setTheme } = useTheme();

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>

        <Button size="sm" onClick={() => setTheme("dark")}>
          Button
        </Button>
        <Button size="sm" onClick={() => setTheme("light")}>
          Button
        </Button>
        <Button size="sm" onClick={() => setTheme("system")}>
          Button
        </Button>

        <PlateEditor />

        <Component />
      </div>
    </div>
  );
}
