import {
  BaseBlockquotePlugin,
  BaseH1Plugin,
  BaseH2Plugin,
  BaseH3Plugin,
  BaseH4Plugin,
  BaseH5Plugin,
  BaseH6Plugin,
  BaseHorizontalRulePlugin,
} from "@platejs/basic-nodes";
import { BaseParagraphPlugin } from "platejs";

import { BlockquoteElement } from "@workspace/ui/components/blockquote-node";
import {
  H1ElementStatic,
  H2ElementStatic,
  H3ElementStatic,
  H4ElementStatic,
  H5ElementStatic,
  H6ElementStatic,
} from "@workspace/ui/components/heading-node-static";
import { HrElementStatic } from "@workspace/ui/components/hr-node-static";
import { ParagraphElementStatic } from "@workspace/ui/components/paragraph-node-static";

export const BaseBasicBlocksKit = [
  BaseParagraphPlugin.withComponent(ParagraphElementStatic),
  BaseH1Plugin.withComponent(H1ElementStatic),
  BaseH2Plugin.withComponent(H2ElementStatic),
  BaseH3Plugin.withComponent(H3ElementStatic),
  BaseH4Plugin.withComponent(H4ElementStatic),
  BaseH5Plugin.withComponent(H5ElementStatic),
  BaseH6Plugin.withComponent(H6ElementStatic),
  BaseBlockquotePlugin.withComponent(BlockquoteElement),
  BaseHorizontalRulePlugin.withComponent(HrElementStatic),
];
