import * as React from 'react'
import {landingPageQA, LandingPageQA} from '../../utils/landing-details'
import QAListCss from './qaList.css'


const QaList: React.FunctionComponent = () => (
  <dl className="root">
    {landingPageQA.map((item: LandingPageQA) => (
      <React.Fragment key={item.question}>
        <dt>{item.question}</dt>
        <dd>{item.answer}</dd>
      </React.Fragment> 
    ))}
    <style jsx>{QAListCss}</style>
  </dl>
)

export default QaList