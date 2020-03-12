import * as React from 'react'
import headerCSS from './header.css'


const Header: React.FunctionComponent = () => (
  <header className=".root">
    <img src="/img/panda.png" alt="panda logo" />
    <h1 className="panda-header"> Panda</h1>
    <h1 className="ipsum-header"> Ipsum</h1>
    <style jsx>{headerCSS}</style>
  </header>
)

export default Header