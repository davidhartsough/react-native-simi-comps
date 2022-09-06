import { ColorSchemeName, useColorScheme } from "react-native";

import colors from "./colors";

export default function useThemeColor(
  colorName: keyof typeof colors.light & keyof typeof colors.dark
) {
  const theme = useColorScheme() as NonNullable<ColorSchemeName>;
  return colors[theme][colorName];
}
