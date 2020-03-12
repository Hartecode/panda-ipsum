import css from 'styled-jsx/css'
import * as themes from '../../theme/theme'

export const bodyCss: string = css.global`
body {
  background-image:
  repeating-linear-gradient(90deg, ${themes.backgroundColor100}, ${themes.backgroundColor200} ${themes.spacing300}, ${themes.backgroundColor200} ${themes.spacing300}, ${themes.backgroundColor100} ${themes.spacing600}, ${themes.backgroundColor200} ${themes.spacing600}, ${themes.backgroundColor300} ${themes.spacing700});
}
`

export default css ``