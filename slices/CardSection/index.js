import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Section } from '../../components/Section'
import { Ratio } from '../../components/Ratio'
import { Title } from '../../components/Title'
import Image from 'next/image'

const MySlice = ({ slice }) => (
    <>
        {console.log(slice.items)}
        <Section
            bordered={false}
            containerStyle={{ borderTop: 'var(--border)' }}
        >
            <Title level={3} style={{ margin: '.25em 0 .5em 0' }}>
                {slice.primary.title[0].text ?? 'Placeholder title'}
            </Title>
        </Section>
        {slice.items.map((item, i) => {
            const side = i % 2 == 0
            const pictureEl = (
                <div style={{
                    position: 'relative',
                }}>
                    <Image
                        src={item.picture.url ?? '/static/placeholder.svg'}
                        style={{
                            width: '100%',
                            position: 'relative',
                            top: 0,
                            zIndex: 1,
                        }}
                        layout='fill'
                        objectFit='cover'
                        className='img'
                    />
                    <div style={{
                        position: 'absolute',
                        bottom: -2,
                        width: '100%',
                        height: 0,
                        borderBottom: 'var(--border)',
                    }} />
                </div>
            )
            const textEl = (
                <div style={{ padding: '0 20px' }}>
                    <RichText render={item.text} />
                </div>
            )
            return (
                <Section containerStyle={{ marginBottom: 70 }} key={i}>
                    <Ratio
                        left={side ? 6 : 3}
                        spacer={1}
                        right={side ? 3 : 6}
                        leftContent={side ? pictureEl : textEl}
                        rightContent={side ? textEl : pictureEl}
                    />
                </Section>
            )
        })}
    </>
)

export default MySlice