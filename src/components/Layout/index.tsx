import { Outlet } from "react-router-dom"
import { Header } from "../Header"
import { Background } from "../Background"

export const Layout = () => {
    return (
        <Background>
            <Header />
            <Outlet />
        </Background>
    )
}