import React, { forwardRef } from 'react'
import sectionCss from './ipsumSection.css'

type Props = {
  children?: never[];
  items: string[];
}

type Ref = HTMLElement

const IpsumSection: React.ForwardRefRenderFunction<Ref, Props> = 
({ items }, ref) => (
  <section className="root" ref={ref}>
    {items.map(item => (
      <p key={item.trim()}>
        {item}
      </p>
    ))}
    <style jsx>{sectionCss}</style>
  </section>
)

const forwardedIpsumSection = forwardRef(IpsumSection)

export default forwardedIpsumSection
