const hsl = (brightness: number) => `hsl(0, 0%, ${brightness}%)`;

export default {
  light: {
    text: hsl(7),
    placeholder: hsl(45),
    background: hsl(99),
    border: hsl(80),
    icon: hsl(20),
    disabledBg: hsl(94),
    disabledText: hsl(50),
    disabledBorder: hsl(70),
    tabBarTint: hsl(15),
  },
  dark: {
    text: hsl(88),
    placeholder: hsl(60),
    background: hsl(8),
    border: hsl(90),
    icon: hsl(90),
    disabledBg: hsl(20),
    disabledText: hsl(55),
    disabledBorder: hsl(65),
    tabBarTint: hsl(85),
  },
};
