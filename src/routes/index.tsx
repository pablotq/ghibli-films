import { Route, Routes } from 
"react-router-dom";
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { Films } from "../pages/Films";

export const Router = () => {
    return(
        <Routes>
            <Route path="/ghibli-films" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/ghibli-films/films/:id" element={<Films/>}/>
            </Route>
        </Routes>
    )
}
