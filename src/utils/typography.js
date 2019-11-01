import Typography from "typography"
import elkGlenTheme from "typography-theme-elk-glen"

elkGlenTheme.overrideThemeStyles = () => ({
  a: {
    textShadow: `none`,
    backgroundImage: `none`,
  },
})

const typography = new Typography(elkGlenTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
