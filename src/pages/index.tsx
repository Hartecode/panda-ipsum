import React from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout/Layout'
import { NextPage } from 'next'
import Landing, { IpsumResponse } from '../components/landing/landing'
import { env } from '../environment/environment'

async function fetcher<T>(url: string): Promise<T> {
  const r = await fetch(url)
  return await r.json()
}

const IndexPage: NextPage<IpsumResponse> = (props) =>  (
  <Layout title="Panda Ipsum">
    <Landing {...props}></Landing>
  </Layout>
)

IndexPage.getInitialProps = async function() {
  
  const data = await fetcher<IpsumResponse>(`${env.hostUrl}api/ipsum/1`);

  return {
    ipsumArray: data.ipsumArray
  };
};

export default IndexPage
