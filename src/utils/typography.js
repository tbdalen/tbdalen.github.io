import Typography from "typography"
import lincolnTheme from "typography-theme-lincoln"

lincolnTheme.overrideThemeStyles = () => ({
  a: {
    textShadow: `none`,
    backgroundImage: `none`,
  },
})

const typography = new Typography(lincolnTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
