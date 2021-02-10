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
                    marginBottom: 0,
                }}
            >
                <Title
                    level={3}
                >
                    {slice.primary.title[0].text ?? 'Placeholder title'}
                </Title>
            </Section>
            <Section
                containerStyle={{
                    height: '100%',
                }}
                style={{
                    padding: '0',
                }}
            >
                <Swiper
                    spaceBetween={'8.33%'}
                    slidesPerView={3}
                    navigation
                    autoplay
                    style={{
                        height: '400px',
                    }}
                >
                    {slice.items.map((item, i) => (
                        <SwiperSlide
                            key={i}
                            style={{
                                height: '100%',
                                marginLeft: i == 0 && '8.33%',
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
                                        height: '100%',
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
