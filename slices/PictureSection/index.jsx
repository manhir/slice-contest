import { Section } from '@/components/Section'
import { Title } from '@/components/Title'
import { FancyTitle } from '@/components/FancyTitle'

const PictureSection = ({ slice }) => (
    <>
        {slice.items.map((item, i) => (
            <Section
                key={i}
                containerStyle={{
                    backgroundColor:
                        item.background ?? 'var(--color-red)',
                    marginBottom: 1 !== slice.items.length - 1 && 0,
                }}
                style={{
                    maxHeight: 'calc(100vh - 70px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-beteen',
                }}
            >
                <Title
                    level={4}
                    style={{
                        margin: 0,
                        color: item.text ?? 'var(--color-black)',
                    }}
                >
                    <FancyTitle
                        direction={-1}
                        style={{
                            marginTop: '1.5em',
                            marginBottom: '0',
                            paddingBottom: '.5em',
                        }}
                        color={item.text ?? 'var(--color-black)'}
                    >
                        {item.title[0].text ?? 'Placeholder title'}
                    </FancyTitle>
                </Title>
                <img
                    src={item.picture.url ?? '/static/placeholder.svg'}
                    style={{
                        objectFit: 'cover',
                    }}
                />
            </Section>
        ))}
    </>
)

export default PictureSection
