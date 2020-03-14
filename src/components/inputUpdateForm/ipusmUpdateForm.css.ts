import css from 'styled-jsx/css'
import * as themes from '../../theme/theme'


export default css `
  .root {
    align-items: center;
    display: flex;
    flex-flow: wrap;
    margin: auto;
    margin-bottom: 6rem;
    margin-top: ${themes.spacing800};
    max-width: 400px;
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
    width: 70px;
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