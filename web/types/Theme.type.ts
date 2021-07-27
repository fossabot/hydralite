import { fetchThemeColors } from "util/fetchThemeColors";
import { getReturnType } from "util/getReturnType";

const _themeNameType: "dark" | "light" = "" as any;
export type themeNameType = typeof _themeNameType;

const _themeColorsType = getReturnType(fetchThemeColors);
export type themeColorsType = typeof _themeColorsType;
