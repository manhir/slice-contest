import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const Layout = (props) => {
    return (
        <>
            <Header />
            <main
                style={{
                    position: 'relative',
                    zIndex: 0,
                }}
            >
                {props.children}
            </main>
            <Footer />
        </>
    )
}
