import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import MovieSelection from "./MovieSelection";
import SessionSelection from "./SessionSelection";

import loading_gif from "../assets/imgs/loading_gif.gif";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MovieSelection gif={loading_gif} />} />
                <Route path="/filme/:MovieID" element={<SessionSelection /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default App;