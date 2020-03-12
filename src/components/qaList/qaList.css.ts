import css from 'styled-jsx/css'
import * as themes from '../../theme/theme'


export default css `
  .root {
    display: grid;
    grid-gap: ${themes.spacing200};
    margin: 0;
  }

  dt {
    font-size: ${themes.fontSize500};
    font-weight: bold;
  }

  dd {
    margin: 0;
  }
`