import css from 'styled-jsx/css'
import * as themes from '../../theme/theme'


export default css `
  .root {
    background-color: ${themes.backgroundColor400};
    box-shadow: 0 0 ${themes.spacing200} ${themes.spacing100} rgba(89, 98, 61, 0.5);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    font-size: ${themes.fontSize300};
    padding: 0 ${themes.spacing600} ${themes.spacing900} ${themes.spacing600};
    position: relative;
    max-width: ${themes.layoutWidth};
    margin: auto;
    min-height: 85vh;
  }

  button {
    align-self: baseline;
    margin-right: ${themes.spacing400};
  }

  .copy-container {
    align-items: baseline;
    display: flex;
  }
`