"use client";

import { MentionInputPlugin, MentionPlugin } from "@platejs/mention/react";

import {
  MentionElement,
  MentionInputElement,
} from "@workspace/ui/components/mention-node";
import { PlatePlugin } from "platejs/react";

export const MentionKit = [
  MentionPlugin.configure({
    options: { triggerPreviousCharPattern: /^$|^[\s"']$/ },
  }).withComponent(MentionElement),
  MentionInputPlugin.withComponent(MentionInputElement),
] as PlatePlugin[];
