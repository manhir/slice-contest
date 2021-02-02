import { CSSProperties } from 'react'
import cx from 'classnames'

interface RatioProps {
    left: string | number
    right: string | number
    style?: CSSProperties
    spacer?: string | number

    leftContent?: React.ReactNode
    rightContent?: React.ReactNode

    reverseMobile?: boolean
}

export const Ratio: React.FC<RatioProps> = ({
    spacer = undefined,
    ...props
}) => {
    return (
        <>
            <style jsx>{`
                .container {
                    display: flex;
                }

                .item {
                    border-left: var(--border);
                    border-right: var(--border);
                }

                @media screen and (max-width: 1280px) {
                    .container {
                        flex-direction: column;
                    }
                    .reverseMobile {
                        flex-direction: column-reverse;
                    }
                }
            `}</style>
            <div
                className={cx(
                    'container',
                    props.reverseMobile && 'reverseMobile'
                )}
                style={props.style}
            >
                <div className='item' style={{ flex: props.left }}>
                    {props.leftContent}
                </div>

                {!spacer ? null : <div style={{ flex: spacer }} />}

                <div className='item' style={{ flex: props.right }}>
                    {props.rightContent}
                </div>
            </div>
        </>
    )
}
