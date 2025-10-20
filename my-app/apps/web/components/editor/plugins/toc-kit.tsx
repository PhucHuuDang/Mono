"use client";

import { TocPlugin } from "@platejs/toc/react";

import { TocElement } from "@workspace/ui/components/toc-node";
import { PlatePlugin } from "platejs/react";

export const TocKit: PlatePlugin[] = [
  TocPlugin.configure({
    options: {
      // isScroll: true,
      topOffset: 80,
    },
  }).withComponent(TocElement) as unknown as PlatePlugin,
];
