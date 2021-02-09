import { RichText } from 'prismic-reactjs'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Section } from '@/components/Section'
import { Button } from '@/components/Button'
import { Title } from '@/components/Title'

SwiperCore.use([Navigation, Pagination])

const SliderSection = ({ slice }) => {
    return (
        <>
            <Section
                containerStyle={{
                    borderBottom: 'none',
                }}
            >
                <Title
                    level={3}
                    style={{
                        margin: '.25em 0 .5em 0',
                    }}
                >
                    {slice.primary.title[0].text ?? 'Placeholder title'}
                </Title>
            </Section>
            <Section
                containerStyle={{
                    height: '100%',
                    justifyContent: 'center',
                    marginBottom: 70,
                }}
                style={{
                    padding: '0',
                }}
                containerStyle={{
                    height: '100%',
                }}
            >
                <Swiper
                    spaceBetween={'8.33%'}
                    slidesPerView={3}
                    navigation
                    // pagination
                    autoplay
                    style={{
                        height: '100%',
                    }}
                >
                    {slice.items.map((item, i) => (
                        <SwiperSlide
                            key={i}
                            style={{
                                flex: '1 1 100%',
                                height: '100%',
                                marginLeft: i == 0 && 'calc(8.33% - 6px)',
                                justifySelf: 'stretch',
                                alignSelf: 'stretch',
                            }}
                        >
                            <div
                                style={{
                                    height: '100%',
                                    borderLeft: 'var(--border)',
                                    borderRight: 'var(--border)',

                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <img
                                    src={item.picture.url}
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                />

                                <Button
                                    style={{
                                        borderTop: 'var(--border)',
                                    }}
                                    href='/'
                                >
                                    {item.button}
                                </Button>
                            </div>
                        </SwiperSlide>
                    ))}
                    <SwiperSlide />
                </Swiper>
            </Section>
        </>
    )
}

export default SliderSection
