import { Header } from '../Header'

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
        </>
    )
}
