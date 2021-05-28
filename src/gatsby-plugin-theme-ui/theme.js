import { deep, system } from "@theme-ui/presets"

const theme = {
  ...deep,
  styles: {
    ...deep.styles,
    root: {
      ...deep.styles.root,
      a: {
        color: "primary",
      },
    },
  },
  colors: {
    ...deep.colors,
    modes: {
      dark: {
        ...deep.colors,
      },
      light: {
        ...system.colors,
      },
    },
  },
}

export { theme, theme as default }
