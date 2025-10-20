"use client";

import emojiMartData, { Emoji, EmojiMartData } from "@emoji-mart/data";
import { EmojiInputPlugin, EmojiPlugin } from "@platejs/emoji/react";

import { EmojiInputElement } from "@workspace/ui/components/emoji-node";

export const EmojiKit: any[] = [
  EmojiPlugin.configure({
    options: { data: emojiMartData as any },
  }),
  EmojiInputPlugin.withComponent(EmojiInputElement),
];
