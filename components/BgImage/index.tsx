import s from './index.module.css'
import Image from 'next/image'
import { CSSProperties } from 'react'
import { Parallax } from 'react-scroll-parallax'

interface BgImageProps {
    src: string
    containerStyle?: CSSProperties
    foregroundStyle?: CSSProperties
    imgClassName?: string
}

export const BgImage: React.FC<BgImageProps> = ({ src, containerStyle, foregroundStyle, imgClassName, children }) => (
    <div className={s.container}
        style={containerStyle}
    >
        <Image
            className={imgClassName}
            objectFit='cover'
            src={src}
            layout='fill'
        />
        <div className={s.foreground}
            style={foregroundStyle}
        >
            {children}
        </div>
    </div>
)