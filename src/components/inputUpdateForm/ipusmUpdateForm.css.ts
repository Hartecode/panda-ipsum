import css from 'styled-jsx/css'
import * as themes from '../../theme/theme'


export default css `
  .root {
    align-items: center;
    display: flex;
    flex-flow: wrap;
    margin: ${themes.spacing800} auto;
    max-width: 25rem;
    position: relative;
  }

  label {
    display: flex;
    font-size: ${themes.fontSize500};
    font-weight: bold;
    margin-bottom: ${themes.spacing400};
  }

  label span {
    flex: 2;
  }

  input {
    border: none;
    box-sizing: border-box;
    font-size: ${themes.fontSize500};
    padding: 0 ${themes.spacing400};
    width: 4.375rem;
  }

  button {
    width: 100%;
  }


  @media screen and (min-width: 43.75rem ) {

    .root {
      grid-column-gap: ${themes.spacing500};
    }

    dd {
      margin: 0;
      grid-row: 2;
    }
  }

`