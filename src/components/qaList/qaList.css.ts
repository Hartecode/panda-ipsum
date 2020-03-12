import css from 'styled-jsx/css'
import * as themes from '../../theme/theme'


export default css `
  .root {
    display: grid;
    grid-row-gap: ${themes.spacing400};
    margin: ${themes.spacing800} 0;
  }

  dt {
    font-size: ${themes.fontSize500};
    font-weight: bold;
  }

  dd {
    margin: 0;
  }

  @media screen and (min-width: 43.75rem) {

    .root {
      grid-column-gap: ${themes.spacing500};
    }

    dd {
      margin: 0;
      grid-row: 2;
    }
  }

`