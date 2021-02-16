import { Section } from '@/components/Section'
import { Title } from '@/components/Title'
import { FancyTitle } from '@/components/FancyTitle'
import { Ratio } from '@/components/Ratio'
import { Button } from '@/components/Button'

const HeroSection = ({ slice }) => (
    <div
        style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        }}
    >
        <Section bordered={false}>
            <Title level={1}>
                <FancyTitle
                    style={{
                        color: 'var(--color-primary)',
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
                    <div
                        style={{
                            position: 'relative',
                        }}
                    >
                        <div>
                            <img
                                src={
                                    slice.primary.picture?.url ??
                                    '/static/placeholder.svg'
                                }
                                style={{
                                    width: '100%',
                                }}
                            />
                        </div>
                        <Button
                            style={{
                                borderTop: 'var(--border)',
                            }}
                            href={slice.primary.href.url ?? '/'}
                        >
                            {slice.primary.button ?? 'Button'}
                        </Button>

                        <div
                            style={{
                                position: 'absolute',
                                bottom: -2,
                                width: '100%',
                                height: 0,
                                borderTop: 'var(--border)',
                            }}
                        />
                    </div>
                }
                rightContent={
                    <Title level={2} style={{ padding: '20px', margin: 0 }}>
                        {slice.primary.subtitle[0].text}
                    </Title>
                }
            />
        </Section>
    </div>
)

export default HeroSection
