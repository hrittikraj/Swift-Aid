import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
	Ambulance,
	MapPin,
	Clock,
	Activity,
	AlertCircle,
	CheckCircle2,
	ChevronRight,
	Bell,
	Search,
	Menu,
	X,
	LogOut,
	Settings,
	HelpCircle,
	Plus,
	TrendingUp,
	Phone,
	Navigation,
	User,
	DollarSign,
	Star,
	Calendar,
	BarChart3,
	Wrench,
	Users,
	Award,
	Zap,
} from "lucide-react";

function AmbulanceServiceDashboard() {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [serviceStatus, setServiceStatus] = useState("online");

	const stats = [
		{
			label: "Today's Trips",
			value: 14,
			change: "+3 vs yesterday",
			icon: Ambulance,
			color: "emerald",
		},
		{
			label: "Active Vehicles",
			value: "8/12",
			change: "4 in maintenance",
			icon: Activity,
			color: "blue",
		},
		{
			label: "Earnings Today",
			value: "৳18,400",
			change: "+22% this week",
			icon: DollarSign,
			color: "amber",
		},
		{
			label: "Avg Rating",
			value: "4.8",
			change: "Based on 247 trips",
			icon: Star,
			color: "purple",
		},
	];

	const incomingRequests = [
		{
			id: 1,
			patient: "Sarah Khan",
			condition: "Cardiac Emergency",
			priority: "Critical",
			distance: "1.2 km",
			eta: "4 min",
			address: "Dhanmondi 27",
			time: "2 min ago",
		},
		{
			id: 2,
			patient: "Rahim Hossain",
			condition: "Road Accident",
			priority: "High",
			distance: "2.8 km",
			eta: "7 min",
			address: "Gulshan 1",
			time: "5 min ago",
		},
		{
			id: 3,
			patient: "Karim Ali",
			condition: "Severe Burns",
			priority: "High",
			distance: "4.5 km",
			eta: "12 min",
			address: "Banani",
			time: "8 min ago",
		},
	];

	const fleetVehicles = [
		{
			id: "AMB-001",
			driver: "Karim Ahmed",
			status: "on-trip",
			plate: "DHA-1234",
			currentTrip: "Trip #4892",
			battery: 85,
		},
		{
			id: "AMB-002",
			driver: "Hasan Khan",
			status: "available",
			plate: "DHA-5678",
			currentTrip: null,
			battery: 92,
		},
		{
			id: "AMB-003",
			driver: "Mahmud Rahman",
			status: "on-trip",
			plate: "DHA-9012",
			currentTrip: "Trip #4893",
			battery: 67,
		},
		{
			id: "AMB-004",
			driver: "Sajid Khan",
			status: "available",
			plate: "DHA-3456",
			currentTrip: null,
			battery: 100,
		},
		{
			id: "AMB-005",
			driver: "Fahim Ali",
			status: "maintenance",
			plate: "DHA-7890",
			currentTrip: null,
			battery: 0,
		},
	];

	const recentTrips = [
		{
			id: 4890,
			patient: "Tania Begum",
			from: "Mirpur",
			to: "Square Hospital",
			time: "2 hrs ago",
			status: "Completed",
			earnings: "৳1,800",
		},
		{
			id: 4889,
			patient: "Imran Hossain",
			from: "Uttara",
			to: "Apollo Hospital",
			time: "3 hrs ago",
			status: "Completed",
			earnings: "৳2,200",
		},
		{
			id: 4888,
			patient: "Nadia Rahman",
			from: "Mohammadpur",
			to: "United Hospital",
			time: "5 hrs ago",
			status: "Completed",
			earnings: "৳1,500",
		},
	];

	const navItems = [
		{ icon: Activity, label: "Dashboard", active: true },
		{ icon: AlertCircle, label: "Incoming Requests", badge: "3" },
		{ icon: Ambulance, label: "Fleet Management" },
		{ icon: Users, label: "Drivers" },
		{ icon: BarChart3, label: "Analytics" },
		{ icon: DollarSign, label: "Earnings" },
		{ icon: Calendar, label: "Trip History" },
	];

	const colorMap = {
		red: {
			bg: "bg-red-50 dark:bg-red-900/20",
			text: "text-red-600 dark:text-red-400",
			dot: "bg-red-500",
		},
		blue: {
			bg: "bg-blue-50 dark:bg-blue-900/20",
			text: "text-blue-600 dark:text-blue-400",
			dot: "bg-blue-500",
		},
		emerald: {
			bg: "bg-emerald-50 dark:bg-emerald-900/20",
			text: "text-emerald-600 dark:text-emerald-400",
			dot: "bg-emerald-500",
		},
		amber: {
			bg: "bg-amber-50 dark:bg-amber-900/20",
			text: "text-amber-600 dark:text-amber-400",
			dot: "bg-amber-500",
		},
		purple: {
			bg: "bg-purple-50 dark:bg-purple-900/20",
			text: "text-purple-600 dark:text-purple-400",
			dot: "bg-purple-500",
		},
	};

	const getVehicleStatus = (status) => {
		const statuses = {
			"on-trip": {
				label: "On Trip",
				bg: "bg-amber-50 dark:bg-amber-900/30",
				text: "text-amber-700 dark:text-amber-400",
				dot: "bg-amber-500",
			},
			available: {
				label: "Available",
				bg: "bg-emerald-50 dark:bg-emerald-900/30",
				text: "text-emerald-700 dark:text-emerald-400",
				dot: "bg-emerald-500",
			},
			maintenance: {
				label: "Maintenance",
				bg: "bg-red-50 dark:bg-red-900/30",
				text: "text-red-700 dark:text-red-400",
				dot: "bg-red-500",
			},
		};
		return statuses[status];
	};

	return (
		<div className="min-h-screen bg-[#FAFAFA] dark:bg-slate-950 transition-colors">
			<button
				onClick={() => setSidebarOpen(!sidebarOpen)}
				className="lg:hidden fixed top-24 left-4 z-50 p-2.5 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-100 dark:border-slate-700">
				{sidebarOpen ? (
					<X className="h-5 w-5 dark:text-white" />
				) : (
					<Menu className="h-5 w-5 dark:text-white" />
				)}
			</button>

			{/* Sidebar */}
			<aside
				className={`fixed inset-y-0 left-0 z-40 w-72 bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} flex flex-col`}>
				<div className="px-6 py-6">
					<Link to="/" className="flex items-center gap-3">
						<div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-700 rounded-xl flex items-center justify-center shadow-md">
							<Ambulance className="h-5 w-5 text-white" />
						</div>
						<div>
							<p className="text-lg font-bold text-slate-900 dark:text-white leading-none">
								Swift<span className="text-emerald-600">Aid</span>
							</p>
							<p className="text-xs text-slate-400 mt-0.5">Service Portal</p>
						</div>
					</Link>
				</div>

				{/* Status Toggle */}
				<div className="px-4 mb-3">
					<div
						className={`p-3 rounded-xl ${serviceStatus === "online" ? "bg-emerald-50 dark:bg-emerald-900/20" : "bg-slate-100 dark:bg-slate-800"}`}>
						<div className="flex items-center justify-between mb-2">
							<span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
								Service Status
							</span>
							<span
								className={`text-xs font-bold ${serviceStatus === "online" ? "text-emerald-600" : "text-slate-500"}`}>
								{serviceStatus.toUpperCase()}
							</span>
						</div>
						<button
							onClick={() =>
								setServiceStatus(
									serviceStatus === "online" ? "offline" : "online",
								)
							}
							className={`w-full py-2 rounded-lg text-xs font-bold transition-colors ${
								serviceStatus === "online"
									? "bg-emerald-600 text-white hover:bg-emerald-700"
									: "bg-slate-300 text-slate-700 hover:bg-slate-400"
							}`}>
							{serviceStatus === "online" ? "Go Offline" : "Go Online"}
						</button>
					</div>
				</div>

				<div className="px-6 mt-2 mb-3">
					<p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
						Operations
					</p>
				</div>

				<nav className="px-4 space-y-1 flex-1">
					{navItems.map((item) => {
						const Icon = item.icon;
						return (
							<a
								key={item.label}
								href="#"
								className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all relative group ${
									item.active
										? "bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 text-emerald-700 dark:text-emerald-400 shadow-sm"
										: "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
								}`}>
								<Icon
									className={`h-5 w-5 ${item.active ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400"}`}
								/>
								<span className="flex-1">{item.label}</span>
								{item.badge && (
									<span className="text-[10px] font-bold px-2 py-0.5 bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 rounded-full animate-pulse">
										{item.badge}
									</span>
								)}
								{item.active && (
									<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-emerald-600 rounded-r-full"></div>
								)}
							</a>
						);
					})}
				</nav>

				<div className="px-4 pb-2">
					<div className="border-t border-slate-100 dark:border-slate-800 my-4"></div>
					<a
						href="#"
						className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
						<Settings className="h-4 w-4 text-slate-400" /> Settings
					</a>
					<a
						href="#"
						className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
						<HelpCircle className="h-4 w-4 text-slate-400" /> Help Center
					</a>
				</div>

				<div className="p-4 m-4 mt-0 bg-slate-50 dark:bg-slate-800 rounded-2xl">
					<div className="flex items-center gap-3">
						<div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
							DM
						</div>
						<div className="flex-1 min-w-0">
							<p className="font-semibold text-slate-900 dark:text-white text-sm truncate">
								Dhaka Medical
							</p>
							<p className="text-xs text-slate-500 dark:text-slate-400 truncate">
								Service ID #SVC-001
							</p>
						</div>
						<button className="p-1.5 hover:bg-white dark:hover:bg-slate-700 rounded-lg transition-colors">
							<LogOut className="h-4 w-4 text-slate-400" />
						</button>
					</div>
				</div>
			</aside>

			{/* Main Content */}
			<main className="lg:ml-72">
				<header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800 sticky top-0 z-30">
					<div className="px-6 lg:px-10 py-4 flex items-center justify-between gap-4">
						<div className="flex-1 max-w-xl ml-12 lg:ml-0">
							<div className="relative">
								<Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
								<input
									type="text"
									placeholder="Search trips, drivers, vehicles..."
									className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-transparent rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:bg-white dark:focus:bg-slate-700 focus:border-slate-200 dark:focus:border-slate-600 transition-all"
								/>
							</div>
						</div>

						<div className="flex items-center gap-2">
							<button className="relative p-2.5 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors">
								<Bell className="h-5 w-5 text-slate-600 dark:text-slate-400" />
								<span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-slate-900 animate-pulse"></span>
							</button>
						</div>
					</div>
				</header>

				<div className="p-6 lg:p-10 space-y-8">
					<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
						<div>
							<p className="text-sm font-medium text-emerald-600 mb-1">
								Service Overview,
							</p>
							<h1 className="text-3xl font-bold text-slate-900 dark:text-white">
								Dhaka Medical Ambulance Service
							</h1>
							<p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
								Real-time fleet management and trip operations
							</p>
						</div>
						<div className="flex gap-2">
							<button className="px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
								Reports
							</button>
							<button className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-medium transition-colors flex items-center gap-2">
								<Plus className="h-4 w-4" /> Add Vehicle
							</button>
						</div>
					</div>

					{/* Live Status Banner */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 rounded-2xl p-6 shadow-xl shadow-emerald-200/40 relative overflow-hidden">
						<div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16"></div>
						<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
							<div className="flex items-center gap-4">
								<div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
									<Zap className="h-7 w-7 text-white animate-pulse" />
								</div>
								<div>
									<h2 className="text-xl font-bold text-white">
										3 Active Trips in Progress
									</h2>
									<p className="text-emerald-100 text-sm">
										All vehicles GPS-tracked and on schedule
									</p>
								</div>
							</div>
							<div className="flex gap-3">
								<div className="text-center">
									<p className="text-2xl font-bold text-white">8</p>
									<p className="text-xs text-emerald-100">Available</p>
								</div>
								<div className="w-px h-10 bg-white/20"></div>
								<div className="text-center">
									<p className="text-2xl font-bold text-white">3</p>
									<p className="text-xs text-emerald-100">On Trip</p>
								</div>
								<div className="w-px h-10 bg-white/20"></div>
								<div className="text-center">
									<p className="text-2xl font-bold text-white">1</p>
									<p className="text-xs text-emerald-100">Maintenance</p>
								</div>
							</div>
						</div>
					</motion.div>

					{/* KPI Cards */}
					<div>
						<div className="flex items-center justify-between mb-4">
							<h2 className="text-base font-bold text-slate-900 dark:text-white">
								Today's Performance
							</h2>
							<span className="text-xs text-slate-400">Last 24 hours</span>
						</div>
						<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
							{stats.map((stat, i) => {
								const Icon = stat.icon;
								const colors = colorMap[stat.color];
								return (
									<motion.div
										key={i}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: i * 0.08 }}
										whileHover={{ y: -2 }}
										className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-100 dark:border-slate-800 hover:shadow-md transition-all">
										<div className="flex items-start justify-between mb-4">
											<div
												className={`w-10 h-10 ${colors.bg} rounded-xl flex items-center justify-center ${colors.text}`}>
												<Icon className="h-5 w-5" />
											</div>
											<TrendingUp className="h-4 w-4 text-emerald-500" />
										</div>
										<p className="text-2xl font-bold text-slate-900 dark:text-white mb-0.5">
											{stat.value}
										</p>
										<p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
											{stat.label}
										</p>
										<p className="text-[10px] text-slate-400">{stat.change}</p>
									</motion.div>
								);
							})}
						</div>
					</div>

					{/* Two Column */}
					<div className="grid lg:grid-cols-3 gap-6">
						<div className="lg:col-span-2 space-y-6">
							{/* Incoming Requests */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden">
								<div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
									<div>
										<h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
											<span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
											Incoming Requests
										</h2>
										<p className="text-xs text-slate-400 mt-0.5">
											Accept emergency dispatch requests
										</p>
									</div>
									<button className="text-sm text-slate-700 dark:text-slate-300 hover:text-emerald-600 font-medium">
										View all
									</button>
								</div>
								<div className="divide-y divide-slate-100 dark:divide-slate-800">
									{incomingRequests.map((req) => (
										<div
											key={req.id}
											className="px-6 py-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
											<div className="flex items-start gap-4">
												<div
													className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${req.priority === "Critical" ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400" : "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400"}`}>
													<AlertCircle className="h-5 w-5" />
												</div>
												<div className="flex-1 min-w-0">
													<div className="flex items-center justify-between flex-wrap gap-2 mb-1">
														<p className="font-semibold text-slate-900 dark:text-white text-sm">
															{req.patient}
														</p>
														<span
															className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${req.priority === "Critical" ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400" : "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400"}`}>
															{req.priority.toUpperCase()}
														</span>
													</div>
													<p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
														{req.condition}
													</p>
													<div className="flex items-center gap-4 text-[11px] text-slate-500 dark:text-slate-400">
														<span className="flex items-center gap-1">
															<MapPin className="h-3 w-3" /> {req.address}
														</span>
														<span className="flex items-center gap-1">
															<Navigation className="h-3 w-3" /> {req.distance}
														</span>
														<span className="flex items-center gap-1">
															<Clock className="h-3 w-3" /> {req.time}
														</span>
													</div>
												</div>
												<div className="flex flex-col gap-1.5">
													<button className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors">
														Accept
													</button>
													<button className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs font-medium rounded-lg transition-colors">
														Reject
													</button>
												</div>
											</div>
										</div>
									))}
								</div>
							</motion.div>

							{/* Recent Trips */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 }}
								className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
								<div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
									<h2 className="text-base font-bold text-slate-900 dark:text-white">
										Recent Trips
									</h2>
									<button className="text-xs text-emerald-600 font-medium">
										View History →
									</button>
								</div>
								<div className="divide-y divide-slate-100 dark:divide-slate-800">
									{recentTrips.map((trip) => (
										<div
											key={trip.id}
											className="px-6 py-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors flex items-center gap-4">
											<div className="w-9 h-9 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400">
												<CheckCircle2 className="h-4 w-4" />
											</div>
											<div className="flex-1 min-w-0">
												<p className="font-semibold text-slate-900 dark:text-white text-sm">
													{trip.patient}
												</p>
												<p className="text-xs text-slate-500 dark:text-slate-400">
													{trip.from} → {trip.to}
												</p>
											</div>
											<div className="text-right">
												<p className="text-sm font-bold text-emerald-600">
													{trip.earnings}
												</p>
												<p className="text-[10px] text-slate-400">
													{trip.time}
												</p>
											</div>
										</div>
									))}
								</div>
							</motion.div>
						</div>

						<div className="space-y-6">
							{/* Fleet Vehicles */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
								<div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
									<h3 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
										<Ambulance className="h-4 w-4 text-emerald-500" /> Fleet
										Status
									</h3>
									<span className="text-[10px] text-slate-400">
										{fleetVehicles.length} vehicles
									</span>
								</div>
								<div className="divide-y divide-slate-100 dark:divide-slate-800 max-h-96 overflow-y-auto">
									{fleetVehicles.map((vehicle, idx) => {
										const status = getVehicleStatus(vehicle.status);
										return (
											<div
												key={idx}
												className="px-5 py-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
												<div className="flex items-start justify-between mb-2">
													<div className="flex items-center gap-2">
														<span
															className={`w-2 h-2 rounded-full ${status.dot} ${vehicle.status === "on-trip" ? "animate-pulse" : ""}`}></span>
														<p className="font-semibold text-slate-900 dark:text-white text-sm">
															{vehicle.id}
														</p>
													</div>
													<span
														className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${status.bg} ${status.text}`}>
														{status.label}
													</span>
												</div>
												<p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
													{vehicle.driver} • {vehicle.plate}
												</p>
												{vehicle.currentTrip && (
													<p className="text-[10px] text-amber-600 dark:text-amber-400 font-medium mb-2">
														→ {vehicle.currentTrip}
													</p>
												)}
												{vehicle.status !== "maintenance" && (
													<div className="flex items-center gap-2">
														<div className="flex-1 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
															<div
																className={`h-full ${vehicle.battery > 50 ? "bg-emerald-500" : vehicle.battery > 20 ? "bg-amber-500" : "bg-red-500"}`}
																style={{ width: `${vehicle.battery}%` }}></div>
														</div>
														<span className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
															{vehicle.battery}%
														</span>
													</div>
												)}
											</div>
										);
									})}
								</div>
							</motion.div>

							{/* Top Driver Card */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.1 }}
								className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-5 text-white relative overflow-hidden">
								<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10"></div>
								<div className="relative z-10">
									<Award className="h-6 w-6 mb-3 text-white/80" />
									<p className="text-xs text-amber-100 uppercase tracking-wider mb-1">
										Top Driver This Week
									</p>
									<h3 className="font-bold text-lg mb-1">Karim Ahmed</h3>
									<div className="flex items-center gap-3 mb-4">
										<span className="flex items-center gap-1 text-sm">
											<Star className="h-4 w-4 fill-white" /> 4.9
										</span>
										<span className="text-sm text-amber-100">• 47 trips</span>
									</div>
									<div className="flex items-center justify-between text-xs">
										<span className="text-amber-100">This week's earnings</span>
										<span className="font-bold text-white">৳28,400</span>
									</div>
								</div>
							</motion.div>

							{/* Maintenance Alert */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.2 }}
								className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/50 rounded-2xl p-4">
								<div className="flex items-start gap-3">
									<Wrench className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
									<div className="flex-1">
										<p className="font-bold text-red-900 dark:text-red-300 text-sm">
											Maintenance Required
										</p>
										<p className="text-xs text-red-700 dark:text-red-400 mt-1">
											AMB-005 needs scheduled service. Last serviced 6 months
											ago.
										</p>
										<button className="mt-3 text-xs font-bold text-red-700 dark:text-red-400 hover:underline">
											Schedule Service →
										</button>
									</div>
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default AmbulanceServiceDashboard;
