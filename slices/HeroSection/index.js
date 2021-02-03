import { RichText } from 'prismic-reactjs'
import { Section } from '../../components/Section'
import { Title } from '../../components/Title'
import { FancyTitle } from '../../components/FancyTitle'
import { Ratio } from '../../components/Ratio'
import Image from 'next/image'
import { Button } from '../../components/Button'

const HeroSection = ({ slice }) => (
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
        <Section containerStyle={{ marginBottom: 70 }}>
            <Ratio
                left={3}
                spacer={1}
                right={6}
                leftContent={
                    <>
                        <div>
                            <Image
                                src={
                                    slice.primary.picture?.url ??
                                    '/static/placeholder.svg'
                                }
                                style={{
                                    width: '100%',
                                }}
                                layout='fill'
                                objectFit='cover'
                            />
                        </div>
                        <Button
                            style={{
                                borderTop: 'var(--border)',
                            }}
                        >
                            {slice.primary.button ?? 'Button'}
                        </Button>
                    </>
                }
                rightContent={
                    <Title level={2} style={{ padding: '0 20px' }}>
                        {slice.primary.subtitle[0].text}
                    </Title>
                }
            />
        </Section>
    </>
)

export default HeroSection
