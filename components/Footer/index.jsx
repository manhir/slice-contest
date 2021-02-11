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
                            <a href='/'>Slices</a>
                        </Flex>
                        <div className={s.text}>
                            <p>
                                Copyright 2099, all rights reserved. Made by
                                Somebody Licenced under the MIT-license
                            </p>
                        </div>
                    </Flex>
                </div>
            </Section>
        </>
    )
}
