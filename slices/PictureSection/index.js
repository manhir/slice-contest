import { Section } from '@/components/Section'
import { Title } from '@/components/Title'
import { FancyTitle } from '@/components/FancyTitle'
import Image from 'next/image'

const PictureSection = ({ slice }) => (
    <Section
        fullWidth
        containerStyle={{
            height: '100vh',
            backgroundColor: slice.primary.background ?? 'var(--color-red)',
            marginBottom: 70,
        }}
        style={{
            height: '100%',
            maxWidth: '100%',
            display: 'flex',
            flexDirection: 'column',
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
                style={{ marginTop: '1.5em' }}
                color={slice.primary.text ?? 'var(--color-black)'}
            >
                {slice.primary.title[0].text ?? 'Placeholder title'}
            </FancyTitle>
        </Title>
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Image
                src={slice.primary.picture.url ?? '/static/placeholder.svg'}
                width={slice.primary.picture.dimensions.width ?? 300}
                height={slice.primary.picture.dimensions.height ?? 300}
                style={{
                    height: '100%',
                }}
            />
        </div>
    </Section>
)

export default PictureSection
