import { Route, Routes } from 
"react-router-dom";
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { Films } from "../pages/Films";

export const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/films/:id" element={<Films/>}/>
            </Route>
        </Routes>
    )
}