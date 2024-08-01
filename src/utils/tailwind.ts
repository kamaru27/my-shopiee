import type { ClassValue } from "clsx";

import { clsx } from "clsx";
import {
  createTailwindMerge,
  getDefaultConfig,
  mergeConfigs,
} from "tailwind-merge";

const tailwindMerge = createTailwindMerge(getDefaultConfig, (config) =>
  mergeConfigs(config, {
    extend: {
      classGroups: {
        colors: ["globalblue"],

        fontSize: [
          "global-font-h1",
          "global-font-h2",
          "global-font-h3",
          "global-font-h4",
          "global-font-h5",
          "global-font-h6",
          "global-font-h7",

          "global-font-text1",
          "global-font-text2",
          "global-font-text3",
          "global-font-text4",
        ],
      },
    },
  })
);

export default function cn(...input: ClassValue[]) {
  return tailwindMerge(clsx(input));
}
