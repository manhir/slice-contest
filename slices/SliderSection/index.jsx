import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Section } from '@/components/Section'
import { Button } from '@/components/Button'
import { Title } from '@/components/Title'
import { Img } from '@/components/Img'
import { createBreakpoint } from 'react-use'
import s from './index.module.css'

SwiperCore.use([Navigation])

const SliderSection = ({ slice }) => {
    const useMobile = createBreakpoint({
        mobile: 0,
        desktop: 1440,
    })
    const isMobile = useMobile() == 'mobile'
    console.log(useMobile())
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
                    spaceBetween={isMobile ? '25%' : '10%'}
                    slidesPerView='auto'
                    navigation
                    className={s.swiper}
                >
                    {slice.items.map((item, i) => (
                        <SwiperSlide
                            key={i}
                            className={s.slide}
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
                                    <Img
                                        src={item.picture.url}
                                        style={{
                                            objectFit: 'contain',
                                        }}
                                    />
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
                </Swiper>
            </Section>
        </>
    )
}

export default SliderSection
