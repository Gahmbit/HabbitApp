import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<h1>ERROR</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
