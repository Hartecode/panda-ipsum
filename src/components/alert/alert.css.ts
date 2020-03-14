import css from 'styled-jsx/css'
import * as themes from '../../theme/theme'


export default css `

  p {
    margin: 0;
  }

  .success {
    color: ${themes.buttonColor};
  }

  .error {
    color: red;
  }
`