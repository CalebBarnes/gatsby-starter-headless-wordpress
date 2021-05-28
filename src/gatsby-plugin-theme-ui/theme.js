import { dark, system } from "@theme-ui/presets"

console.log({ dark, system })

const theme = {
  ...dark,
  styles: {
    ...dark.styles,
  },
  colors: {
    ...dark.colors,
    modes: {
      dark: {
        ...dark.colors,
      },
      light: {
        ...system.colors,
      },
    },
  },
  sizes: {
    container: {
      maxWidth: 768,
    },
  },
}

export { theme, theme as default }
