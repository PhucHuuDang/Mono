"use client";

import * as React from "react";

import { useAIChatEditor } from "@platejs/ai/react";
import { usePlateEditor } from "platejs/react";

import { BaseEditorKit } from "@workspace/ui/plugins/editor-base-kit";

import { EditorStatic } from "./editor-static.js";

export const AIChatEditor = React.memo(function AIChatEditorFunc({
  content,
}: {
  content: string;
}) {
  const aiEditor = usePlateEditor({
    plugins: BaseEditorKit,
  });

  useAIChatEditor(aiEditor, content);

  return <EditorStatic variant="aiChat" editor={aiEditor} />;
});
