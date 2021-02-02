import { CSSProperties } from 'react'
import s from './index.module.css'
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

export const Ratio: React.FC<RatioProps> = ({ spacer = undefined, ...props }) => {
    return (
        <div 
            className={cx(s.container, props.reverseMobile && s.reverseMobile)}
            style={props.style}
        >
            <div style={{flex: props.left }}>
                {props.leftContent}
            </div>

            {!spacer ? null : <div style={{ flex: spacer }} />}

            <div style={{ flex: props.right }}>
                {props.rightContent}
            </div>
        </div>
    )
}