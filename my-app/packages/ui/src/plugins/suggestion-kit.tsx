"use client";

import type { ExtendConfig, Path } from "platejs";

import {
  type BaseSuggestionConfig,
  BaseSuggestionPlugin,
} from "@platejs/suggestion";
import { isSlateEditor, isSlateElement, isSlateString } from "platejs";
import { toTPlatePlugin } from "platejs/react";

import { BlockSuggestion } from "@workspace/ui/components/block-suggestion";
import {
  SuggestionLeaf,
  SuggestionLineBreak,
} from "@workspace/ui/components/suggestion-node";

import { discussionPlugin } from "./discussion-kit.js";
import type { SlatePlugin } from "platejs";

export type SuggestionConfig = ExtendConfig<
  BaseSuggestionConfig,
  {
    activeId: string | null;
    hoverId: string | null;
    uniquePathMap: Map<string, Path>;
  }
>;

export const suggestionPlugin = toTPlatePlugin<SuggestionConfig>(
  BaseSuggestionPlugin as unknown as SlatePlugin<any>,
  ({ editor }) => ({
    options: {
      activeId: null,
      currentUserId: editor.getOption(discussionPlugin, "currentUserId"),
      hoverId: null,
      uniquePathMap: new Map(),
    },
  })
).configure({
  handlers: {
    // unset active suggestion when clicking outside of suggestion
    onClick: ({ api, event, setOption, type }) => {
      let leaf = event.target as HTMLElement;
      let isSet = false;

      const unsetActiveSuggestion = () => {
        setOption("activeId", null);
        isSet = true;
      };

      if (!isSlateString(leaf)) unsetActiveSuggestion();

      while (
        leaf.parentElement &&
        !isSlateElement(leaf.parentElement) &&
        !isSlateEditor(leaf.parentElement)
      ) {
        if (leaf.classList.contains(`slate-${type}`)) {
          const suggestionEntry = api.suggestion!.node({ isText: true });

          if (!suggestionEntry) {
            unsetActiveSuggestion();

            break;
          }

          const id = api.suggestion!.nodeId(suggestionEntry[0]);

          setOption("activeId", id ?? null);
          isSet = true;

          break;
        }

        leaf = leaf.parentElement;
      }

      if (!isSet) unsetActiveSuggestion();
    },
  },
  render: {
    belowNodes: SuggestionLineBreak as any,
    node: SuggestionLeaf,
    belowRootNodes: ({ api, element }) => {
      if (!api.suggestion!.isBlockSuggestion(element)) {
        return null;
      }

      return <BlockSuggestion element={element} />;
    },
  },
});

export const SuggestionKit = [suggestionPlugin];
