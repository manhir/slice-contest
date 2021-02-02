import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Section } from '../../components/Section'
import { Title } from '../../components/Title'
import { FancyTitle } from '../../components/FancyTitle'
import { Ratio } from '../../components/Ratio'
import Image from 'next/image'
import { Button } from '../../components/Button'

const MySlice = ({ slice }) => (
    <>
        <Section bordered={false} fullWidth>
            <Title level={1} style={{ marginTop: 0 }}>
                <FancyTitle
                    style={{
                        color: 'var(--color-primary)',
                        textTransform: 'uppercase',
                    }}
                >
                    {slice.primary.title
                        ? slice.primary.title[0].text
                        : 'ERROR no title'}
                </FancyTitle>
            </Title>
        </Section>
        <Section>
            <Ratio
                left={3}
                spacer={1}
                right={6}
                leftContent={
                    <>
                        <Image src='/static/placeholder.svg' layout='fill' />
                        <Button>Get Drip</Button>
                    </>
                }
                rightContent={
                    <Title level={2} style={{ padding: '0 20px' }}>
                        {slice.primary.description[0].text}
                    </Title>
                }
            />
        </Section>
    </>
)

export default MySlice
