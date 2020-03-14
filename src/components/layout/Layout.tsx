import React, { useEffect } from 'react'
import Head from 'next/head'
import Header from '../header/header'
import layoutCss from './layout.css'
import {bodyCss} from '../../theme/theme'
import { initGA, logPageView } from "../../utils/googleAnalytics"

type Props = {
  title?: string
}

interface Window {
  GA_INITIALIZED?: boolean;
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => {

  useEffect(() => {
    if (!(window as Window).GA_INITIALIZED) {
      initGA();
      (window as Window).GA_INITIALIZED = true
    }
    logPageView()
  });
  
  return (
  <React.Fragment>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
      <meta name="description" content="Panda ipsum is a text generator for placeholder text. Great for people who want their love of pandas to show in their development process."/>
      <meta name="keywords" content="Panda, Ipsum, panda, ispum, Panda Ipsum, panda ipsum, developer, programer, placeholder text, lorem ipsum, lorem"/>
      <link rel="icon" href="./img/panda-70x72.png"/>
      <link href="https://fonts.googleapis.com/css?family=Baloo+2:400,700&display=swap" rel="stylesheet"></link>
    </Head>
    <Header></Header>
    {children}
    <footer>
      <div>©2020 Panda Ipsum</div>
      <div>Created and operated by <a href="https://www.hartecode.com/">Sean Harte</a></div>
    </footer>
    <style global jsx>{bodyCss}</style>
    <style jsx>{layoutCss}</style>
  </React.Fragment>
)
}

export default Layout
