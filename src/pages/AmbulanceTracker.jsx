import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	Polyline,
} from "react-leaflet";
import L from "leaflet";
import {
	Ambulance,
	Phone,
	MapPin,
	Clock,
	Navigation,
	Hospital,
	Activity,
	Share2,
	MessageCircle,
	ArrowLeft,
	Shield,
} from "lucide-react";

const createIcon = (color, emoji) =>
	L.divIcon({
		html: `<div style="background:${color};width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px;border:3px solid white;box-shadow:0 4px 10px rgba(0,0,0,0.3);">${emoji}</div>`,
		className: "custom-marker",
		iconSize: [40, 40],
		iconAnchor: [20, 20],
		popupAnchor: [0, -20],
	});

const patientIcon = createIcon("#DC2626", "🆘");
const hospitalIcon = createIcon("#1E40AF", "🏥");
const ambulanceIcon = createIcon("#16A34A", "🚑");

function AmbulanceTracker() {
	const patientLocation = [23.7505, 90.3722];
	const hospitalLocation = [23.7461, 90.3742];

	const [ambulancePosition, setAmbulancePosition] = useState([23.76, 90.365]);
	const [eta, setEta] = useState(8);
	const [progress, setProgress] = useState(0);
	const [callStatus, setCallStatus] = useState("connecting");

	useEffect(() => {
		const interval = setInterval(() => {
			setAmbulancePosition((prev) => {
				const targetLat = patientLocation[0];
				const targetLng = patientLocation[1];
				const newLat = prev[0] + (targetLat - prev[0]) * 0.05;
				const newLng = prev[1] + (targetLng - prev[1]) * 0.05;
				return [newLat, newLng];
			});

			setProgress((prev) => Math.min(prev + 1.5, 100));
			setEta((prev) => Math.max(prev - 0.05, 0));

			if (progress >= 95) {
				setCallStatus("arrived");
			} else if (progress > 5) {
				setCallStatus("en-route");
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [progress]);

	const driverInfo = {
		name: "Karim Ahmed",
		phone: "+880 1712-345678",
		rating: 4.9,
		trips: 1247,
		vehicle: "Toyota Hiace",
		plate: "DHA-AMB-1234",
		avatar: "KA",
	};

	const hospitalInfo = {
		name: "City General Hospital",
		address: "Dhanmondi 27, Dhaka",
		phone: "+880 2-9663477",
		type: "Multi-Specialty",
		distance: "0.6 km from pickup",
	};

	return (
		<div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors">
			<header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30">
				<div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
					<div className="flex items-center gap-3">
						<Link
							to="/dashboard"
							className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
							<ArrowLeft className="h-5 w-5 text-slate-600 dark:text-slate-400" />
						</Link>
						<div>
							<h1 className="font-bold text-slate-900 dark:text-white">
								Live Ambulance Tracking
							</h1>
							<p className="text-xs text-slate-500 dark:text-slate-400">
								Request ID #SA-2024-X7892
							</p>
						</div>
					</div>

					<div className="flex items-center gap-2">
						<span className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-900/30 rounded-full">
							<span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
							<span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
								LIVE
							</span>
						</span>
						<button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
							<Share2 className="h-5 w-5 text-slate-600 dark:text-slate-400" />
						</button>
					</div>
				</div>
			</header>

			<motion.div
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				className={`${callStatus === "arrived" ? "bg-emerald-500" : "bg-gradient-to-r from-red-600 to-orange-600"} text-white px-4 py-3`}>
				<div className="max-w-7xl mx-auto flex items-center justify-between">
					<div className="flex items-center gap-3">
						<motion.div
							animate={{ scale: [1, 1.2, 1] }}
							transition={{ repeat: Infinity, duration: 1.5 }}>
							{callStatus === "arrived" ? (
								<Shield className="h-5 w-5" />
							) : (
								<Ambulance className="h-5 w-5" />
							)}
						</motion.div>
						<div>
							<p className="font-bold text-sm">
								{callStatus === "connecting" && "Connecting to ambulance..."}
								{callStatus === "en-route" &&
									`Ambulance arriving in ${Math.ceil(eta)} minutes`}
								{callStatus === "arrived" && "Ambulance has arrived!"}
							</p>
							<p className="text-xs text-white/80">
								{callStatus === "arrived"
									? "Please proceed to the vehicle"
									: `${progress.toFixed(0)}% of journey complete`}
							</p>
						</div>
					</div>
					<div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-white/20 rounded-full text-xs font-bold">
						ETA {Math.ceil(eta)}:00
					</div>
				</div>
			</motion.div>

			<div className="max-w-7xl mx-auto p-4 lg:p-6">
				<div className="grid lg:grid-cols-3 gap-6">
					<div className="lg:col-span-2">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg"
							style={{ height: "550px" }}>
							<MapContainer
								center={patientLocation}
								zoom={14}
								style={{ height: "100%", width: "100%" }}
								scrollWheelZoom={true}>
								<TileLayer
									attribution="&copy; OpenStreetMap"
									url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
								/>

								<Marker position={patientLocation} icon={patientIcon}>
									<Popup>
										<strong style={{ color: "#DC2626" }}>
											📍 Pickup Location
										</strong>
										<br />
										<span style={{ fontSize: "12px" }}>John Doe • Patient</span>
									</Popup>
								</Marker>

								<Marker position={hospitalLocation} icon={hospitalIcon}>
									<Popup>
										<strong style={{ color: "#1E40AF" }}>
											🏥 {hospitalInfo.name}
										</strong>
										<br />
										<span style={{ fontSize: "12px" }}>
											{hospitalInfo.address}
										</span>
									</Popup>
								</Marker>

								<Marker position={ambulancePosition} icon={ambulanceIcon}>
									<Popup>
										<strong style={{ color: "#16A34A" }}>🚑 Ambulance</strong>
										<br />
										<span style={{ fontSize: "12px" }}>
											Driver: {driverInfo.name}
										</span>
									</Popup>
								</Marker>

								<Polyline
									positions={[ambulancePosition, patientLocation]}
									color="#16A34A"
									weight={4}
									opacity={0.6}
									dashArray="10, 10"
								/>

								<Polyline
									positions={[patientLocation, hospitalLocation]}
									color="#1E40AF"
									weight={4}
									opacity={0.4}
									dashArray="5, 10"
								/>
							</MapContainer>
						</motion.div>

						<div className="mt-4 flex flex-wrap items-center gap-4 px-4 py-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
							<div className="flex items-center gap-2">
								<div className="w-3 h-3 bg-red-600 rounded-full"></div>
								<span className="text-xs text-slate-600 dark:text-slate-400">
									Pickup
								</span>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-3 h-3 bg-emerald-600 rounded-full animate-pulse"></div>
								<span className="text-xs text-slate-600 dark:text-slate-400">
									Ambulance (Live)
								</span>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-3 h-3 bg-blue-600 rounded-full"></div>
								<span className="text-xs text-slate-600 dark:text-slate-400">
									Hospital
								</span>
							</div>
						</div>
					</div>

					<div className="space-y-6">
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
							<div className="p-5 border-b border-slate-100 dark:border-slate-800">
								<h3 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
									<Ambulance className="h-4 w-4 text-emerald-500" /> Your Driver
								</h3>
							</div>
							<div className="p-5">
								<div className="flex items-center gap-4 mb-4">
									<div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-green-600 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg">
										{driverInfo.avatar}
									</div>
									<div className="flex-1">
										<p className="font-bold text-slate-900 dark:text-white">
											{driverInfo.name}
										</p>
										<div className="flex items-center gap-3 mt-1">
											<span className="text-xs text-amber-500 font-bold">
												★ {driverInfo.rating}
											</span>
											<span className="text-xs text-slate-500 dark:text-slate-400">
												{driverInfo.trips} trips
											</span>
										</div>
									</div>
								</div>

								<div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-3 mb-4">
									<div className="flex justify-between items-center mb-2">
										<span className="text-xs text-slate-500 dark:text-slate-400">
											Vehicle
										</span>
										<span className="text-xs font-semibold text-slate-900 dark:text-white">
											{driverInfo.vehicle}
										</span>
									</div>
									<div className="flex justify-between items-center">
										<span className="text-xs text-slate-500 dark:text-slate-400">
											License Plate
										</span>
										<span className="text-xs font-bold text-slate-900 dark:text-white font-mono bg-yellow-100 dark:bg-yellow-900/30 px-2 py-0.5 rounded">
											{driverInfo.plate}
										</span>
									</div>
								</div>

								<div className="grid grid-cols-2 gap-2">
									<button className="flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold transition-colors">
										<Phone className="h-4 w-4" /> Call
									</button>
									<button className="flex items-center justify-center gap-2 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-semibold transition-colors">
										<MessageCircle className="h-4 w-4" /> Chat
									</button>
								</div>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.1 }}
							className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5">
							<h3 className="font-bold text-slate-900 dark:text-white text-sm mb-4 flex items-center gap-2">
								<Navigation className="h-4 w-4 text-blue-500" /> Trip Details
							</h3>

							<div className="mb-5">
								<div className="flex justify-between text-xs mb-2">
									<span className="text-slate-500 dark:text-slate-400">
										Journey Progress
									</span>
									<span className="font-bold text-emerald-600">
										{progress.toFixed(0)}%
									</span>
								</div>
								<div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
									<motion.div
										initial={{ width: 0 }}
										animate={{ width: `${progress}%` }}
										transition={{ duration: 1 }}
										className="h-full bg-gradient-to-r from-emerald-400 to-green-600 rounded-full"></motion.div>
								</div>
							</div>

							<div className="grid grid-cols-2 gap-3">
								<div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-3 text-center">
									<Clock className="h-5 w-5 text-red-500 mx-auto mb-1" />
									<p className="text-lg font-bold text-slate-900 dark:text-white">
										{Math.ceil(eta)}
									</p>
									<p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase">
										Min ETA
									</p>
								</div>
								<div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-3 text-center">
									<MapPin className="h-5 w-5 text-blue-500 mx-auto mb-1" />
									<p className="text-lg font-bold text-slate-900 dark:text-white">
										{(2.3 - (progress / 100) * 2.3).toFixed(1)}
									</p>
									<p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase">
										KM Away
									</p>
								</div>
							</div>

							<div className="mt-5 space-y-3">
								<div className="flex items-center gap-3 text-xs">
									<div
										className={`w-2 h-2 rounded-full ${progress > 0 ? "bg-emerald-500" : "bg-slate-300"}`}></div>
									<span
										className={
											progress > 0
												? "text-slate-900 dark:text-white font-medium"
												: "text-slate-400"
										}>
										Driver dispatched
									</span>
								</div>
								<div className="flex items-center gap-3 text-xs">
									<div
										className={`w-2 h-2 rounded-full ${progress > 30 ? "bg-emerald-500" : "bg-slate-300"}`}></div>
									<span
										className={
											progress > 30
												? "text-slate-900 dark:text-white font-medium"
												: "text-slate-400"
										}>
										En route to pickup
									</span>
								</div>
								<div className="flex items-center gap-3 text-xs">
									<div
										className={`w-2 h-2 rounded-full ${progress > 70 ? "bg-emerald-500" : "bg-slate-300"}`}></div>
									<span
										className={
											progress > 70
												? "text-slate-900 dark:text-white font-medium"
												: "text-slate-400"
										}>
										Approaching location
									</span>
								</div>
								<div className="flex items-center gap-3 text-xs">
									<div
										className={`w-2 h-2 rounded-full ${progress >= 100 ? "bg-emerald-500 animate-pulse" : "bg-slate-300"}`}></div>
									<span
										className={
											progress >= 100
												? "text-slate-900 dark:text-white font-medium"
												: "text-slate-400"
										}>
										Arrived at pickup
									</span>
								</div>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.2 }}
							className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-5 text-white relative overflow-hidden">
							<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10"></div>
							<div className="relative z-10">
								<Hospital className="h-6 w-6 mb-3 text-white/80" />
								<p className="text-xs text-blue-100 uppercase tracking-wider mb-1">
									Destination Hospital
								</p>
								<h3 className="font-bold text-lg mb-1">{hospitalInfo.name}</h3>
								<p className="text-sm text-blue-100 mb-3">
									{hospitalInfo.address}
								</p>

								<div className="flex items-center gap-2 mb-4 text-xs">
									<Activity className="h-3 w-3" />
									<span>
										{hospitalInfo.type} • {hospitalInfo.distance}
									</span>
								</div>

								<button className="w-full py-2.5 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-colors">
									<Phone className="h-4 w-4" /> Call Hospital
								</button>
							</div>
						</motion.div>

						<motion.button
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.3 }}
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							className="w-full py-3 bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-900 text-red-600 dark:text-red-400 rounded-xl text-sm font-bold hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
							Cancel Request
						</motion.button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AmbulanceTracker;
