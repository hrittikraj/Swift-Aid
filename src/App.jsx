import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PatientDashboard from "./pages/PatientDashboard";
import HospitalDashboard from "./pages/HospitalDashboard";
import AmbulanceTracker from "./pages/AmbulanceTracker";
import AmbulanceServiceDashboard from "./pages/AmbulanceServiceDashboard";
import AdminPanel from "./pages/AdminPanel";
import Profile from "./pages/Profile";

function App() {
	return (
		<div className="min-h-screen flex flex-col bg-light dark:bg-slate-950 transition-colors">
			<Navbar />
			<main className="flex-grow">
				<Routes>
					{/* Public Pages */}
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />

					{/* Dashboards */}
					<Route path="/dashboard" element={<PatientDashboard />} />
					<Route path="/hospital" element={<HospitalDashboard />} />
					<Route path="/service" element={<AmbulanceServiceDashboard />} />
					<Route path="/admin" element={<AdminPanel />} />

					{/* Features */}
					<Route path="/tracker" element={<AmbulanceTracker />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
