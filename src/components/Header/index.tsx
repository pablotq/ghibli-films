import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header className="relative overflow-hidden group">
            <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/banner.png')]">
                <div className="w-full h-full backdrop-blur-md">
                </div>
            </div>
            <Link to="/">
                <img src="/images/banner.png" alt="Ghibli Films"
                    className="relative z-10 w-full max-h-75 object-contain" />
            </Link>
        </header>
    )
}