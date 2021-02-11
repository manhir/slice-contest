import { Section } from '@/components/Section'
import { Title } from '@/components/Title'
import { FancyTitle } from '@/components/FancyTitle'
import { Img } from '@/components/Img'
import s from './index.module.css'

const PictureSection = ({ slice }) => (
    <>
        {slice.items.map((item, i) => (
            <Section
                key={i}
                containerStyle={{
                    backgroundColor: item.background ?? 'var(--color-red)',
                    marginBottom: i !== slice.items.length - 1 && 0,
                    borderTop: i !== 0 && 'none',
                }}
                style={{
                    minHeight: 'calc(100vh - 70px)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
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
                <div
                    style={{
                        position: 'relative',
                        flex: '1 0 100%',
                    }}
                >
                    <Img
                        src={item.picture.url ?? '/static/placeholder.svg'}
                        className={s.img}
                    />
                </div>
            </Section>
        ))}
    </>
)

export default PictureSection
