import { Link } from "react-router-dom"
import banner from "/images/banner.png";

export const Header = () => {
    return (
        <header className="relative overflow-hidden group">
            <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/banner.png')]">
                <div className="w-full h-full backdrop-blur-md">
                </div>
            </div>
            <Link to="/ghibli-films">
                <img src={banner} alt="Ghibli Films"
                    className="relative z-10 w-full max-h-78 object-contain" />
            </Link>
        </header>
    )
}