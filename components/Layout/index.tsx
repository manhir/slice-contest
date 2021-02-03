import { Header } from '../Header'

export const Layout = (props) => {
    return (
        <main>
            <Header />
            {props.children}
        </main>
    )
}
