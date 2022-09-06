const hsl = (brightness: number) => `hsl(0, 0%, ${brightness}%)`;

export default {
  light: {
    text: hsl(7),
    placeholder: hsl(45),
    background: hsl(99),
    border: hsl(70),
    icon: hsl(30),
    disabledBg: hsl(94),
    disabledText: hsl(45),
    disabledBorder: hsl(65),
    tabBarTint: hsl(25),
  },
  dark: {
    text: hsl(88),
    placeholder: hsl(60),
    background: hsl(8),
    border: hsl(70),
    icon: hsl(85),
    disabledBg: hsl(15),
    disabledText: hsl(55),
    disabledBorder: hsl(60),
    tabBarTint: hsl(85),
  },
};
