export const FancyTitle = ({
    count = 4,
    direction = 1,
    color = 'var(--color-primary)',
    ...props
}) => {
    const outlines = []
    for (let i = 0; i < count; i++) {
        outlines[i] = (
            <span key={i} className='stroke'>
                <style jsx>{`
                    .stroke {
                        position: absolute;
                        top: ${(i + 1) * 0.33 * direction}em;
                        left: 0;
                        z-index: ${i};

                        color: transparent;
                        -webkit-text-stroke: 1px ${color};
                        opacity: 0.33;
                    }
                `}</style>
                {props.children}
            </span>
        )
    }

    return (
        <>
            <style jsx>{`
                .container {
                    position: relative;
                    margin-bottom: 1.5em;
                }
                .fill {
                    position: relative;
                    z-index: ${count + 1};
                }
            `}</style>
            <div className={`container ${props.className}`} style={props.style}>
                <span className='fill'>{props.children}</span>
                {outlines}
            </div>
        </>
    )
}
