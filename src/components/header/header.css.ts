import css from 'styled-jsx/css'
import * as themes from '../../theme/theme'

export default css`
  header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    margin: auto;
    max-width: ${themes.layoutWidth};
    width: 100%;
  }
  
  header img {
    grid-area: 1 / 1 / 1 / span 2;
    margin: auto;
    height: intrinsic;
    width: ${themes.logoImgMin};
    max-width: ${themes.logoImgMax};
    min-width: ${themes.logoImgMin};
    padding: 0.5rem;
  }
  
  header h1 {
    align-self: center;
    font-size: 3rem;
    text-shadow: -${themes.spacing25} ${themes.spacing25} ${themes.spacing50} ${themes.textColor2};
    margin: 0;
    padding: 0.5rem;
  }

  .panda-header {
    text-align: right;
    grid-area: 2 / 1;
  }
  
  .ipsum-header {
    grid-area: 2 / 2;
  }

  @media (min-width: 29.375rem) {

    header {
      grid-template-columns: 1fr min-content 1fr;
    }

    header img {
      grid-area: 1 / 2;
    }

    .panda-header {
      grid-area: 1 / 1;
    }
    
    .ipsum-header {
      grid-area: 1 / 3;
    }

  }

  @media (min-width: 39.375rem) {

    header img {
      padding: ${themes.spacing400};
      width: 14vw;
    }

    header h1 {
      font-size: 5.5rem;
    }

    .panda-header {
      grid-area: 1 / 1;
    }
    
    .ipsum-header {
      grid-area: 1 / 3;
    }
  }
`