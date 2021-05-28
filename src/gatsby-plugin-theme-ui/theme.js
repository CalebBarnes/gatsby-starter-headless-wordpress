import { deep, system } from "@theme-ui/presets"

/**
 * ? For more info about Theming see https://theme-ui.com/theming
 * ? For more presets see https://theme-ui.com/packages/presets/
 */

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
      light: {
        ...system.colors,
      },
    },
  },
}

export { theme, theme as default }
