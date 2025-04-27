import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import AdminDashboard from "./pages/AdminDashboard";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;