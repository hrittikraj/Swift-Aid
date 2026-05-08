import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
	User,
	Mail,
	Phone,
	MapPin,
	Calendar,
	Heart,
	Edit2,
	Camera,
	Shield,
	Bell,
	Lock,
	Globe,
	LogOut,
	ChevronRight,
	Save,
	Activity,
	Droplet,
	Pill,
	FileText,
	AlertCircle,
	CheckCircle2,
	ArrowLeft,
	Settings,
	Eye,
	EyeOff,
} from "lucide-react";

function Profile() {
	const [activeTab, setActiveTab] = useState("personal");
	const [editMode, setEditMode] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const [profileData, setProfileData] = useState({
		fullName: "John Doe",
		email: "john.doe@swiftaid.com",
		phone: "+880 1712-345678",
		dateOfBirth: "1990-05-15",
		bloodGroup: "A+",
		address: "Dhanmondi 27, Dhaka 1209",
		emergencyContact: "+880 1812-987654",
		medicalHistory: "Hypertension, Diabetes Type 2",
	});

	const stats = [
		{ label: "Total Cases", value: 23, icon: Activity, color: "red" },
		{ label: "Successful", value: 21, icon: CheckCircle2, color: "emerald" },
		{ label: "Donations", value: 5, icon: Droplet, color: "pink" },
		{ label: "Years Active", value: 3, icon: Calendar, color: "blue" },
	];

	const tabs = [
		{ id: "personal", label: "Personal Info", icon: User },
		{ id: "medical", label: "Medical History", icon: Heart },
		{ id: "security", label: "Security", icon: Shield },
		{ id: "notifications", label: "Notifications", icon: Bell },
		{ id: "preferences", label: "Preferences", icon: Settings },
	];

	const colorMap = {
		red: {
			bg: "bg-red-50 dark:bg-red-900/20",
			text: "text-red-600 dark:text-red-400",
		},
		emerald: {
			bg: "bg-emerald-50 dark:bg-emerald-900/20",
			text: "text-emerald-600 dark:text-emerald-400",
		},
		pink: {
			bg: "bg-pink-50 dark:bg-pink-900/20",
			text: "text-pink-600 dark:text-pink-400",
		},
		blue: {
			bg: "bg-blue-50 dark:bg-blue-900/20",
			text: "text-blue-600 dark:text-blue-400",
		},
	};

	const handleChange = (e) => {
		setProfileData({ ...profileData, [e.target.name]: e.target.value });
	};

	return (
		<div className="min-h-screen bg-[#FAFAFA] dark:bg-slate-950 transition-colors">
			{/* Top Bar */}
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
								My Profile
							</h1>
							<p className="text-xs text-slate-500 dark:text-slate-400">
								Manage your account settings
							</p>
						</div>
					</div>
				</div>
			</header>

			{/* Profile Header Banner */}
			<div className="bg-gradient-to-r from-red-600 via-rose-600 to-orange-600 relative overflow-hidden">
				<div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-32 -mt-32"></div>
				<div className="absolute bottom-0 left-1/3 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl"></div>

				<div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 relative">
					<div className="flex flex-col md:flex-row items-start md:items-end gap-6">
						{/* Avatar */}
						<motion.div
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ type: "spring", delay: 0.2 }}
							className="relative">
							<div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center text-4xl font-bold text-red-600 shadow-2xl border-4 border-white">
								JD
							</div>
							<button className="absolute bottom-2 right-2 w-9 h-9 bg-slate-900 hover:bg-slate-800 rounded-xl flex items-center justify-center text-white shadow-lg transition-colors">
								<Camera className="h-4 w-4" />
							</button>
						</motion.div>

						{/* User Info */}
						<div className="flex-1 text-white">
							<div className="flex items-center gap-2 mb-2">
								<span className="text-xs font-bold px-3 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
									PATIENT
								</span>
								<span className="text-xs font-bold px-3 py-1 bg-emerald-500/30 backdrop-blur-md rounded-full border border-emerald-300/30 flex items-center gap-1">
									<CheckCircle2 className="h-3 w-3" /> Verified
								</span>
							</div>
							<h2 className="text-3xl font-bold mb-1">
								{profileData.fullName}
							</h2>
							<p className="text-red-100 text-sm mb-3">
								Patient ID #SA-PT-4892
							</p>
							<div className="flex flex-wrap items-center gap-4 text-sm text-red-100">
								<span className="flex items-center gap-1.5">
									<Mail className="h-4 w-4" /> {profileData.email}
								</span>
								<span className="flex items-center gap-1.5">
									<Phone className="h-4 w-4" /> {profileData.phone}
								</span>
								<span className="flex items-center gap-1.5">
									<MapPin className="h-4 w-4" /> Dhaka, BD
								</span>
							</div>
						</div>

						{/* Edit Button */}
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => setEditMode(!editMode)}
							className="px-5 py-3 bg-white text-red-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2">
							{editMode ? (
								<>
									<Save className="h-4 w-4" /> Save Changes
								</>
							) : (
								<>
									<Edit2 className="h-4 w-4" /> Edit Profile
								</>
							)}
						</motion.button>
					</div>
				</div>
			</div>

			{/* Stats Bar */}
			<div className="max-w-7xl mx-auto px-4 lg:px-8 -mt-8 relative z-10 mb-8">
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-xl border border-slate-100 dark:border-slate-800">
					{stats.map((stat, i) => {
						const Icon = stat.icon;
						const colors = colorMap[stat.color];
						return (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: i * 0.1 }}
								className="flex items-center gap-3">
								<div
									className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center ${colors.text}`}>
									<Icon className="h-5 w-5" />
								</div>
								<div>
									<p className="text-2xl font-bold text-slate-900 dark:text-white">
										{stat.value}
									</p>
									<p className="text-xs text-slate-500 dark:text-slate-400">
										{stat.label}
									</p>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-4 lg:px-8 pb-12">
				<div className="grid lg:grid-cols-4 gap-6">
					{/* Sidebar Tabs */}
					<div className="lg:col-span-1">
						<div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-2">
							{tabs.map((tab) => {
								const Icon = tab.icon;
								const isActive = activeTab === tab.id;
								return (
									<button
										key={tab.id}
										onClick={() => setActiveTab(tab.id)}
										className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
											isActive
												? "bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400"
												: "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
										}`}>
										<Icon
											className={`h-4 w-4 ${isActive ? "text-red-600" : "text-slate-400"}`}
										/>
										<span className="flex-1 text-left">{tab.label}</span>
										{isActive && (
											<ChevronRight className="h-4 w-4 text-red-600" />
										)}
									</button>
								);
							})}

							<div className="border-t border-slate-100 dark:border-slate-800 my-2"></div>

							<button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
								<LogOut className="h-4 w-4" />
								<span>Log Out</span>
							</button>
						</div>
					</div>

					{/* Tab Content */}
					<div className="lg:col-span-3">
						{/* Personal Info Tab */}
						{activeTab === "personal" && (
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-6 lg:p-8">
								<div className="flex items-center justify-between mb-6">
									<div>
										<h2 className="text-xl font-bold text-slate-900 dark:text-white">
											Personal Information
										</h2>
										<p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
											Update your personal details
										</p>
									</div>
								</div>

								<div className="grid md:grid-cols-2 gap-5">
									{[
										{
											label: "Full Name",
											name: "fullName",
											icon: User,
											type: "text",
										},
										{
											label: "Email Address",
											name: "email",
											icon: Mail,
											type: "email",
										},
										{
											label: "Phone Number",
											name: "phone",
											icon: Phone,
											type: "tel",
										},
										{
											label: "Date of Birth",
											name: "dateOfBirth",
											icon: Calendar,
											type: "date",
										},
										{
											label: "Blood Group",
											name: "bloodGroup",
											icon: Droplet,
											type: "text",
										},
										{
											label: "Emergency Contact",
											name: "emergencyContact",
											icon: AlertCircle,
											type: "tel",
										},
									].map((field) => {
										const Icon = field.icon;
										return (
											<div key={field.name}>
												<label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
													{field.label}
												</label>
												<div className="relative">
													<Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
													<input
														type={field.type}
														name={field.name}
														value={profileData[field.name]}
														onChange={handleChange}
														disabled={!editMode}
														className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm font-medium border transition-all ${
															editMode
																? "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
																: "border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 cursor-not-allowed"
														}`}
													/>
												</div>
											</div>
										);
									})}

									<div className="md:col-span-2">
										<label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
											Address
										</label>
										<div className="relative">
											<MapPin className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
											<textarea
												name="address"
												value={profileData.address}
												onChange={handleChange}
												disabled={!editMode}
												rows="2"
												className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm font-medium border transition-all ${
													editMode
														? "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
														: "border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 cursor-not-allowed"
												}`}
											/>
										</div>
									</div>
								</div>
							</motion.div>
						)}

						{/* Medical History Tab */}
						{activeTab === "medical" && (
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								className="space-y-6">
								<div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-6 lg:p-8">
									<h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
										<Heart className="h-5 w-5 text-red-500" /> Medical Profile
									</h2>

									<div className="grid md:grid-cols-3 gap-4 mb-6">
										{[
											{
												label: "Blood Group",
												value: "A+",
												sub: "Verified",
												color: "red",
											},
											{
												label: "Height",
												value: "5'8\"",
												sub: "173 cm",
												color: "blue",
											},
											{
												label: "Weight",
												value: "72 kg",
												sub: "Normal range",
												color: "emerald",
											},
										].map((item, idx) => {
											const colors = colorMap[item.color];
											return (
												<div
													key={idx}
													className={`${colors.bg} rounded-xl p-4 border border-transparent`}>
													<p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
														{item.label}
													</p>
													<p className={`text-2xl font-bold ${colors.text}`}>
														{item.value}
													</p>
													<p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">
														{item.sub}
													</p>
												</div>
											);
										})}
									</div>

									<h3 className="font-bold text-slate-900 dark:text-white mb-3">
										Medical Conditions
									</h3>
									<div className="space-y-2 mb-6">
										{[
											"Hypertension (Diagnosed 2020)",
											"Diabetes Type 2 (Diagnosed 2021)",
											"Mild Asthma",
										].map((cond, idx) => (
											<div
												key={idx}
												className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
												<AlertCircle className="h-4 w-4 text-amber-500 flex-shrink-0" />
												<span className="text-sm text-slate-700 dark:text-slate-300">
													{cond}
												</span>
											</div>
										))}
									</div>

									<h3 className="font-bold text-slate-900 dark:text-white mb-3">
										Allergies
									</h3>
									<div className="flex flex-wrap gap-2">
										{["Penicillin", "Peanuts", "Shellfish"].map(
											(allergy, idx) => (
												<span
													key={idx}
													className="px-3 py-1.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-xs font-bold">
													{allergy}
												</span>
											),
										)}
									</div>
								</div>
							</motion.div>
						)}

						{/* Security Tab */}
						{activeTab === "security" && (
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-6 lg:p-8">
								<h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
									<Shield className="h-5 w-5 text-emerald-500" /> Security
									Settings
								</h2>

								<div className="space-y-5">
									<div>
										<label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
											Current Password
										</label>
										<div className="relative">
											<Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
											<input
												type={showPassword ? "text" : "password"}
												placeholder="••••••••"
												className="w-full pl-10 pr-11 py-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
											/>
											<button
												onClick={() => setShowPassword(!showPassword)}
												className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
												{showPassword ? (
													<EyeOff className="h-4 w-4" />
												) : (
													<Eye className="h-4 w-4" />
												)}
											</button>
										</div>
									</div>

									<div className="grid md:grid-cols-2 gap-4">
										<div>
											<label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
												New Password
											</label>
											<input
												type="password"
												placeholder="Enter new password"
												className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
											/>
										</div>
										<div>
											<label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
												Confirm Password
											</label>
											<input
												type="password"
												placeholder="Confirm new password"
												className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
											/>
										</div>
									</div>

									<button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm transition-colors">
										Update Password
									</button>

									<div className="border-t border-slate-100 dark:border-slate-800 pt-6 mt-6">
										<h3 className="font-bold text-slate-900 dark:text-white mb-4">
											Two-Factor Authentication
										</h3>
										<div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
											<div>
												<p className="font-semibold text-slate-900 dark:text-white text-sm">
													2FA via SMS
												</p>
												<p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
													Add an extra layer of security
												</p>
											</div>
											<label className="relative inline-flex items-center cursor-pointer">
												<input type="checkbox" className="sr-only peer" />
												<div className="w-11 h-6 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
											</label>
										</div>
									</div>
								</div>
							</motion.div>
						)}

						{/* Notifications Tab */}
						{activeTab === "notifications" && (
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-6 lg:p-8">
								<h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
									<Bell className="h-5 w-5 text-amber-500" /> Notification
									Preferences
								</h2>

								<div className="space-y-3">
									{[
										{
											title: "Emergency Alerts",
											desc: "Get notified about critical health alerts",
											enabled: true,
										},
										{
											title: "Booking Updates",
											desc: "Status changes for your bookings",
											enabled: true,
										},
										{
											title: "Hospital News",
											desc: "Updates from your registered hospitals",
											enabled: false,
										},
										{
											title: "Promotional Offers",
											desc: "Discounts and special offers",
											enabled: false,
										},
										{
											title: "Weekly Health Tips",
											desc: "Get health tips every week",
											enabled: true,
										},
									].map((notif, idx) => (
										<div
											key={idx}
											className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
											<div className="flex-1">
												<p className="font-semibold text-slate-900 dark:text-white text-sm">
													{notif.title}
												</p>
												<p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
													{notif.desc}
												</p>
											</div>
											<label className="relative inline-flex items-center cursor-pointer">
												<input
													type="checkbox"
													defaultChecked={notif.enabled}
													className="sr-only peer"
												/>
												<div className="w-11 h-6 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
											</label>
										</div>
									))}
								</div>
							</motion.div>
						)}

						{/* Preferences Tab */}
						{activeTab === "preferences" && (
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-6 lg:p-8">
								<h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
									<Settings className="h-5 w-5 text-blue-500" /> App Preferences
								</h2>

								<div className="space-y-5">
									<div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
										<label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
											Language
										</label>
										<select className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
											<option>English (US)</option>
											<option>বাংলা (Bengali)</option>
											<option>हिन्दी (Hindi)</option>
											<option>اردو (Urdu)</option>
										</select>
									</div>

									<div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
										<label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
											Time Zone
										</label>
										<select className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
											<option>(GMT+6:00) Dhaka</option>
											<option>(GMT+5:30) Kolkata</option>
											<option>(GMT+0:00) London</option>
										</select>
									</div>

									<div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
										<div>
											<p className="font-semibold text-slate-900 dark:text-white text-sm">
												Auto-detect Location
											</p>
											<p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
												Use GPS for emergency dispatch
											</p>
										</div>
										<label className="relative inline-flex items-center cursor-pointer">
											<input
												type="checkbox"
												defaultChecked
												className="sr-only peer"
											/>
											<div className="w-11 h-6 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
										</label>
									</div>
								</div>
							</motion.div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
