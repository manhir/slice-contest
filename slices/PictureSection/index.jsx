import { Section } from '@/components/Section'
import { Title } from '@/components/Title'
import { FancyTitle } from '@/components/FancyTitle'

const PictureSection = ({ slice }) => (
    <Section
        containerStyle={{
            backgroundColor: slice.primary.background ?? 'var(--color-red)',
            marginBottom: 70,
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
                color: slice.primary.text ?? 'var(--color-black)',
            }}
        >
            <FancyTitle
                direction={-1}
                style={{
                    marginTop: '1.5em',
                    marginBottom: '0',
                    paddingBottom: '.5em',
                }}
                color={slice.primary.text ?? 'var(--color-black)'}
            >
                {slice.primary.title[0].text ?? 'Placeholder title'}
            </FancyTitle>
        </Title>
        <img
            src={slice.primary.picture.url ?? '/static/placeholder.svg'}
            style={{
                objectFit: 'cover',
            }}
        />
    </Section>
)

export default PictureSection
