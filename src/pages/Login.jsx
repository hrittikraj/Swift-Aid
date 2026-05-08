import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Shield } from "lucide-react";

function Login() {
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		remember: false,
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Login functionality will connect to backend soon!");
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 px-4 transition-colors">
			<div className="absolute top-20 left-10 w-72 h-72 bg-red-200 dark:bg-red-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
			<div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="relative w-full max-w-md">
				<div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 md:p-10 border border-transparent dark:border-slate-700">
					<div className="text-center mb-8">
						<motion.div
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ delay: 0.2, type: "spring" }}
							className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl shadow-lg mb-4">
							<Shield className="h-8 w-8 text-white" />
						</motion.div>
						<h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
							Welcome Back
						</h1>
						<p className="text-slate-600 dark:text-slate-400">
							Sign in to access SwiftAid emergency services
						</p>
					</div>

					<form onSubmit={handleSubmit} className="space-y-5">
						<div>
							<label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
								Email Address
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
									className="w-full pl-11 pr-4 py-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
								/>
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
									placeholder="Enter your password"
									required
									className="w-full pl-11 pr-11 py-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
								/>
								<button
									type="button"
									onClick={() => setShowPassword(!showPassword)}
									className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
									{showPassword ? (
										<EyeOff className="h-5 w-5" />
									) : (
										<Eye className="h-5 w-5" />
									)}
								</button>
							</div>
						</div>

						<div className="flex items-center justify-between">
							<label className="flex items-center gap-2 cursor-pointer">
								<input
									type="checkbox"
									name="remember"
									checked={formData.remember}
									onChange={handleChange}
									className="w-4 h-4 text-red-600 border-slate-300 rounded focus:ring-red-500"
								/>
								<span className="text-sm text-slate-600 dark:text-slate-400">
									Remember me
								</span>
							</label>
							<Link
								to="/forgot-password"
								className="text-sm text-red-600 hover:text-red-700 font-medium">
								Forgot password?
							</Link>
						</div>

						<motion.button
							type="submit"
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2">
							Sign In <ArrowRight className="h-5 w-5" />
						</motion.button>
					</form>

					<div className="my-6 flex items-center">
						<div className="flex-1 border-t border-slate-200 dark:border-slate-700"></div>
						<span className="px-4 text-sm text-slate-500 dark:text-slate-500">
							OR
						</span>
						<div className="flex-1 border-t border-slate-200 dark:border-slate-700"></div>
					</div>

					<div className="grid grid-cols-2 gap-3">
						<button className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-sm font-medium text-slate-700 dark:text-slate-300">
							<span className="text-lg">G</span> Google
						</button>
						<button className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-sm font-medium text-slate-700 dark:text-slate-300">
							<span className="text-lg">f</span> Facebook
						</button>
					</div>

					<p className="text-center mt-6 text-slate-600 dark:text-slate-400">
						Don't have an account?{" "}
						<Link
							to="/register"
							className="text-red-600 hover:text-red-700 font-semibold">
							Sign Up
						</Link>
					</p>
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}
					className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-xl">
					<p className="text-sm text-red-800 dark:text-red-300">
						🚨 <strong>Emergency?</strong> Call{" "}
						<a href="tel:999" className="font-bold underline">
							999
						</a>{" "}
						immediately or use SOS after login.
					</p>
				</motion.div>
			</motion.div>
		</div>
	);
}

export default Login;
