import React, { useState,  useRef } from 'react'
import { NextPage } from 'next'
import fetch from 'isomorphic-unfetch'
import IpsumUpdateForm from '../inputUpdateForm/IpsumUpdateForm'
import IpsumSection from '../ipsumSection/lpsumSection'
import QaList from '../qaList/qaList'
import landingCss from './landing.css'
import addToClipBoard from '../../utils/clip-board'
import Alert, { AlertProps } from '../alert/alert'


export interface IpsumResponse {
  ipsumArray: string[];
}

async function fetcher(url: string): Promise<Response> {
  const r = await fetch(url)
  return await r.json()
}

const Landing: NextPage<IpsumResponse> = (props) => {
  const contentRef = useRef<HTMLElement>(null)
  const [count, setCount] = useState<number>(1)
  const [ipsumArr, setIpsumArr] = useState<string[]>()
  const [alert, setAlert] = useState<AlertProps>()
  const [showAlert, setShowAlert] = useState<boolean>(false)

  const alertMessages = {
    success: 'Copied to clipboard! 🐼',
    failed: 'Sorry, an error occurred.'
  }

  const updateIpsum = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const json = await fetcher(`./api/ipsum/${count}`)
    setIpsumArr((json as unknown as IpsumResponse)?.ipsumArray)
    setShowAlert(false)
  }

  const onCopy = async() => {
    if (contentRef?.current) {
      const text: string = contentRef?.current?.innerText || ''
      const result  = await addToClipBoard(text)
      setAlert({
        type: (result === 'failed') ? 'error' : result,
        message: alertMessages[result]
      })
      setShowAlert(true)
    }
  }

  const updateCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    setCount(val);
  }

  const showAlertComp = (alert && showAlert) ? <Alert {...alert}></Alert> : null

  return (
    <main className="root">
      <QaList></QaList>
      <IpsumUpdateForm 
        onSubmit={updateIpsum}
        count={count}
        onChange ={updateCount}/>
      <div className="copy-container">
        <button onClick={onCopy}>
          Copy
        </button>
        {showAlertComp}
      </div>
      <IpsumSection
        ref={contentRef}
        items={ipsumArr ? ipsumArr : props.ipsumArray}>
      </IpsumSection>
      <style jsx>{landingCss}</style>
    </main>
  )
}


export default Landing