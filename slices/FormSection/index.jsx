import { Section } from '@/components/Section'
import { Title } from '@/components/Title'
import { Ratio } from '@/components/Ratio'
import { Button } from '@/components/Button'
import { useForm } from 'react-hook-form'
import { RichText } from 'prismic-reactjs'

const FormSection = ({ slice }) => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    }
    return (
        <>
            <Section
                containerStyle={{
                    borderBottom: 'none',
                    marginBottom: 0,
                }}
            >
                <Title level={3}>{slice.primary.title[0].text}</Title>
            </Section>
            <Section>
                <Ratio
                    left={4}
                    spacer={1}
                    right={5}
                    leftContent={
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            style={{
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            {slice.items.map((item, i) => (
                                <input
                                    key={i}
                                    name={item.name}
                                    placeholder={item.placeholder}
                                    ref={register}
                                    type={item.type}
                                    style={{
                                        background: 'var(--color-black)',
                                        padding: '20px',
                                        fontFamily: 'Obviously',
                                        fontSize: '16px',
                                        color: 'var(--color-white)',
                                        border: 'none',
                                        borderBottom:
                                            i !== slice.items.length - 1
                                                ? 'var(--border)'
                                                : 'none',
                                        height: 70,
                                    }}
                                />
                            ))}
                            <Button
                                type='submit'
                                style={{
                                    borderTop: 'var(--border)',
                                }}
                            >
                                Send
                            </Button>

                            <div
                                style={{
                                    position: 'absolute',
                                    bottom: -2,
                                    width: '100%',
                                    height: 0,
                                    borderBottom: 'var(--border)',
                                }}
                            />
                        </form>
                    }
                    rightContent={
                        <div
                            style={{
                                padding: '0 20px',
                            }}
                        >
                            <RichText render={slice.primary.description} />
                        </div>
                    }
                />
            </Section>
        </>
    )
}

export default FormSection
