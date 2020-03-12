import * as React from 'react'

type Props = {
  items: string[]
}

const IpsumSection: React.FunctionComponent<Props> = ({ items }) => (
  <section>
    {items.map(item => (
      <p key={item.trim()}>
        {item}
      </p>
    ))}
  </section>
)

export default IpsumSection
