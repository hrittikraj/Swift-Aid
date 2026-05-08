import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
	Shield,
	Users,
	Hospital,
	Ambulance,
	Activity,
	Bell,
	Search,
	TrendingUp,
	AlertCircle,
	CheckCircle2,
	XCircle,
	Clock,
	Menu,
	X,
	LogOut,
	Settings,
	HelpCircle,
	MoreVertical,
	ChevronRight,
	BarChart3,
	FileText,
	DollarSign,
	UserCheck,
	Eye,
	Heart,
	Database,
	Lock,
} from "lucide-react";

function AdminPanel() {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [activeTab, setActiveTab] = useState("overview");

	const stats = [
		{
			label: "Total Users",
			value: "12,847",
			change: "+1,234 this month",
			icon: Users,
			color: "blue",
		},
		{
			label: "Verified Hospitals",
			value: "247",
			change: "12 pending",
			icon: Hospital,
			color: "emerald",
		},
		{
			label: "Ambulance Services",
			value: "89",
			change: "5 pending",
			icon: Ambulance,
			color: "amber",
		},
		{
			label: "Platform Revenue",
			value: "৳2.4M",
			change: "+18% this month",
			icon: DollarSign,
			color: "purple",
		},
	];

	const pendingVerifications = [
		{
			id: 1,
			type: "Hospital",
			name: "Square Medical Center",
			license: "BMA-2024-7891",
			submitted: "2 hrs ago",
			priority: "high",
		},
		{
			id: 2,
			type: "Ambulance",
			name: "QuickCare Services",
			license: "TRA-AMB-1234",
			submitted: "5 hrs ago",
			priority: "normal",
		},
		{
			id: 3,
			type: "Hospital",
			name: "Apollo Diagnostic",
			license: "BMA-2024-7892",
			submitted: "1 day ago",
			priority: "high",
		},
		{
			id: 4,
			type: "Ambulance",
			name: "MediTrans Ltd.",
			license: "TRA-AMB-5678",
			submitted: "2 days ago",
			priority: "normal",
		},
	];

	const recentLogs = [
		{
			id: 1,
			action: "Hospital Verified",
			entity: "City General Hospital",
			admin: "Admin Khan",
			time: "5 min ago",
			type: "success",
		},
		{
			id: 2,
			action: "User Suspended",
			entity: "patient@example.com",
			admin: "Admin Rahman",
			time: "1 hr ago",
			type: "warning",
		},
		{
			id: 3,
			action: "Ambulance Rejected",
			entity: "FastMed Services",
			admin: "Admin Khan",
			time: "3 hrs ago",
			type: "error",
		},
		{
			id: 4,
			action: "New Service Approved",
			entity: "Dhaka Medical",
			admin: "Admin Rahman",
			time: "6 hrs ago",
			type: "success",
		},
		{
			id: 5,
			action: "System Update",
			entity: "Database backup",
			admin: "System",
			time: "12 hrs ago",
			type: "info",
		},
	];

	const liveEmergencies = [
		{
			id: 1,
			location: "Dhanmondi",
			type: "Cardiac",
			status: "En route",
			priority: "critical",
		},
		{
			id: 2,
			location: "Gulshan",
			type: "Accident",
			status: "Picked up",
			priority: "high",
		},
		{
			id: 3,
			location: "Banani",
			type: "Trauma",
			status: "Dispatched",
			priority: "critical",
		},
	];

	const navItems = [
		{ icon: Activity, label: "Overview", id: "overview" },
		{
			icon: UserCheck,
			label: "Verifications",
			id: "verifications",
			badge: "17",
		},
		{ icon: Users, label: "User Management", id: "users" },
		{ icon: Hospital, label: "Hospitals", id: "hospitals" },
		{ icon: Ambulance, label: "Services", id: "services" },
		{
			icon: AlertCircle,
			label: "Live Emergencies",
			id: "emergencies",
			badge: "3",
		},
		{ icon: FileText, label: "Audit Logs", id: "logs" },
		{ icon: BarChart3, label: "Analytics", id: "analytics" },
	];

	const colorMap = {
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
		red: {
			bg: "bg-red-50 dark:bg-red-900/20",
			text: "text-red-600 dark:text-red-400",
			dot: "bg-red-500",
		},
	};

	const getLogIcon = (type) => {
		if (type === "success")
			return <CheckCircle2 className="h-4 w-4 text-emerald-500" />;
		if (type === "error") return <XCircle className="h-4 w-4 text-red-500" />;
		if (type === "warning")
			return <AlertCircle className="h-4 w-4 text-amber-500" />;
		return <Database className="h-4 w-4 text-blue-500" />;
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
				className={`fixed inset-y-0 left-0 z-40 w-72 bg-slate-900 dark:bg-slate-950 border-r border-slate-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} flex flex-col`}>
				<div className="px-6 py-6 border-b border-slate-800">
					<Link to="/" className="flex items-center gap-3">
						<div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-700 rounded-xl flex items-center justify-center shadow-md">
							<Shield className="h-5 w-5 text-white" />
						</div>
						<div>
							<p className="text-lg font-bold text-white leading-none">
								Swift<span className="text-amber-400">Aid</span>
							</p>
							<p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
								<Lock className="h-3 w-3" /> Admin Panel
							</p>
						</div>
					</Link>
				</div>

				{/* Admin Badge */}
				<div className="mx-4 mt-4 mb-2 p-3 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-xl">
					<div className="flex items-center gap-2 mb-1">
						<Shield className="h-4 w-4 text-amber-400" />
						<span className="text-xs font-bold text-amber-400">
							SUPER ADMIN
						</span>
					</div>
					<p className="text-[10px] text-slate-400">
						Full system access enabled
					</p>
				</div>

				<div className="px-6 mt-2 mb-3">
					<p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
						Management
					</p>
				</div>

				<nav className="px-4 space-y-1 flex-1 overflow-y-auto">
					{navItems.map((item) => {
						const Icon = item.icon;
						const isActive = activeTab === item.id;
						return (
							<button
								key={item.id}
								onClick={() => setActiveTab(item.id)}
								className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all relative ${
									isActive
										? "bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 border-l-2 border-amber-500"
										: "text-slate-400 hover:bg-slate-800 hover:text-white"
								}`}>
								<Icon
									className={`h-5 w-5 ${isActive ? "text-amber-400" : "text-slate-500"}`}
								/>
								<span className="flex-1 text-left">{item.label}</span>
								{item.badge && (
									<span className="text-[10px] font-bold px-2 py-0.5 bg-red-500/20 text-red-400 rounded-full animate-pulse">
										{item.badge}
									</span>
								)}
							</button>
						);
					})}
				</nav>

				<div className="px-4 pb-2">
					<div className="border-t border-slate-800 my-4"></div>
					<a
						href="#"
						className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-slate-400 hover:bg-slate-800 transition-colors">
						<Settings className="h-4 w-4" /> Settings
					</a>
					<a
						href="#"
						className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-slate-400 hover:bg-slate-800 transition-colors">
						<HelpCircle className="h-4 w-4" /> Documentation
					</a>
				</div>

				<div className="p-4 m-4 mt-0 bg-slate-800/50 rounded-2xl border border-slate-700">
					<div className="flex items-center gap-3">
						<div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
							AK
						</div>
						<div className="flex-1 min-w-0">
							<p className="font-semibold text-white text-sm truncate">
								Admin Khan
							</p>
							<p className="text-xs text-slate-400 truncate">
								admin@swiftaid.com
							</p>
						</div>
						<button className="p-1.5 hover:bg-slate-700 rounded-lg transition-colors">
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
									placeholder="Search users, hospitals, services..."
									className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-transparent rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:bg-white dark:focus:bg-slate-700 focus:border-slate-200 dark:focus:border-slate-600 transition-all"
								/>
							</div>
						</div>

						<div className="flex items-center gap-2">
							<button className="relative p-2.5 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl">
								<Bell className="h-5 w-5 text-slate-600 dark:text-slate-400" />
								<span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-slate-900 animate-pulse"></span>
							</button>
						</div>
					</div>
				</header>

				<div className="p-6 lg:p-10 space-y-8">
					<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
						<div>
							<p className="text-sm font-medium text-amber-600 mb-1 flex items-center gap-2">
								<Shield className="h-4 w-4" /> Admin Control Center
							</p>
							<h1 className="text-3xl font-bold text-slate-900 dark:text-white">
								System Overview
							</h1>
							<p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
								Manage hospitals, services, and platform-wide operations
							</p>
						</div>
						<div className="flex gap-2">
							<button className="px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
								Export Data
							</button>
							<button className="px-4 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-xl text-sm font-medium transition-colors flex items-center gap-2 shadow-lg shadow-amber-200/50">
								<Shield className="h-4 w-4" /> System Health
							</button>
						</div>
					</div>

					{/* System Status Banner */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 text-white shadow-2xl relative overflow-hidden">
						<div
							className="absolute inset-0 opacity-10"
							style={{
								backgroundImage:
									"linear-gradient(rgba(245,158,11,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,.3) 1px, transparent 1px)",
								backgroundSize: "30px 30px",
							}}></div>
						<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
							<div className="flex items-center gap-4">
								<div className="w-14 h-14 bg-emerald-500/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-emerald-400/30">
									<CheckCircle2 className="h-7 w-7 text-emerald-400" />
								</div>
								<div>
									<h2 className="text-xl font-bold">All Systems Operational</h2>
									<p className="text-slate-400 text-sm">
										99.97% uptime • Database synchronized • API responsive
									</p>
								</div>
							</div>
							<div className="flex gap-6">
								<div className="text-center">
									<p className="text-2xl font-bold text-emerald-400">99.97%</p>
									<p className="text-xs text-slate-400">Uptime</p>
								</div>
								<div className="w-px h-10 bg-slate-700"></div>
								<div className="text-center">
									<p className="text-2xl font-bold text-amber-400">2.3s</p>
									<p className="text-xs text-slate-400">Avg Response</p>
								</div>
								<div className="w-px h-10 bg-slate-700"></div>
								<div className="text-center">
									<p className="text-2xl font-bold text-blue-400">847</p>
									<p className="text-xs text-slate-400">Active Sessions</p>
								</div>
							</div>
						</div>
					</motion.div>

					{/* KPI Cards */}
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

					{/* Two Column */}
					<div className="grid lg:grid-cols-3 gap-6">
						<div className="lg:col-span-2 space-y-6">
							{/* Pending Verifications */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden">
								<div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
									<div>
										<h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
											<UserCheck className="h-4 w-4 text-amber-500" /> Pending
											Verifications
										</h2>
										<p className="text-xs text-slate-400 mt-0.5">
											Review and approve registration requests
										</p>
									</div>
									<span className="text-xs font-bold px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full">
										{pendingVerifications.length} pending
									</span>
								</div>
								<div className="divide-y divide-slate-100 dark:divide-slate-800">
									{pendingVerifications.map((req) => (
										<div
											key={req.id}
											className="px-6 py-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
											<div className="flex items-start gap-4">
												<div
													className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${req.type === "Hospital" ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" : "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400"}`}>
													{req.type === "Hospital" ? (
														<Hospital className="h-5 w-5" />
													) : (
														<Ambulance className="h-5 w-5" />
													)}
												</div>
												<div className="flex-1 min-w-0">
													<div className="flex items-center gap-2 flex-wrap mb-1">
														<p className="font-semibold text-slate-900 dark:text-white text-sm">
															{req.name}
														</p>
														<span className="text-[10px] font-medium px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full">
															{req.type}
														</span>
														{req.priority === "high" && (
															<span className="text-[10px] font-bold px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full">
																HIGH PRIORITY
															</span>
														)}
													</div>
													<p className="text-xs text-slate-500 dark:text-slate-400">
														License:{" "}
														<span className="font-mono">{req.license}</span>
													</p>
													<p className="text-[10px] text-slate-400 mt-1">
														Submitted {req.submitted}
													</p>
												</div>
												<div className="flex flex-col gap-1.5">
													<button className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg flex items-center gap-1">
														<CheckCircle2 className="h-3 w-3" /> Approve
													</button>
													<button className="px-3 py-1.5 bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-900/50 text-red-600 dark:text-red-400 text-xs font-medium rounded-lg flex items-center gap-1">
														<XCircle className="h-3 w-3" /> Reject
													</button>
												</div>
											</div>
										</div>
									))}
								</div>
							</motion.div>

							{/* Audit Logs */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 }}
								className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
								<div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
									<h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
										<FileText className="h-4 w-4 text-slate-500" /> Audit Logs
									</h2>
									<button className="text-xs text-amber-600 font-medium">
										View All Logs →
									</button>
								</div>
								<div className="divide-y divide-slate-100 dark:divide-slate-800">
									{recentLogs.map((log) => (
										<div
											key={log.id}
											className="px-6 py-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors flex items-center gap-3">
											{getLogIcon(log.type)}
											<div className="flex-1 min-w-0">
												<div className="flex items-center gap-2 flex-wrap">
													<p className="font-semibold text-slate-900 dark:text-white text-sm">
														{log.action}
													</p>
													<span className="text-xs text-slate-400">→</span>
													<p className="text-xs text-slate-600 dark:text-slate-400">
														{log.entity}
													</p>
												</div>
												<p className="text-[11px] text-slate-400 mt-0.5">
													By {log.admin} • {log.time}
												</p>
											</div>
											<button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">
												<MoreVertical className="h-4 w-4 text-slate-400" />
											</button>
										</div>
									))}
								</div>
							</motion.div>
						</div>

						<div className="space-y-6">
							{/* Live Emergencies Map */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								className="bg-gradient-to-br from-red-600 to-rose-700 rounded-2xl p-5 text-white relative overflow-hidden">
								<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 animate-pulse"></div>
								<div className="relative z-10">
									<div className="flex items-center justify-between mb-4">
										<div className="flex items-center gap-2">
											<span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
											<p className="text-xs uppercase tracking-wider font-bold">
												Live Now
											</p>
										</div>
										<span className="text-[10px] bg-white/20 px-2 py-1 rounded-full">
											Real-time
										</span>
									</div>
									<p className="text-3xl font-bold mb-1">
										{liveEmergencies.length} Active
									</p>
									<p className="text-sm text-red-100 mb-4">
										Emergency cases in progress
									</p>

									<div className="space-y-2">
										{liveEmergencies.map((em) => (
											<div
												key={em.id}
												className="bg-white/10 backdrop-blur-md rounded-xl p-3 flex items-center justify-between">
												<div>
													<p className="text-sm font-semibold">
														{em.type} • {em.location}
													</p>
													<p className="text-[10px] text-red-100">
														{em.status}
													</p>
												</div>
												<span
													className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${em.priority === "critical" ? "bg-yellow-300 text-yellow-900" : "bg-white/20"}`}>
													{em.priority.toUpperCase()}
												</span>
											</div>
										))}
									</div>
								</div>
							</motion.div>

							{/* Quick Stats */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.1 }}
								className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-5">
								<h3 className="font-bold text-slate-900 dark:text-white text-sm mb-4">
									Today's Activity
								</h3>
								<div className="space-y-3">
									{[
										{
											label: "New Registrations",
											value: 47,
											icon: Users,
											color: "blue",
										},
										{
											label: "Verifications Done",
											value: 12,
											icon: CheckCircle2,
											color: "emerald",
										},
										{
											label: "Emergency Calls",
											value: 89,
											icon: AlertCircle,
											color: "red",
										},
										{
											label: "System Alerts",
											value: 3,
											icon: Bell,
											color: "amber",
										},
									].map((item, idx) => {
										const Icon = item.icon;
										const colors = colorMap[item.color];
										return (
											<div
												key={idx}
												className="flex items-center justify-between">
												<div className="flex items-center gap-3">
													<div
														className={`w-8 h-8 ${colors.bg} rounded-lg flex items-center justify-center ${colors.text}`}>
														<Icon className="h-4 w-4" />
													</div>
													<span className="text-sm text-slate-700 dark:text-slate-300">
														{item.label}
													</span>
												</div>
												<span className="font-bold text-slate-900 dark:text-white">
													{item.value}
												</span>
											</div>
										);
									})}
								</div>
							</motion.div>

							{/* Security Status */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.2 }}
								className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-900/50 rounded-2xl p-4">
								<div className="flex items-start gap-3">
									<div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/40 rounded-xl flex items-center justify-center flex-shrink-0">
										<Lock className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
									</div>
									<div className="flex-1">
										<p className="font-bold text-emerald-900 dark:text-emerald-300 text-sm">
											Security Status: Secure
										</p>
										<p className="text-xs text-emerald-700 dark:text-emerald-400 mt-1">
											No suspicious activity in last 24 hours
										</p>
										<button className="mt-3 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline">
											Run Security Scan →
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

export default AdminPanel;
