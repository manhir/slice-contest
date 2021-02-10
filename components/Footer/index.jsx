import { Section } from '@/components/Section'
import { Flex } from '@/components/Flex'
import s from './index.module.css'

export const Footer = (props) => {
    return (
        <>
            <Section
                containerStyle={{
                    marginBottom: 70,
                }}
            >
                <div
                    style={{
                        borderRight: 'var(--border)',
                        borderLeft: 'var(--border)',
                    }}
                >
                    <Flex
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <Flex className={s.links}>
                            <a href='/'>Storybook</a>
                            <a href='/'>Demo page</a>
                            <a href='/'>Slices</a>
                        </Flex>
                        <div
                            style={{
                                height: 70,
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <p
                                style={{
                                    margin: 0,
                                    paddingLeft: 20,
                                }}
                            >
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
