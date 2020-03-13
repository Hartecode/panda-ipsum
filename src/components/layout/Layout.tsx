import * as React from 'react'
import Head from 'next/head'
import Header from '../header/header'
import layoutCss from './layout.css'
import {bodyCss} from '../../theme/theme'

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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

export default Layout
