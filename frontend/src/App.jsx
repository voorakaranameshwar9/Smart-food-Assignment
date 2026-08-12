import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Suppliers from "./pages/Suppliers";
import RaiseQuery from "./pages/RaiseQuery";
import QueryStatus from "./pages/QueryStatus";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Dashboard />} />

                <Route path="/suppliers" element={<Suppliers />} />

                <Route path="/raise-query" element={<RaiseQuery />} />

                <Route path="/query/:id" element={<QueryStatus />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
