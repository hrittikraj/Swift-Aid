import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
	Mail,
	Lock,
	Eye,
	EyeOff,
	ArrowRight,
	User,
	Phone,
	Heart,
	Hospital,
	Ambulance,
} from "lucide-react";

function Register() {
	const [showPassword, setShowPassword] = useState(false);
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({
		role: "",
		fullName: "",
		email: "",
		phone: "",
		password: "",
		confirmPassword: "",
	});

	const handleChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });
	const handleRoleSelect = (role) => {
		setFormData({ ...formData, role });
		setStep(2);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (formData.password !== formData.confirmPassword) {
			alert("Passwords don't match!");
			return;
		}
		alert("Registration functionality will connect to backend soon!");
	};

	const roles = [
		{
			id: "patient",
			title: "Patient",
			description: "Request emergency medical aid",
			icon: <Heart className="h-8 w-8" />,
			color: "from-red-500 to-red-700",
			bg: "bg-red-50 dark:bg-red-900/20",
		},
		{
			id: "hospital",
			title: "Hospital",
			description: "Manage beds and emergency services",
			icon: <Hospital className="h-8 w-8" />,
			color: "from-blue-500 to-blue-700",
			bg: "bg-blue-50 dark:bg-blue-900/20",
		},
		{
			id: "ambulance_service",
			title: "Ambulance Service",
			description: "Provide ambulance dispatch services",
			icon: <Ambulance className="h-8 w-8" />,
			color: "from-green-500 to-green-700",
			bg: "bg-green-50 dark:bg-green-900/20",
		},
	];

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 px-4 transition-colors">
			<div className="absolute top-20 left-10 w-72 h-72 bg-red-200 dark:bg-red-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
			<div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="relative w-full max-w-2xl">
				<div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 md:p-10 border border-transparent dark:border-slate-700">
					<div className="text-center mb-8">
						<h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
							Create Account
						</h1>
						<p className="text-slate-600 dark:text-slate-400 mb-4">
							Join SwiftAid to access emergency services
						</p>

						<div className="flex items-center justify-center gap-2 mt-4">
							<div
								className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? "bg-red-600 text-white" : "bg-slate-200 dark:bg-slate-700 text-slate-400"}`}>
								1
							</div>
							<div
								className={`w-16 h-1 rounded ${step >= 2 ? "bg-red-600" : "bg-slate-200 dark:bg-slate-700"}`}></div>
							<div
								className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? "bg-red-600 text-white" : "bg-slate-200 dark:bg-slate-700 text-slate-400"}`}>
								2
							</div>
						</div>
					</div>

					{step === 1 && (
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							className="space-y-4">
							<h2 className="text-xl font-bold text-slate-900 dark:text-white text-center mb-6">
								Select Your Role
							</h2>
							{roles.map((role) => (
								<motion.button
									key={role.id}
									whileHover={{ scale: 1.02, y: -2 }}
									whileTap={{ scale: 0.98 }}
									onClick={() => handleRoleSelect(role.id)}
									className={`w-full p-5 ${role.bg} border-2 border-transparent hover:border-red-500 rounded-2xl transition-all text-left flex items-center gap-4 group`}>
									<div
										className={`bg-gradient-to-br ${role.color} text-white p-4 rounded-xl shadow-lg`}>
										{role.icon}
									</div>
									<div className="flex-1">
										<h3 className="text-lg font-bold text-slate-900 dark:text-white">
											{role.title}
										</h3>
										<p className="text-sm text-slate-600 dark:text-slate-400">
											{role.description}
										</p>
									</div>
									<ArrowRight className="h-6 w-6 text-slate-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
								</motion.button>
							))}
						</motion.div>
					)}

					{step === 2 && (
						<motion.form
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							onSubmit={handleSubmit}
							className="space-y-5">
							<button
								type="button"
								onClick={() => setStep(1)}
								className="text-sm text-red-600 hover:text-red-700 font-medium mb-2">
								← Change Role ({formData.role})
							</button>

							<div>
								<label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
									Full Name
								</label>
								<div className="relative">
									<User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
									<input
										type="text"
										name="fullName"
										value={formData.fullName}
										onChange={handleChange}
										placeholder="John Doe"
										required
										className="w-full pl-11 pr-4 py-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
									/>
								</div>
							</div>

							<div className="grid md:grid-cols-2 gap-4">
								<div>
									<label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
										Email
									</label>
									<div className="relative">
										<Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
										<input
											type="email"
											name="email"
											value={formData.email}
											onChange={handleChange}
											placeholder="you@example.com"
											required
											className="w-full pl-11 pr-4 py-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
										/>
									</div>
								</div>
								<div>
									<label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
										Phone
									</label>
									<div className="relative">
										<Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
										<input
											type="tel"
											name="phone"
											value={formData.phone}
											onChange={handleChange}
											placeholder="+880 1234 567890"
											required
											className="w-full pl-11 pr-4 py-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
										/>
									</div>
								</div>
							</div>

							<div>
								<label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
									Password
								</label>
								<div className="relative">
									<Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
									<input
										type={showPassword ? "text" : "password"}
										name="password"
										value={formData.password}
										onChange={handleChange}
										placeholder="Min 8 characters"
										required
										minLength={8}
										className="w-full pl-11 pr-11 py-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
									/>
									<button
										type="button"
										onClick={() => setShowPassword(!showPassword)}
										className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
										{showPassword ? (
											<EyeOff className="h-5 w-5" />
										) : (
											<Eye className="h-5 w-5" />
										)}
									</button>
								</div>
							</div>

							<div>
								<label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
									Confirm Password
								</label>
								<div className="relative">
									<Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
									<input
										type="password"
										name="confirmPassword"
										value={formData.confirmPassword}
										onChange={handleChange}
										placeholder="Re-enter your password"
										required
										className="w-full pl-11 pr-4 py-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
									/>
								</div>
							</div>

							<label className="flex items-start gap-2 cursor-pointer">
								<input
									type="checkbox"
									required
									className="w-4 h-4 mt-1 text-red-600 border-slate-300 rounded focus:ring-red-500"
								/>
								<span className="text-sm text-slate-600 dark:text-slate-400">
									I agree to the{" "}
									<Link to="/terms" className="text-red-600 hover:underline">
										Terms
									</Link>{" "}
									and{" "}
									<Link to="/privacy" className="text-red-600 hover:underline">
										Privacy Policy
									</Link>
								</span>
							</label>

							<motion.button
								type="submit"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2">
								Create Account <ArrowRight className="h-5 w-5" />
							</motion.button>
						</motion.form>
					)}

					<p className="text-center mt-6 text-slate-600 dark:text-slate-400">
						Already have an account?{" "}
						<Link
							to="/login"
							className="text-red-600 hover:text-red-700 font-semibold">
							Sign In
						</Link>
					</p>
				</div>
			</motion.div>
		</div>
	);
}

export default Register;
