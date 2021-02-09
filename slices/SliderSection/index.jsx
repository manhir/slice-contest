import { RichText } from 'prismic-reactjs'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Section } from '@/components/Section'
import { Button } from '@/components/Button'

SwiperCore.use([Navigation, Pagination])

const SliderSection = ({ slice }) => {
    return (
        <Section
            fullWidth
            containerStyle={{
                minHeight: '300px',
                justifyContent: 'center',
                marginBottom: 70,
            }}
            style={{
                padding: 0,
                height: '100%',
                // overflow: 'hidden',
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
                            width: '100%',
                            height: '100%',
                            marginLeft: i == 0 && 'calc(8.33% - 20px - 2px)',
                            borderLeft: 'var(--border)',
                            borderRight: 'var(--border)',
                        }}
                    >
                        <div
                            style={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <img
                                src={item.picture.url}
                                style={{
                                    width: '100%',
                                }}
                            />

                            <Button
                                style={{
                                    borderTop: 'var(--border)',
                                }}
                            >
                                {item.button}
                            </Button>
                        </div>
                    </SwiperSlide>
                ))}
                <SwiperSlide />
            </Swiper>
        </Section>
    )
}

export default SliderSection
