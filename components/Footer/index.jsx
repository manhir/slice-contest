import { Section } from '@/components/Section'
import { Flex } from '@/components/Flex'
import Link from 'next/link'
import s from './index.module.css'

export const Footer = (props) => {
    return (
        <>
            <Section>
                <div
                    style={{
                        borderRight: 'var(--border)',
                        borderLeft: 'var(--border)',
                    }}
                >
                    <Flex className={s.twostack}>
                        <Flex className={s.links}>
                            <Link href='https://drop-drip-storybook.vercel.app'>
                                <a>Storybook</a>
                            </Link>
                            <Link href='https://drop-drip-demo.vercel.app'>
                                <a>Demo</a>
                            </Link>
                            <Link href='https://github.com/manhir/slice-contest'>
                                <a>Slices</a>
                            </Link>
                        </Flex>
                        <div className={s.text}>
                            <p>
                                {
                                    'Copyright 2021, all rights reserved. Made by '
                                }
                                <Link href='https://github.com/manhir'>
                                    <a>manhir</a>
                                </Link>
                                {' Licenced under the '}
                                <Link href='https://github.com/manhir/slice-contest/blob/master/LICENSE'>
                                    <a>MIT-license</a>
                                </Link>
                            </p>
                        </div>
                    </Flex>
                </div>
            </Section>
        </>
    )
}
