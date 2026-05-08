import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
	Hospital,
	Bed,
	Droplet,
	Pill,
	Users,
	Activity,
	Bell,
	Search,
	TrendingUp,
	TrendingDown,
	AlertCircle,
	CheckCircle2,
	Clock,
	ChevronRight,
	Menu,
	X,
	LogOut,
	Settings,
	HelpCircle,
	Plus,
	Ambulance,
	MoreHorizontal,
	ArrowUpRight,
	Stethoscope,
	Calendar,
	MapPin,
	Phone,
	Heart,
	Shield,
} from "lucide-react";

function HospitalDashboard() {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const kpis = [
		{
			label: "Total Beds",
			value: "180",
			sub: "142 occupied",
			percent: 79,
			icon: Bed,
			color: "blue",
			trend: "up",
		},
		{
			label: "Available Beds",
			value: "38",
			sub: "Across 6 wards",
			percent: 21,
			icon: CheckCircle2,
			color: "emerald",
			trend: "down",
		},
		{
			label: "Blood Units",
			value: "247",
			sub: "4 types low",
			percent: 65,
			icon: Droplet,
			color: "red",
			trend: "up",
		},
		{
			label: "Active Requests",
			value: "12",
			sub: "3 critical",
			percent: 90,
			icon: AlertCircle,
			color: "amber",
			trend: "up",
		},
	];

	const emergencyRequests = [
		{
			id: 1,
			patient: "Sarah Khan",
			condition: "Cardiac Arrest",
			priority: "Critical",
			eta: "4 min",
			distance: "1.2 km",
			age: 54,
			gender: "F",
		},
		{
			id: 2,
			patient: "Rahim Hossain",
			condition: "Road Accident",
			priority: "High",
			eta: "7 min",
			distance: "2.8 km",
			age: 32,
			gender: "M",
		},
		{
			id: 3,
			patient: "Fatima Begum",
			condition: "Stroke Symptoms",
			priority: "Critical",
			eta: "5 min",
			distance: "1.8 km",
			age: 67,
			gender: "F",
		},
		{
			id: 4,
			patient: "Karim Ali",
			condition: "Severe Burns",
			priority: "High",
			eta: "12 min",
			distance: "4.5 km",
			age: 28,
			gender: "M",
		},
	];

	const bloodInventory = [
		{ type: "A+", units: 45, status: "Good", color: "emerald" },
		{ type: "A-", units: 12, status: "Low", color: "amber" },
		{ type: "B+", units: 38, status: "Good", color: "emerald" },
		{ type: "B-", units: 8, status: "Critical", color: "red" },
		{ type: "O+", units: 67, status: "Good", color: "emerald" },
		{ type: "O-", units: 5, status: "Critical", color: "red" },
		{ type: "AB+", units: 23, status: "Good", color: "emerald" },
		{ type: "AB-", units: 9, status: "Low", color: "amber" },
	];

	const wards = [
		{ name: "ICU", total: 20, occupied: 18, color: "red" },
		{ name: "Emergency", total: 30, occupied: 22, color: "amber" },
		{ name: "General", total: 80, occupied: 65, color: "blue" },
		{ name: "Pediatric", total: 25, occupied: 18, color: "pink" },
		{ name: "Maternity", total: 15, occupied: 12, color: "purple" },
		{ name: "Surgery", total: 10, occupied: 7, color: "emerald" },
	];

	const onDutyDoctors = [
		{
			name: "Dr. Sarah Ahmed",
			specialty: "Cardiology",
			status: "Available",
			avatar: "SA",
		},
		{
			name: "Dr. Michael Chen",
			specialty: "Emergency Med",
			status: "Busy",
			avatar: "MC",
		},
		{
			name: "Dr. Priya Sharma",
			specialty: "Pediatrics",
			status: "Available",
			avatar: "PS",
		},
		{
			name: "Dr. Hasan Khan",
			specialty: "Surgery",
			status: "In OR",
			avatar: "HK",
		},
	];

	const navItems = [
		{ icon: Activity, label: "Dashboard", active: true },
		{ icon: AlertCircle, label: "Emergency Requests", badge: "12" },
		{ icon: Bed, label: "Bed Management" },
		{ icon: Droplet, label: "Blood Bank" },
		{ icon: Pill, label: "Inventory" },
		{ icon: Stethoscope, label: "Doctors" },
		{ icon: Calendar, label: "Appointments" },
	];

	const colorMap = {
		red: {
			bg: "bg-red-50",
			text: "text-red-600",
			dot: "bg-red-500",
			ring: "ring-red-200",
			light: "bg-red-100",
		},
		blue: {
			bg: "bg-blue-50",
			text: "text-blue-600",
			dot: "bg-blue-500",
			ring: "ring-blue-200",
			light: "bg-blue-100",
		},
		emerald: {
			bg: "bg-emerald-50",
			text: "text-emerald-600",
			dot: "bg-emerald-500",
			ring: "ring-emerald-200",
			light: "bg-emerald-100",
		},
		amber: {
			bg: "bg-amber-50",
			text: "text-amber-600",
			dot: "bg-amber-500",
			ring: "ring-amber-200",
			light: "bg-amber-100",
		},
		pink: {
			bg: "bg-pink-50",
			text: "text-pink-600",
			dot: "bg-pink-500",
			ring: "ring-pink-200",
			light: "bg-pink-100",
		},
		purple: {
			bg: "bg-purple-50",
			text: "text-purple-600",
			dot: "bg-purple-500",
			ring: "ring-purple-200",
			light: "bg-purple-100",
		},
	};

	return (
		<div className="min-h-screen bg-[#FAFAFA]">
			{/* Mobile Menu */}
			<button
				onClick={() => setSidebarOpen(!sidebarOpen)}
				className="lg:hidden fixed top-24 left-4 z-50 p-2.5 bg-white rounded-xl shadow-md border border-slate-100">
				{sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
			</button>

			{/* Sidebar */}
			<aside
				className={`fixed inset-y-0 left-0 z-40 w-72 bg-white border-r border-slate-100 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} flex flex-col`}>
				<div className="px-6 py-6">
					<Link to="/" className="flex items-center gap-3">
						<div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-md">
							<Hospital className="h-5 w-5 text-white" />
						</div>
						<div>
							<p className="text-lg font-bold text-slate-900 leading-none">
								Swift<span className="text-blue-600">Aid</span>
							</p>
							<p className="text-xs text-slate-400 mt-0.5">Hospital Portal</p>
						</div>
					</Link>
				</div>

				<div className="px-6 mt-2 mb-3">
					<p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
						Management
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
										? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-sm"
										: "text-slate-600 hover:bg-slate-50"
								}`}>
								<Icon
									className={`h-5 w-5 ${item.active ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"}`}
								/>
								<span className="flex-1">{item.label}</span>
								{item.badge && (
									<span className="text-[10px] font-bold px-2 py-0.5 bg-red-100 text-red-600 rounded-full">
										{item.badge}
									</span>
								)}
								{item.active && (
									<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-600 rounded-r-full"></div>
								)}
							</a>
						);
					})}
				</nav>

				<div className="px-4 pb-2">
					<div className="border-t border-slate-100 my-4"></div>
					<a
						href="#"
						className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-slate-600 hover:bg-slate-50 transition-colors">
						<Settings className="h-4 w-4 text-slate-400" /> Settings
					</a>
					<a
						href="#"
						className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-slate-600 hover:bg-slate-50 transition-colors">
						<HelpCircle className="h-4 w-4 text-slate-400" /> Help
					</a>
				</div>

				<div className="p-4 m-4 mt-0 bg-slate-50 rounded-2xl">
					<div className="flex items-center gap-3">
						<div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
							CG
						</div>
						<div className="flex-1 min-w-0">
							<p className="font-semibold text-slate-900 text-sm truncate">
								City General
							</p>
							<p className="text-xs text-slate-500 truncate">Admin Portal</p>
						</div>
						<button className="p-1.5 hover:bg-white rounded-lg transition-colors">
							<LogOut className="h-4 w-4 text-slate-400" />
						</button>
					</div>
				</div>
			</aside>

			{/* Main Content */}
			<main className="lg:ml-72">
				{/* Top Bar */}
				<header className="bg-white/80 backdrop-blur-sm border-b border-slate-100 sticky top-0 z-30">
					<div className="px-6 lg:px-10 py-4 flex items-center justify-between gap-4">
						<div className="flex-1 max-w-xl ml-12 lg:ml-0">
							<div className="relative">
								<Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
								<input
									type="text"
									placeholder="Search patients, doctors, requests..."
									className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-transparent rounded-xl text-sm focus:outline-none focus:bg-white focus:border-slate-200 transition-all"
								/>
							</div>
						</div>

						<div className="flex items-center gap-2">
							<button className="relative p-2.5 hover:bg-slate-50 rounded-xl transition-colors">
								<Bell className="h-5 w-5 text-slate-600" />
								<span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white animate-pulse"></span>
							</button>
							<div className="hidden sm:block w-px h-8 bg-slate-200"></div>
							<button className="hidden sm:flex items-center gap-2 pl-1 pr-3 py-1 hover:bg-slate-50 rounded-xl transition-colors">
								<div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
									CG
								</div>
								<span className="text-sm font-medium text-slate-700">
									Admin
								</span>
							</button>
						</div>
					</div>
				</header>

				<div className="p-6 lg:p-10 space-y-8">
					{/* Page Header */}
					<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
						<div>
							<p className="text-sm font-medium text-blue-600 mb-1">
								Hospital Overview,
							</p>
							<h1 className="text-3xl font-bold text-slate-900">
								City General Hospital
							</h1>
							<p className="text-slate-500 text-sm mt-2">
								Real-time management dashboard. 12 active emergencies in
								progress.
							</p>
						</div>
						<div className="flex gap-2">
							<button className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
								Reports
							</button>
							<button className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-medium transition-colors flex items-center gap-2">
								<Plus className="h-4 w-4" /> Add Resource
							</button>
						</div>
					</div>

					{/* Critical Alert Banner */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="bg-gradient-to-r from-red-50 via-rose-50 to-orange-50 border border-red-200 rounded-2xl p-5 flex items-center gap-4">
						<div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
							<AlertCircle className="h-6 w-6 text-red-600 animate-pulse" />
						</div>
						<div className="flex-1">
							<h3 className="font-bold text-slate-900 text-sm mb-0.5">
								3 Critical Patients Incoming
							</h3>
							<p className="text-xs text-slate-600">
								Cardiac arrest, stroke, and severe trauma cases. ETA 4-7
								minutes. Prepare ICU & ER.
							</p>
						</div>
						<button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl transition-colors">
							View All
						</button>
					</motion.div>

					{/* KPI Cards */}
					<div>
						<div className="flex items-center justify-between mb-4">
							<h2 className="text-base font-bold text-slate-900">
								Key Metrics
							</h2>
							<span className="text-xs text-slate-400">Live data</span>
						</div>
						<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
							{kpis.map((kpi, i) => {
								const Icon = kpi.icon;
								const colors = colorMap[kpi.color];
								const TrendIcon =
									kpi.trend === "up" ? TrendingUp : TrendingDown;
								return (
									<motion.div
										key={i}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: i * 0.08 }}
										whileHover={{ y: -2 }}
										className="bg-white rounded-2xl p-5 border border-slate-100 hover:shadow-md transition-all">
										<div className="flex items-start justify-between mb-4">
											<div
												className={`w-10 h-10 ${colors.bg} rounded-xl flex items-center justify-center ${colors.text}`}>
												<Icon className="h-5 w-5" />
											</div>
											<TrendIcon
												className={`h-4 w-4 ${kpi.trend === "up" ? "text-emerald-500" : "text-red-500"}`}
											/>
										</div>
										<p className="text-2xl font-bold text-slate-900 mb-0.5">
											{kpi.value}
										</p>
										<p className="text-xs text-slate-500 mb-3">{kpi.label}</p>
										<div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
											<motion.div
												initial={{ width: 0 }}
												animate={{ width: `${kpi.percent}%` }}
												transition={{ delay: 0.5, duration: 0.8 }}
												className={`h-full ${colors.dot}`}></motion.div>
										</div>
										<p className="text-[10px] text-slate-400 mt-2">{kpi.sub}</p>
									</motion.div>
								);
							})}
						</div>
					</div>

					{/* Two Column Layout */}
					<div className="grid lg:grid-cols-3 gap-6">
						{/* Left Column */}
						<div className="lg:col-span-2 space-y-6">
							{/* Emergency Requests */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
								<div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
									<div>
										<h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
											<span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
											Live Emergency Requests
										</h2>
										<p className="text-xs text-slate-400 mt-0.5">
											Incoming patients requiring immediate attention
										</p>
									</div>
									<button className="text-sm text-slate-700 hover:text-blue-600 font-medium flex items-center gap-1 group">
										View all{" "}
										<ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
									</button>
								</div>
								<div className="divide-y divide-slate-100">
									{emergencyRequests.map((req) => (
										<div
											key={req.id}
											className="px-6 py-4 hover:bg-slate-50/50 transition-colors">
											<div className="flex items-start gap-4">
												<div
													className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-sm ${req.gender === "F" ? "bg-pink-100 text-pink-700" : "bg-blue-100 text-blue-700"}`}>
													{req.patient
														.split(" ")
														.map((n) => n[0])
														.join("")}
												</div>
												<div className="flex-1 min-w-0">
													<div className="flex items-center justify-between flex-wrap gap-2 mb-1">
														<p className="font-semibold text-slate-900 text-sm">
															{req.patient}{" "}
															<span className="text-xs text-slate-400 font-normal">
																• {req.age} {req.gender}
															</span>
														</p>
														<span
															className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${req.priority === "Critical" ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"}`}>
															{req.priority.toUpperCase()}
														</span>
													</div>
													<p className="text-xs text-slate-600 mb-2">
														{req.condition}
													</p>
													<div className="flex items-center gap-4 text-[11px] text-slate-500">
														<span className="flex items-center gap-1">
															<Clock className="h-3 w-3" /> ETA {req.eta}
														</span>
														<span className="flex items-center gap-1">
															<MapPin className="h-3 w-3" /> {req.distance}
														</span>
														<span className="flex items-center gap-1">
															<Ambulance className="h-3 w-3" /> En route
														</span>
													</div>
												</div>
												<div className="flex flex-col gap-1.5">
													<button className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors">
														Accept
													</button>
													<button className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-medium rounded-lg transition-colors">
														Details
													</button>
												</div>
											</div>
										</div>
									))}
								</div>
							</motion.div>

							{/* Bed Management */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 }}
								className="bg-white rounded-2xl border border-slate-100 p-6">
								<div className="flex items-center justify-between mb-5">
									<div>
										<h2 className="text-base font-bold text-slate-900">
											Ward Capacity
										</h2>
										<p className="text-xs text-slate-400 mt-0.5">
											Real-time bed availability
										</p>
									</div>
									<button className="text-xs text-blue-600 font-medium">
										Manage
									</button>
								</div>
								<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
									{wards.map((ward, idx) => {
										const colors = colorMap[ward.color];
										const percent = (ward.occupied / ward.total) * 100;
										return (
											<div
												key={idx}
												className="p-4 bg-slate-50 rounded-xl hover:bg-white hover:border border-transparent hover:border-slate-200 hover:shadow-sm transition-all cursor-pointer">
												<div className="flex items-center justify-between mb-3">
													<p className="font-semibold text-slate-800 text-sm">
														{ward.name}
													</p>
													<span
														className={`text-[10px] font-bold ${colors.text}`}>
														{Math.round(percent)}%
													</span>
												</div>
												<div className="flex items-baseline gap-1 mb-2">
													<span className="text-xl font-bold text-slate-900">
														{ward.occupied}
													</span>
													<span className="text-xs text-slate-400">
														/ {ward.total}
													</span>
												</div>
												<div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
													<motion.div
														initial={{ width: 0 }}
														animate={{ width: `${percent}%` }}
														transition={{ delay: 0.3 + idx * 0.1 }}
														className={`h-full ${colors.dot}`}></motion.div>
												</div>
											</div>
										);
									})}
								</div>
							</motion.div>
						</div>

						{/* Right Column */}
						<div className="space-y-6">
							{/* Blood Inventory */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								className="bg-white rounded-2xl border border-slate-100 p-5">
								<div className="flex items-center justify-between mb-4">
									<h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
										<Droplet className="h-4 w-4 text-red-500" /> Blood Bank
									</h3>
									<span className="text-[10px] text-slate-400">Live</span>
								</div>
								<div className="grid grid-cols-4 gap-2">
									{bloodInventory.map((blood, idx) => {
										const colors = colorMap[blood.color];
										return (
											<div
												key={idx}
												className={`${colors.bg} rounded-xl p-3 text-center border ${blood.color === "red" ? "border-red-200" : blood.color === "amber" ? "border-amber-200" : "border-emerald-200"}`}>
												<p className={`text-sm font-bold ${colors.text}`}>
													{blood.type}
												</p>
												<p className="text-lg font-bold text-slate-900 mt-1">
													{blood.units}
												</p>
												<p className="text-[9px] text-slate-500 mt-0.5">
													units
												</p>
											</div>
										);
									})}
								</div>
								<div className="mt-4 p-3 bg-red-50 rounded-xl flex items-center gap-2">
									<AlertCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
									<p className="text-xs text-red-700 font-medium">
										B- and O- critically low. Order now.
									</p>
								</div>
							</motion.div>

							{/* On-Duty Doctors */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.1 }}
								className="bg-white rounded-2xl border border-slate-100">
								<div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
									<h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
										<Stethoscope className="h-4 w-4 text-blue-500" /> On-Duty
										Doctors
									</h3>
									<span className="text-[10px] font-medium text-slate-400">
										{onDutyDoctors.length} active
									</span>
								</div>
								<div className="divide-y divide-slate-100">
									{onDutyDoctors.map((doc, idx) => (
										<div
											key={idx}
											className="px-5 py-3 hover:bg-slate-50 transition-colors flex items-center gap-3 cursor-pointer">
											<div className="relative">
												<div className="w-9 h-9 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
													{doc.avatar}
												</div>
												<span
													className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full ring-2 ring-white ${
														doc.status === "Available"
															? "bg-emerald-500"
															: doc.status === "Busy"
																? "bg-amber-500"
																: "bg-red-500"
													}`}></span>
											</div>
											<div className="flex-1 min-w-0">
												<p className="font-semibold text-slate-800 text-sm truncate">
													{doc.name}
												</p>
												<p className="text-[11px] text-slate-500">
													{doc.specialty}
												</p>
											</div>
											<span
												className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
													doc.status === "Available"
														? "bg-emerald-50 text-emerald-700"
														: doc.status === "Busy"
															? "bg-amber-50 text-amber-700"
															: "bg-red-50 text-red-700"
												}`}>
												{doc.status}
											</span>
										</div>
									))}
								</div>
							</motion.div>

							{/* Quick Stats */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.2 }}
								className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-5 text-white relative overflow-hidden">
								<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10"></div>
								<div className="relative z-10">
									<Heart className="h-6 w-6 mb-3 text-white/80" />
									<p className="text-3xl font-bold mb-1">2,847</p>
									<p className="text-sm text-blue-100 mb-4">
										Lives saved this month
									</p>
									<div className="flex items-center gap-2 text-xs">
										<TrendingUp className="h-3 w-3" />
										<span>+18% from last month</span>
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

export default HospitalDashboard;
