import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Section } from '@/components/Section'
import { Button } from '@/components/Button'
import { Title } from '@/components/Title'
import { Img } from '@/components/Img'

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
                <Title level={3}>
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
                                <div
                                    style={{
                                        flex: '1 0 auto',
                                        position: 'relative',
                                    }}
                                >
                                    <Img src={item.picture.url} />
                                </div>

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
