import Favoritos from "pages/Favoritos";
import Inicio from "./pages/Inicio"
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PaginaBase from "pages/PaginaBase";

function AppRoutes(){
    return(
    <BrowserRouter>  

                <Routes>
                    <Route path="/" element={<PaginaBase />}>
                        <Route index element={<Inicio />}></Route>
                        <Route path="/Favoritos" element={<Favoritos />}> </Route>
                    </Route> 
                </Routes>

    </BrowserRouter>
    );
}

export default AppRoutes;