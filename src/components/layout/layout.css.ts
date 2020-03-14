import css from 'styled-jsx/css'
import * as themes from '../../theme/theme'


export default css `
  footer {
    background-color: ${themes.backgroundColor500};
    height: ${themes.spacing1000};
    padding: ${themes.spacing600};
    color: ${themes.textColor2};
  }

  a {
    color: white;
  }
`