import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


import { Peliculas } from "../pages/Peliculas";
import { Inicio } from "../pages/Inicio";
import { Series } from "../pages/Series";
import { Header } from "../components/Header";

export const AppRouter = () => {
    return (
        <>
            <BrowserRouter>

                <Header/>

                <Routes>

                    <Route path='/*' element={<Inicio />} />

                    <Route path='/peliculas' element={<Peliculas />} />
                    <Route path='/series' element={<Series />} />

                </Routes>

            </BrowserRouter>
        </>
    )
}
