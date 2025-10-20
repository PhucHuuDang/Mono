import { BaseTocPlugin } from "@platejs/toc";

import { TocElementStatic } from "@workspace/ui/components/toc-node-static";
import type { SlatePlugin } from "platejs";

export const BaseTocKit: SlatePlugin[] = [
  BaseTocPlugin.withComponent(TocElementStatic) as unknown as SlatePlugin,
];
