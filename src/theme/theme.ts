import css from 'styled-jsx/css'

export const buttonColor = '#0b5d0b'
export const textColor1 = `#313131`
export const textColor2 = 'rgb(255, 255, 255)'
export const layoutWidth = '62.5rem'
export const logoImgMin = '6rem'
export const logoImgMax = '8rem'

// background colors
export const backgroundColor100 = '#073707'
export const backgroundColor200 = '#118511'
export const backgroundColor300 = '#654100'
export const backgroundColor400 = '#f3f3f3'
export const backgroundColor500 = '#041d03'

//spacing 
export const spacing25 = '0.0625rem' //1px
export const spacing50 = '0.125rem' // 2px
export const spacing75 = '0.1875rem' // 3px
export const spacing100 = '0.25rem' // 4px
export const spacing200 = '0.375rem' // 6px
export const spacing300 = '0.9375rem' //15px
export const spacing400 = '1rem' //16px
export const spacing500 = '1.5rem'
export const spacing600 = '1.5625rem'  //25px
export const spacing700 = '1.75rem' //28px
export const spacing800 = '2rem'
export const spacing900 = '3rem'
export const spacing1000 = '4rem'
export const spacing1100 = '5.5rem'
export const spacing1200 = '8rem'
export const spacing1300 =  '12rem'

// font size
export const fontSize50 = '0.75rem'; // 12
export const fontSize100 = '0.875rem'; // 14
export const fontSize200 = '1rem'; // 16
export const fontSize300 = '1.125rem'; // 18
export const fontSize400 = '1.25rem'; // 20
export const fontSize500 = '1.5rem'; // 24
export const fontSize600 = '2rem'; // 32
export const fontSize700 = '2.5rem'; // 40
export const fontSize800 = '3rem'; // 48
export const fontSize900 = '4rem'; // 64

export const bodyCss: string = css.global`

  @import url('https://fonts.googleapis.com/css?family=Baloo+2:400,700&display=swap');
  

  body {
    background-image:
    repeating-linear-gradient(90deg, ${backgroundColor100}, ${backgroundColor200} ${spacing300}, ${backgroundColor200} ${spacing300}, ${backgroundColor100} ${spacing600}, ${backgroundColor200} ${spacing600}, ${backgroundColor300} ${spacing700});
    font-family: 'Baloo 2', sans-serif;
    margin: 0;
  }

  button {
    background: ${buttonColor};
    border: none;
    color: ${textColor2};
    cursor: pointer;
    font-size: ${fontSize300};
    height: ${spacing900};
    padding: 0.5rem ${spacing400};
    text-transform: uppercase;
  }
`