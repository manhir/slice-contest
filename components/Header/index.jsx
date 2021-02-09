import React from 'react'
import { Section } from '../Section'
import Link from 'next/link'

export const Header = (props) => {
    return (
        <Section
            style={{
                paddingTop: 20,
                paddingBottom: 20,
            }}
            containerStyle={{
                position: 'fixed',
                top: 0,
                width: '100%',
                maxHeight: 70,
                zIndex: 1,
                backgroundColor: 'var(--color-black)',
                borderTop: 'none',
            }}
        >
            <Link href='/'>
                <a href='/'>
                    <img
                        style={{
                            paddingLeft: '.5em',
                        }}
                        src='/static/logo.svg'
                    />
                </a>
            </Link>
        </Section>
    )
}
