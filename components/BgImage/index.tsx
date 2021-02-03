import Image from 'next/image'
import { CSSProperties } from 'react'

interface BgImageProps {
    src: string
    containerStyle?: CSSProperties
    foregroundStyle?: CSSProperties
    imgClassName?: string
}

export const BgImage: React.FC<BgImageProps> = ({
    src,
    containerStyle,
    foregroundStyle,
    imgClassName,
    children,
}) => (
    <>
        <style jsx>{`
            .container {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                position: relative;
            }

            .foreground {
                width: 100%;
                position: absolute;
                z-index: 1;
            }
        `}</style>
        <div className={'container'} style={containerStyle}>
            <Image
                className={imgClassName}
                objectFit='cover'
                src={src}
                layout='fill'
            />
            <div className={'foreground'} style={foregroundStyle}>
                {children}
            </div>
        </div>
    </>
)
