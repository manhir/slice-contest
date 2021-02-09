import { createElement } from 'react'
import cx from 'classnames'

const levelClass = new Map([
    [1, 'h1'],
    [2, 'h2'],
    [3, 'h3'],
    [4, 'h4'],
    [5, 'h5'],
    [6, 'h6'],
])

// export type TitleProps = {
//     level?: 1 | 2 | 3 | 4 | 5 | 6
//     style?: React.CSSProperties
// }

export const Title = ({ level = 1, style, ...props }) => {
    const Tag = `h${level}`

    const defStyle = (
        <style jsx>{`
            .title {
                font-family: Obviously Medium;
                font-style: normal;

                align-self: flex-start;
            }

            .h1 {
                font-size: 128px;
                font-family: Obviously Bold;
                line-height: 140px;
            }

            .h2 {
                font-size: 36px;
                font-weight: normal;
            }

            .h3 {
                font-size: 36px;
                font-weight: normal;
            }

            .h4 {
                font-size: 72px;
                font-family: Obviously Bold;
                line-height: 80px;
            }

            @media screen and (max-width: 480px) {
            }
        `}</style>
    )

    return createElement(
        Tag,
        { className: cx('title', levelClass.get(level)), style },
        props.children,
        defStyle
    )
}
