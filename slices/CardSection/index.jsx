import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Section } from '@/components/Section'
import { Ratio } from '@/components/Ratio'
import { Title } from '@/components/Title'
import s from './index.module.css'

const CardSection = ({ slice }) => (
    <>
        <Section
            bordered={false}
            containerStyle={{ borderTop: 'var(--border)', marginBottom: 0 }}
        >
            <Title level={3}>
                {slice.primary.title[0].text ?? 'Placeholder title'}
            </Title>
        </Section>
        {slice.items.map((item, i) => {
            const side = i % 2 == 0
            const pictureEl = (
                <div
                    style={{
                        position: 'relative',
                    }}
                >
                    <img
                        src={item.picture.url ?? '/static/placeholder.svg'}
                        className={s.img}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            bottom: -2,
                            width: '100%',
                            height: 0,
                            borderBottom: 'var(--border)',
                        }}
                    />
                </div>
            )
            const textEl = (
                <div style={{ padding: '0 20px' }}>
                    <RichText render={item.text} />
                </div>
            )
            return (
                <Section key={i}>
                    <Ratio
                        left={side ? 6 : 3}
                        spacer={1}
                        right={side ? 3 : 6}
                        reverseMobile={side}
                        leftContent={side ? pictureEl : textEl}
                        rightContent={side ? textEl : pictureEl}
                    />
                </Section>
            )
        })}
    </>
)

export default CardSection
