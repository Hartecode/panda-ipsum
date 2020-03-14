import css from 'styled-jsx/css'
import * as themes from '../../theme/theme'


export default css `
  .root {
    box-shadow: 0 0 ${themes.spacing200} rgb(0, 0, 0);
    padding: 0 ${themes.spacing400};
    font-size: ${themes.fontSize400};
  }

  p {
    margin: ${themes.spacing400} 0;
  }
`