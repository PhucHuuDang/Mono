"use client";

import { SlashInputPlugin, SlashPlugin } from "@platejs/slash-command/react";
import { KEYS } from "platejs";

import { SlashInputElement } from "@workspace/ui/components/slash-node";
import { PlatePlugin } from "platejs/react";

export const SlashKit = [
  SlashPlugin.configure({
    options: {
      triggerQuery: (editor) =>
        !editor.api.some({
          match: { type: editor.getType(KEYS.codeBlock) },
        }),
    },
  }),
  SlashInputPlugin.withComponent(SlashInputElement),
] as PlatePlugin[];
