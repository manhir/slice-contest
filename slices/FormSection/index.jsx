import { Section } from '@/components/Section'
import { Title } from '@/components/Title'
import { Ratio } from '@/components/Ratio'
import { Button } from '@/components/Button'
import { useForm } from 'react-hook-form'
import { RichText } from 'prismic-reactjs'
import s from './index.module.css'

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
                    reverseMobile
                    leftContent={
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className={s.form}
                        >
                            {slice.items.map((item, i) => (
                                <input
                                    key={i}
                                    name={item.name}
                                    placeholder={item.placeholder}
                                    ref={register}
                                    type={item.type}
                                    style={{
                                        borderBottom: i !== slice.items.length-1 && 'var(--border)',
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
                        <>
                            <div
                                style={{
                                    padding: '0 20px',
                                }}
                            >
                                <RichText render={slice.primary.description} />
                            </div>
                        </>
                    }
                />
            </Section>
        </>
    )
}

export default FormSection
