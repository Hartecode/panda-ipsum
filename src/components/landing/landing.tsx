import React, { useState,  useRef } from 'react'
import { NextPage } from 'next'
import fetch from 'isomorphic-unfetch'
import useSWR from 'swr'
import IpsumUpdateForm from '../inputUpdateForm/IpsumUpdateForm'
import IpsumSection from '../ipsumSection/lpsumSection'
import QaList from '../qaList/qaList'
import landingCss from './landing.css'
import addToClipBoard from '../../utils/clip-board'


interface IpsumResponse {
  richIpsumArray: string[];
}

async function fetcher(url: string): Promise<Response> {
  const r = await fetch(url)
  return await r.json()
}

const Landing: NextPage = () => {
  const contentRef = useRef<HTMLElement>(null)
  const [count, setCount] = useState<number>(1)
  const [ipsumArr, setIpsumArr] = useState<string[]>()

  const { data, error } = useSWR('/api/ipsum/1', fetcher)
  let firstLoad: string[];
  if (error) firstLoad = ['Sorry there was an issue']

  firstLoad = (data as unknown as IpsumResponse)?.richIpsumArray || ['']

  const updateIpsum = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const json = await fetcher(`./api/ipsum/${count}`)
    setIpsumArr((json as unknown as IpsumResponse)?.richIpsumArray)
  }

  const onCopy = async() => {
    if (contentRef?.current) {
      const text: string = contentRef?.current?.innerText || ''
      const result  = await addToClipBoard(text)
      console.log(result)
    }
    
  }

  return (
    <main className="root">
      <QaList></QaList>
      <IpsumUpdateForm 
        onSubmit={updateIpsum}
        count={count}
        onChange ={(e) => setCount(Number(e.target.value))}/>
      <button onClick={onCopy}>
        Copy
      </button>
      <IpsumSection
        ref={contentRef}
        items={ipsumArr ? ipsumArr : firstLoad}>
      </IpsumSection>
      <style jsx>{landingCss}</style>
    </main>
  )
}


export default Landing