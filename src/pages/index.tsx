import React from 'react'
import Layout from '../components/layout/Layout'
import { NextPage } from 'next'
import Landing from '../components/landing/landing'

const IndexPage: NextPage = () =>  (
  <Layout title="Panda Ipsum">
    <Landing></Landing>
  </Layout>
)

export default IndexPage
