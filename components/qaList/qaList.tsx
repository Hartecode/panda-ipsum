import * as React from 'react'
import {landingPageQA, LandingPageQA} from '../../utils/landing-details'


const QaList: React.FunctionComponent = () => (
  <dl>
    {landingPageQA.map((item: LandingPageQA) => (
      <React.Fragment key={item.question}>
        <dt>{item.question}</dt>
        <dd>{item.answer}</dd>
      </React.Fragment> 
    ))}
  </dl>
)

export default QaList