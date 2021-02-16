import { Section } from '@/components/Section'
import { Flex } from '@/components/Flex'
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
                            <a href='/'>Storybook</a>
                            <a href='/'>Demo page</a>
                            <a href='https://github.com/manhir/slice-contest'>
                                Slices
                            </a>
                        </Flex>
                        <div className={s.text}>
                            <p>
                                {'Copyright 2021, all rights reserved. Made by '}
                                <a href='https://github.com/manhir'>manhir</a>
                                {' Licenced under the '}
                                <a href='https://github.com/manhir/slice-contest/blob/master/LICENSE'>
                                    MIT-license
                                </a>
                            </p>
                        </div>
                    </Flex>
                </div>
            </Section>
        </>
    )
}
