import React, { forwardRef } from 'react'

type Props = {
  children?: never[];
  items: string[];
}

type Ref = HTMLElement

const IpsumSection: React.ForwardRefRenderFunction<Ref, Props> = 
({ items }, ref) => (
  <section ref={ref}>
    {items.map(item => (
      <p key={item.trim()}>
        {item}
      </p>
    ))}
  </section>
)

const forwardedIpsumSection = forwardRef(IpsumSection)

export default forwardedIpsumSection
