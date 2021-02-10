import s from './index.module.css'
import cx from 'classnames'

export const FancyTitle = ({
    count = 4,
    direction = 1,
    color = 'var(--color-primary)',
    ...props
}) => {
    const outlines = []
    for (let i = 0; i < count; i++) {
        outlines[i] = (
            <span
                key={i}
                className={s.stroke}
                style={{
                    top: `${(i + 1) * 0.33 * direction}em`,
                    zIndex: i,
                    WebkitTextStroke: `1px ${color}`,
                }}
            >
                {props.children}
            </span>
        )
    }

    return (
        <>
            <div
                className={cx(s.container, props.className)}
                style={{
                    zIndex: `${count + 1}`,
                    ...props.style,
                }}
            >
                <span className={s.fill}>{props.children}</span>
                {outlines}
            </div>
        </>
    )
}
