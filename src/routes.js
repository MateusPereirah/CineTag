import Favoritos from "pages/Favoritos";
import Inicio from "./pages/Inicio"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import Container from "components/Container";
import FavoritosProvider from "contexts/Favoritos";

function AppRoutes(){
    return(
    <BrowserRouter>
        <Cabecalho/>
        <FavoritosProvider>
            <Container>
                <Routes>
                    <Route path="/" element={<Inicio />}> </Route>
                    <Route path="/Favoritos" element={<Favoritos />}> </Route>
                </Routes>
            </Container>
        </FavoritosProvider>
        <Rodape/>
    </BrowserRouter>
    );
}

export default AppRoutes;