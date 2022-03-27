import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import MovieSelection from "./Screen 1/MovieSelection";
import SessionSelection from "./Screen 2/SessionSelection";
import SeatSelection from "./Screen 3/SeatSelection";
import Success from "./Screen 4/Success";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MovieSelection />} />
                <Route path="/filme/:MovieID" element={<SessionSelection /> } />
                <Route path="/sessao/:SessionID" element={<SeatSelection />} />
                <Route path="/sucesso" element={<Success />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;