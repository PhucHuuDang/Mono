"use client";

import {
  TableCellHeaderPlugin,
  TableCellPlugin,
  TablePlugin,
  TableRowPlugin,
} from "@platejs/table/react";
import type { SlatePlugin } from "platejs";
import { PlatePlugin } from "platejs/react";
import {
  TableCellElement,
  TableCellHeaderElement,
  TableElement,
  TableRowElement,
} from "@workspace/ui/components/table-node";

export const TableKit: PlatePlugin[] = [
  TablePlugin.withComponent(TableElement) as unknown as PlatePlugin,
  TableRowPlugin.withComponent(TableRowElement),
  TableCellPlugin.withComponent(TableCellElement),
  TableCellHeaderPlugin.withComponent(TableCellHeaderElement),
];
