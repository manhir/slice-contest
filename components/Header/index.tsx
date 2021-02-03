import Image from 'next/image'
import React from 'react'
import { Section } from '../Section'

export const Header = (props) => {
    return <Section style={{ borderBottom: 'var(--border)' }}>
        <Image
            src='/static/logo/svg'
            layout='fill'
        />
    </Section>
}
