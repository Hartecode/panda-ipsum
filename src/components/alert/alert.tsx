import * as React from 'react'
import alertCSS from './alert.css'

export interface AlertProps {
  type: 'success' | 'error';
  message: string;
}

const Alert: React.FunctionComponent<AlertProps> = ({type, message}) => (
  <aside role="alert" aria-live="assertive" className=".root">
    <p className={type}>{message}</p>
    <style jsx>{alertCSS}</style>
  </aside>
)

export default Alert