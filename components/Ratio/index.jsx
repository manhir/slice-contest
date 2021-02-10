import { CSSProperties } from 'react'
import cx from 'classnames'
import s from './index.module.css'

// interface RatioProps {
//     left: string | number
//     right: string | number
//     style?: CSSProperties
//     spacer?: string | number

//     leftContent?: React.ReactNode
//     rightContent?: React.ReactNode

//     reverseMobile?: boolean
// }

export const Ratio = ({ spacer = undefined, ...props }) => {
    return (
        <div
            className={cx(s.container, props.reverseMobile && s.reverseMobile)}
            style={props.style}
        >
            <div className={s.item} style={{ flex: props.left }}>
                {props.leftContent}
            </div>

            {!spacer ? null : <div style={{ flex: spacer }} />}

            <div className={s.item} style={{ flex: props.right }}>
                {props.rightContent}
            </div>
        </div>
    )
}
