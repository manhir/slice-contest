import Link from 'next/link'
import s from './index.module.css'

export const Button = ({ href, ...props }) => {
    if (href) {
        return (
            <Link href={href}>
                <a>
                    <button {...props} className={s.button}>
                        {props.children}
                    </button>
                </a>
            </Link>
        )
    }

    return (
        <>
            <button {...props} className={s.button}>
                {props.children}
            </button>
        </>
    )
}
