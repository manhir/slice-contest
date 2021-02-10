import { CSSProperties } from 'react'
import s from './index.module.css'
import cx from 'classnames'

// export type SectionProps = {
//     style?: CSSProperties
//     containerStyle?: CSSProperties
//     className?: string
//     bordered?: boolean
//     fullWidth?: boolean
// }

export const Section = ({ bordered = true, fullWidth = false, ...props }) => {
    return (
        <div className={cx(s.container, bordered && s.bordered)} style={props.containerStyle}>
            <div className={cx(s.section, props.className)} style={props.style}>
                {props.children}
            </div>
        </div>
    )
}
