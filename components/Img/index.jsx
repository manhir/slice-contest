// next/image with layout='fill'
export const Img = ({ src, ...props }) => (
    <div
        style={{
            display: 'block',
            overflow: 'hidden',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            boxSizing: 'border-box',
            margin: 0,
        }}
    >
        <img
            src={src}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                boxSizing: 'border-box',
                padding: 0,
                border: 'none',
                margin: 'auto',
                display: 'block',
                width: 0,
                height: 0,
                minWidth: '100%',
                maxWidth: '100%',
                minHeight: '100%',
                maxHeight: '100%',
                objectFit: 'cover',
            }}
            {...props}
        />
    </div>
)