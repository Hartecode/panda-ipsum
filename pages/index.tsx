import React, { useState } from 'react'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import fetch from 'isomorphic-unfetch'
import IpsumSection from '../components/lpsumSection'
import useSWR from 'swr'
import IpsumUpdateForm from '../components/IpsumUpdateForm'

interface IpsumResponse {
  richIpsumArray: string[];
}

async function fetcher(url: string): Promise<Response> {
  const r = await fetch(url)
  return await r.json()
}

const IndexPage: NextPage = () => {
  const [count, setCount] = useState(1);
  const [ipsumArr, setIpsumArr] = useState();

  const { data, error } = useSWR('/api/ipsum/1', fetcher);
  let firstLoad: string[];
  if (error) firstLoad = ['Sorry there was an issue']

  firstLoad = (data as unknown as IpsumResponse)?.richIpsumArray || ['']


  const updateIpsum = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const json = await fetcher(`./api/ipsum/${count}`)
    setIpsumArr((json as unknown as IpsumResponse)?.richIpsumArray)
  }

  const onCopy = () => {
    console.log('copy')
  }

  return (
    <Layout title="Panda Ipsum">
      <h1>Hello, Panda 👋</h1>
      <IpsumUpdateForm 
        onSubmit={updateIpsum}
        count={count}
        onChange ={(e) => setCount(Number(e.target.value))}/>
      <button onClick={onCopy}>
        Copy
      </button>
      <IpsumSection
        items={ipsumArr ? ipsumArr : firstLoad}>
      </IpsumSection>
    </Layout>
  )
}

export default IndexPage
