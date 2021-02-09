import { RichText } from 'prismic-reactjs'
import { Section } from '../../Section'
import { Title } from '../../Title'
import { FancyTitle } from '../../FancyTitle'
import { Ratio } from '../../Ratio'
import { Button } from 'components/Button'

const HeroSection = ({ slice }) => (
    <div
        style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        }}
    >
        <Section bordered={false} fullWidth>
            <Title level={1} style={{ marginTop: 0 }}>
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
        <Section
            containerStyle={{
                marginBottom: 70,
            }}
        >
            <Ratio
                left={3}
                spacer={1}
                right={6}
                leftContent={
                    <>
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
    </div>
)

export default HeroSection
