import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
	Heart,
	Phone,
	MapPin,
	Activity,
	Droplet,
	Pill,
	AlertCircle,
	ChevronRight,
	Bell,
	Calendar,
	Ambulance,
	Hospital,
	Search,
	LogOut,
	Menu,
	X,
	TrendingUp,
	ArrowUpRight,
	MoreHorizontal,
	Settings,
	HelpCircle,
	Plus,
} from "lucide-react";

function PatientDashboard() {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const stats = [
		{
			label: "Active Cases",
			value: 3,
			change: "+2 this week",
			trend: "up",
			icon: AlertCircle,
			color: "red",
		},
		{
			label: "Appointments",
			value: 5,
			change: "Next: Tomorrow",
			trend: "neutral",
			icon: Calendar,
			color: "blue",
		},
		{
			label: "Blood Requests",
			value: 2,
			change: "1 pending",
			trend: "neutral",
			icon: Droplet,
			color: "pink",
		},
		{
			label: "Active Meds",
			value: 8,
			change: "3 refills due",
			trend: "up",
			icon: Pill,
			color: "emerald",
		},
	];

	const recentBookings = [
		{
			id: 1,
			type: "Ambulance Request",
			status: "Completed",
			date: "Today",
			hospital: "City General Hospital",
			time: "08:30 AM",
			icon: Ambulance,
			color: "red",
		},
		{
			id: 2,
			type: "Blood Group A+",
			status: "Pending",
			date: "Yesterday",
			hospital: "Dhaka Medical Center",
			time: "02:15 PM",
			icon: Droplet,
			color: "pink",
		},
		{
			id: 3,
			type: "Antivenom Supply",
			status: "Delivered",
			date: "3 days ago",
			hospital: "Regional Emergency",
			time: "11:00 AM",
			icon: Pill,
			color: "emerald",
		},
	];

	const nearbyHospitals = [
		{
			name: "City General Hospital",
			distance: "1.2 km",
			beds: 12,
			rating: 4.8,
			available: true,
		},
		{
			name: "Metro Medical Center",
			distance: "2.5 km",
			beds: 8,
			rating: 4.6,
			available: true,
		},
		{
			name: "Community Health Clinic",
			distance: "3.8 km",
			beds: 24,
			rating: 4.3,
			available: false,
		},
	];

	const healthStats = [
		{
			label: "Blood Pressure",
			value: "120/80",
			unit: "mmHg",
			percentage: 75,
			color: "emerald",
		},
		{
			label: "Blood Sugar",
			value: "95",
			unit: "mg/dL",
			percentage: 65,
			color: "blue",
		},
		{
			label: "Oxygen Level",
			value: "98",
			unit: "%",
			percentage: 98,
			color: "cyan",
		},
	];

	const navItems = [
		{ icon: Activity, label: "Dashboard", active: true },
		{ icon: Ambulance, label: "Request Help", badge: "New" },
		{ icon: Calendar, label: "My Bookings" },
		{ icon: Droplet, label: "Blood Bank" },
		{ icon: Pill, label: "Medicines" },
		{ icon: Hospital, label: "Hospitals" },
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
		pink: {
			bg: "bg-pink-50 dark:bg-pink-900/20",
			text: "text-pink-600 dark:text-pink-400",
			dot: "bg-pink-500",
		},
		emerald: {
			bg: "bg-emerald-50 dark:bg-emerald-900/20",
			text: "text-emerald-600 dark:text-emerald-400",
			dot: "bg-emerald-500",
		},
		cyan: {
			bg: "bg-cyan-50 dark:bg-cyan-900/20",
			text: "text-cyan-600 dark:text-cyan-400",
			dot: "bg-cyan-500",
		},
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
						<div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-md">
							<Heart className="h-5 w-5 text-white" />
						</div>
						<div>
							<p className="text-lg font-bold text-slate-900 dark:text-white leading-none">
								Swift<span className="text-red-600">Aid</span>
							</p>
							<p className="text-xs text-slate-400 mt-0.5">Patient Portal</p>
						</div>
					</Link>
				</div>

				<div className="px-6 mt-2 mb-3">
					<p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
						Main Menu
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
										? "bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/30 dark:to-rose-900/30 text-red-700 dark:text-red-400 shadow-sm"
										: "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
								}`}>
								<Icon
									className={`h-5 w-5 ${item.active ? "text-red-600 dark:text-red-400" : "text-slate-400"}`}
								/>
								<span className="flex-1">{item.label}</span>
								{item.badge && (
									<span className="text-[10px] font-bold px-2 py-0.5 bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 rounded-full">
										{item.badge}
									</span>
								)}
								{item.active && (
									<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-red-600 rounded-r-full"></div>
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
						<div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
							JD
						</div>
						<div className="flex-1 min-w-0">
							<p className="font-semibold text-slate-900 dark:text-white text-sm truncate">
								John Doe
							</p>
							<p className="text-xs text-slate-500 dark:text-slate-400 truncate">
								Patient ID #4892
							</p>
						</div>
						<button className="p-1.5 hover:bg-white dark:hover:bg-slate-700 rounded-lg transition-colors">
							<LogOut className="h-4 w-4 text-slate-400" />
						</button>
					</div>
				</div>
			</aside>

			{/* Main */}
			<main className="lg:ml-72">
				<header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800 sticky top-0 z-30">
					<div className="px-6 lg:px-10 py-4 flex items-center justify-between gap-4">
						<div className="flex-1 max-w-xl ml-12 lg:ml-0">
							<div className="relative">
								<Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
								<input
									type="text"
									placeholder="Search hospitals, doctors..."
									className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-transparent rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:bg-white dark:focus:bg-slate-700 focus:border-slate-200 dark:focus:border-slate-600 transition-all"
								/>
							</div>
						</div>

						<div className="flex items-center gap-2">
							<button className="relative p-2.5 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors">
								<Bell className="h-5 w-5 text-slate-600 dark:text-slate-400" />
								<span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-slate-900"></span>
							</button>
						</div>
					</div>
				</header>

				<div className="p-6 lg:p-10 space-y-8">
					<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
						<div>
							<p className="text-sm font-medium text-red-600 mb-1">
								Hello again,
							</p>
							<h1 className="text-3xl font-bold text-slate-900 dark:text-white">
								John Doe 👋
							</h1>
							<p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
								Here's an overview of your medical activity today.
							</p>
						</div>
						<div className="flex gap-2">
							<button className="px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
								Export Report
							</button>
							<button className="px-4 py-2.5 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 rounded-xl text-sm font-medium transition-colors flex items-center gap-2">
								<Plus className="h-4 w-4" /> New Booking
							</button>
						</div>
					</div>

					{/* SOS Banner */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-600 via-red-700 to-rose-800 p-8 shadow-xl shadow-red-200/40 dark:shadow-red-900/20">
						<div className="absolute inset-0 opacity-10">
							<div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-32 -mt-32"></div>
						</div>
						<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
							<div>
								<div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 backdrop-blur-md rounded-full text-xs font-medium text-white mb-4 border border-white/20">
									<span className="relative flex h-2 w-2">
										<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75"></span>
										<span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-300"></span>
									</span>
									Live & Ready
								</div>
								<h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
									Need help right now?
								</h2>
								<p className="text-red-100 max-w-md text-sm">
									One tap dispatches the nearest verified ambulance to your
									location.
								</p>
							</div>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="flex-shrink-0 bg-white text-red-600 px-7 py-4 rounded-2xl font-bold shadow-2xl flex items-center gap-3">
								<div className="w-9 h-9 bg-red-100 rounded-xl flex items-center justify-center">
									<Phone className="h-5 w-5" />
								</div>
								<span>Emergency SOS</span>
							</motion.button>
						</div>
					</motion.div>

					{/* Stats */}
					<div>
						<div className="flex items-center justify-between mb-4">
							<h2 className="text-base font-bold text-slate-900 dark:text-white">
								Overview
							</h2>
							<span className="text-xs text-slate-400">Last 30 days</span>
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
										className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-100 dark:border-slate-800 hover:shadow-md transition-all cursor-pointer group">
										<div className="flex items-start justify-between mb-4">
											<div
												className={`w-10 h-10 ${colors.bg} rounded-xl flex items-center justify-center ${colors.text}`}>
												<Icon className="h-5 w-5" />
											</div>
											<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
												<MoreHorizontal className="h-4 w-4 text-slate-400" />
											</button>
										</div>
										<p className="text-2xl font-bold text-slate-900 dark:text-white mb-0.5">
											{stat.value}
										</p>
										<p className="text-xs text-slate-500 dark:text-slate-400">
											{stat.label}
										</p>
										<div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5">
											{stat.trend === "up" && (
												<TrendingUp className="h-3 w-3 text-emerald-500" />
											)}
											<p className="text-[11px] font-medium text-slate-400">
												{stat.change}
											</p>
										</div>
									</motion.div>
								);
							})}
						</div>
					</div>

					{/* Two Column */}
					<div className="grid lg:grid-cols-3 gap-6">
						<div className="lg:col-span-2 space-y-6">
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.2 }}
								className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
								<div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
									<div>
										<h2 className="text-base font-bold text-slate-900 dark:text-white">
											Recent Bookings
										</h2>
										<p className="text-xs text-slate-400 mt-0.5">
											Your latest service requests
										</p>
									</div>
									<button className="text-sm text-slate-700 dark:text-slate-300 hover:text-red-600 font-medium flex items-center gap-1 group">
										View all <ArrowUpRight className="h-3.5 w-3.5" />
									</button>
								</div>
								<div className="divide-y divide-slate-100 dark:divide-slate-800">
									{recentBookings.map((booking) => {
										const Icon = booking.icon;
										const colors = colorMap[booking.color];
										return (
											<div
												key={booking.id}
												className="px-6 py-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors flex items-center gap-4 group cursor-pointer">
												<div
													className={`w-11 h-11 ${colors.bg} rounded-xl flex items-center justify-center ${colors.text} flex-shrink-0`}>
													<Icon className="h-5 w-5" />
												</div>
												<div className="flex-1 min-w-0">
													<p className="font-semibold text-slate-900 dark:text-white text-sm">
														{booking.type}
													</p>
													<p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
														{booking.hospital} • {booking.time}
													</p>
												</div>
												<div className="hidden sm:block text-right flex-shrink-0">
													<p className="text-xs text-slate-400">
														{booking.date}
													</p>
												</div>
												<span
													className={`px-2.5 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1.5 ${
														booking.status === "Pending"
															? "bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400"
															: "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400"
													}`}>
													<span
														className={`w-1.5 h-1.5 rounded-full ${booking.status === "Pending" ? "bg-amber-500" : "bg-emerald-500"}`}></span>
													{booking.status}
												</span>
											</div>
										);
									})}
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3 }}
								className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-6">
								<div className="flex items-center justify-between mb-5">
									<h2 className="text-base font-bold text-slate-900 dark:text-white">
										Quick Actions
									</h2>
									<span className="text-xs text-slate-400">
										Common services
									</span>
								</div>
								<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
									{[
										{ title: "Ambulance", icon: Ambulance, color: "red" },
										{ title: "Hospital", icon: Hospital, color: "blue" },
										{ title: "Blood Bank", icon: Droplet, color: "pink" },
										{ title: "Antivenom", icon: Pill, color: "emerald" },
									].map((svc, idx) => {
										const Icon = svc.icon;
										const colors = colorMap[svc.color];
										return (
											<motion.button
												key={idx}
												whileHover={{ y: -2 }}
												className="bg-slate-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700 border border-transparent hover:border-slate-200 dark:hover:border-slate-600 hover:shadow-md p-4 rounded-xl text-center transition-all group cursor-pointer">
												<div
													className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mx-auto mb-3 ${colors.text} group-hover:scale-110 transition-transform`}>
													<Icon className="h-6 w-6" />
												</div>
												<p className="font-semibold text-slate-800 dark:text-slate-200 text-xs">
													{svc.title}
												</p>
											</motion.button>
										);
									})}
								</div>
							</motion.div>
						</div>

						<div className="space-y-6">
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden">
								<div className="h-44 bg-gradient-to-br from-slate-900 via-slate-800 to-red-900 relative overflow-hidden">
									<div
										className="absolute inset-0 opacity-20"
										style={{
											backgroundImage:
												"linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
											backgroundSize: "20px 20px",
										}}></div>
									<div className="absolute inset-0 flex items-center justify-center">
										<div className="relative">
											<div className="absolute inset-0 bg-red-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
											<div className="relative w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl border-2 border-white/30">
												<MapPin className="h-6 w-6 text-white" />
											</div>
										</div>
									</div>
								</div>
								<div className="p-5">
									<p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-1">
										Current Location
									</p>
									<h3 className="font-bold text-slate-900 dark:text-white text-sm">
										Dhanmondi, Dhaka
									</h3>
									<p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
										23.7505° N, 90.3722° E
									</p>
									<button className="mt-3 w-full py-2 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-medium transition-colors">
										Open Full Map
									</button>
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.1 }}
								className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-5">
								<div className="flex items-center justify-between mb-5">
									<h3 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
										<Activity className="h-4 w-4 text-emerald-500" /> Health
										Vitals
									</h3>
									<span className="text-[10px] text-slate-400">
										Updated 5m ago
									</span>
								</div>
								<div className="space-y-4">
									{healthStats.map((vital, idx) => {
										const colors = colorMap[vital.color];
										return (
											<div key={idx}>
												<div className="flex justify-between items-baseline mb-2">
													<span className="text-xs font-medium text-slate-600 dark:text-slate-400">
														{vital.label}
													</span>
													<div className="flex items-baseline gap-1">
														<span className="font-bold text-slate-900 dark:text-white text-sm">
															{vital.value}
														</span>
														<span className="text-[10px] text-slate-400">
															{vital.unit}
														</span>
													</div>
												</div>
												<div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
													<motion.div
														initial={{ width: 0 }}
														animate={{ width: `${vital.percentage}%` }}
														transition={{
															delay: 0.5 + idx * 0.2,
															duration: 0.8,
														}}
														className={`h-full ${colors.dot} rounded-full`}></motion.div>
												</div>
											</div>
										);
									})}
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.2 }}
								className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
								<div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
									<h3 className="font-bold text-slate-900 dark:text-white text-sm">
										Nearby Hospitals
									</h3>
									<button className="text-xs text-red-600 hover:text-red-700 font-medium">
										See all
									</button>
								</div>
								<div className="divide-y divide-slate-100 dark:divide-slate-800">
									{nearbyHospitals.map((hos, idx) => (
										<div
											key={idx}
											className="px-5 py-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
											<div className="flex items-start justify-between mb-2">
												<div className="flex-1 min-w-0">
													<h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm truncate">
														{hos.name}
													</h4>
													<div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-1">
														<span className="flex items-center gap-1">
															<MapPin className="h-3 w-3" /> {hos.distance}
														</span>
														<span className="text-amber-500 font-semibold">
															★ {hos.rating}
														</span>
													</div>
												</div>
												<div
													className={`w-2 h-2 rounded-full mt-2 ${hos.available ? "bg-emerald-500" : "bg-slate-300"}`}></div>
											</div>
											<div className="flex items-center justify-between mt-2">
												<span className="text-[10px] font-medium text-slate-400">
													{hos.beds} beds available
												</span>
												{hos.available && (
													<span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full">
														OPEN
													</span>
												)}
											</div>
										</div>
									))}
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default PatientDashboard;
