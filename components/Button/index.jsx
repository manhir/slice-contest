import Link from 'next/link'

export const Button = ({ href, ...props }) => {
    const style = (
        <style jsx>{`
            .button {
                width: 100%;
                padding: 20px;

                font-family: Obviously Medium;
                font-size: 36px;
                font-weight: medium;
                color: var(--color-white);
                background: var(--color-primary);

                cursor: pointer;
                border: none;

                transition: all .25s;
            }
            .button:hover {
                color: var(--color-primary);
                background-color: transparent;
            }
        `}</style>
    )

    if (href) {
        return (
            <Link href={href}>
                <a>
                    <button {...props} className='button'>
                        {style}
                        {props.children}
                    </button>
                </a>
            </Link>
        )
    }

    return (
        <>
            <button {...props} className='button'>
                {style}
                {props.children}
            </button>
        </>
    )
}
