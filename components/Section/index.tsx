import { CSSProperties } from 'react'

export type SectionProps = {
    style?: CSSProperties
    containerStyle?: CSSProperties
    className?: string
    bordered?: boolean
    fullWidth?: boolean
}

export const Section: React.FC<SectionProps> = ({bordered=true, fullWidth=false, ...props}) => {
    return (
        <>
            <style jsx>{`
                .container {
                    display: flex;
                    align-items: center;
                    justify-content: ${fullWidth ? 'stretch' : 'center'};
                    height: 100%;

                    border-top: ${bordered && 'var(--border);'}
                    border-bottom: ${bordered && 'var(--border);'}
                }
                .section {
                    padding: 0 8.33%;
                    max-width: 1440px;
                    width: 100%;
                }
            `}</style>
            <div className='container' style={props.containerStyle}>
                <div
                    className={`section ${props.className}`}
                    style={props.style}
                >
                    {props.children}
                </div>
            </div>
        </>
    )
}
