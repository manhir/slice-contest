import { CSSProperties } from 'react'

export type SectionProps = {
    style?: CSSProperties
    className?: string
}

export const Section: React.FC<SectionProps> = (props) => {
    return (
        <>
            <style jsx>{`
                .section {
                    padding: 0 8.33%;
                    max-width: 1440px;
                    width: 100%;
                }
            `}</style>
            <section
                className={`section ${props.className}`}
                style={props.style}
            >
                {props.children}
            </section>
        </>
    )
}
