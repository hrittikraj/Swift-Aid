import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
	Heart,
	Activity,
	Shield,
	Clock,
	MapPin,
	Phone,
	ChevronRight,
	Hospital,
	Pill,
	Droplet,
	Zap,
	Users,
	Award,
} from "lucide-react";

function Home() {
	const fadeInUp = {
		initial: { opacity: 0, y: 60 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.6 },
	};
	const stagger = { animate: { transition: { staggerChildren: 0.1 } } };

	return (
		<div className="min-h-screen overflow-hidden bg-white dark:bg-slate-900 transition-colors">
			{/* Hero */}
			<section className="relative bg-gradient-to-br from-red-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-20 overflow-hidden">
				<div className="absolute top-20 left-10 w-72 h-72 bg-red-200 dark:bg-red-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
				<div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<motion.div initial="initial" animate="animate" variants={stagger}>
							<motion.div
								variants={fadeInUp}
								className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-900/30 text-primary rounded-full text-sm font-semibold mb-4">
								<span className="relative flex h-3 w-3">
									<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
									<span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
								</span>
								24/7 Emergency Response
							</motion.div>

							<motion.h1
								variants={fadeInUp}
								className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
								Rapid Medical Aid{" "}
								<span className="bg-gradient-to-r from-primary to-red-700 bg-clip-text text-transparent">
									When Every Second Counts
								</span>
							</motion.h1>

							<motion.p
								variants={fadeInUp}
								className="text-lg text-gray-600 dark:text-slate-400 mb-8">
								SwiftAid connects you to the nearest hospitals, ambulances, and
								emergency medical supplies instantly.
							</motion.p>

							<motion.div
								variants={fadeInUp}
								className="flex flex-col sm:flex-row gap-4">
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}>
									<Link
										to="/register"
										className="px-8 py-4 bg-gradient-to-r from-primary to-red-700 text-white font-bold rounded-xl shadow-xl flex items-center justify-center gap-2 hover:shadow-2xl">
										<Phone className="h-5 w-5" /> Request Emergency
									</Link>
								</motion.div>
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}>
									<Link
										to="/about"
										className="px-8 py-4 border-2 border-secondary dark:border-blue-400 text-secondary dark:text-blue-400 font-bold rounded-xl hover:bg-secondary hover:text-white transition-all flex items-center justify-center gap-2">
										Learn More <ChevronRight className="h-5 w-5" />
									</Link>
								</motion.div>
							</motion.div>

							<motion.div
								variants={fadeInUp}
								className="grid grid-cols-3 gap-6 mt-12">
								{[
									{ number: "500+", label: "Hospitals" },
									{ number: "2 min", label: "Response Time" },
									{ number: "10K+", label: "Lives Saved" },
								].map((stat, i) => (
									<motion.div
										key={i}
										whileHover={{ y: -5 }}
										className="text-center">
										<p className="text-3xl font-bold text-primary">
											{stat.number}
										</p>
										<p className="text-sm text-gray-600 dark:text-slate-400">
											{stat.label}
										</p>
									</motion.div>
								))}
							</motion.div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							className="relative">
							<div className="relative rounded-3xl overflow-hidden shadow-2xl">
								<img
									src="https://images.unsplash.com/photo-1612531386530-97286d97c2d2?w=800&q=80"
									alt="Emergency"
									className="w-full h-[500px] object-cover"
								/>
								<motion.div
									animate={{ y: [0, -10, 0] }}
									transition={{ duration: 3, repeat: Infinity }}
									className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl">
									<div className="flex items-center gap-3">
										<div className="bg-success rounded-full p-2 animate-pulse">
											<Activity className="h-6 w-6 text-white" />
										</div>
										<div>
											<p className="font-bold text-slate-900 dark:text-white">
												Ambulance Dispatched
											</p>
											<p className="text-sm text-gray-600 dark:text-slate-400">
												ETA: 4 minutes • 2.3 km away
											</p>
										</div>
									</div>
								</motion.div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Features */}
			<section className="py-20 bg-white dark:bg-slate-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16">
						<span className="text-primary font-semibold uppercase tracking-wider">
							Our Services
						</span>
						<h2 className="text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-4">
							Comprehensive Emergency Care
						</h2>
						<p className="text-lg text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
							Everything you need to save lives, all in one platform.
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{
								icon: <Zap className="h-7 w-7" />,
								title: "Ambulance Service",
								description: "Real-time GPS tracking.",
								image:
									"https://images.unsplash.com/photo-1587745416684-47953f16c02f?w=400&q=80",
							},
							{
								icon: <Hospital className="h-7 w-7" />,
								title: "Hospital Booking",
								description: "Check availability instantly.",
								image:
									"https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&q=80",
							},
							{
								icon: <Droplet className="h-7 w-7" />,
								title: "Blood & Antivenom",
								description: "Find emergency stocks.",
								image:
									"https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=400&q=80",
							},
							{
								icon: <Pill className="h-7 w-7" />,
								title: "Vaccine Finder",
								description: "Locate emergency vaccines.",
								image:
									"https://images.unsplash.com/photo-1632053002491-d9eb2f1f8a44?w=400&q=80",
							},
						].map((service, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.15 }}
								whileHover={{ y: -10 }}
								className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group border border-transparent dark:border-slate-700">
								<div className="h-40 overflow-hidden">
									<img
										src={service.image}
										alt={service.title}
										className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
									/>
								</div>
								<div className="p-6">
									<div className="bg-red-100 dark:bg-red-900/30 text-primary w-14 h-14 rounded-xl flex items-center justify-center mb-4">
										{service.icon}
									</div>
									<h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
										{service.title}
									</h3>
									<p className="text-gray-600 dark:text-slate-400">
										{service.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* How It Works */}
			<section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<span className="text-primary font-semibold uppercase tracking-wider">
							Simple Process
						</span>
						<h2 className="text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-4">
							How It Works
						</h2>
						<p className="text-lg text-gray-600 dark:text-slate-400">
							Get help in just 3 simple steps
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								step: "1",
								icon: <Heart className="h-12 w-12" />,
								title: "Request Help",
								description: "Tap SOS and share location.",
								color: "primary",
							},
							{
								step: "2",
								icon: <Activity className="h-12 w-12" />,
								title: "Get Matched",
								description: "Connect with nearest hospital.",
								color: "secondary",
							},
							{
								step: "3",
								icon: <Zap className="h-12 w-12" />,
								title: "Receive Aid",
								description: "Track ambulance arrival.",
								color: "success",
							},
						].map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2 }}
								className="text-center bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
								<motion.div
									whileHover={{ scale: 1.1, rotate: 360 }}
									transition={{ duration: 0.5 }}
									className={`bg-${item.color} text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg`}>
									{item.step}
								</motion.div>
								<div
									className={`text-${item.color} mx-auto mb-4 flex justify-center`}>
									{item.icon}
								</div>
								<h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
									{item.title}
								</h3>
								<p className="text-gray-600 dark:text-slate-400">
									{item.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-20 bg-gradient-to-r from-primary via-red-600 to-red-700 relative overflow-hidden">
				<motion.div
					animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
					transition={{ duration: 4, repeat: Infinity }}
					className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full"></motion.div>
				<motion.div
					animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
					transition={{ duration: 4, repeat: Infinity }}
					className="absolute bottom-10 right-10 w-72 h-72 bg-white rounded-full"></motion.div>
				<div className="max-w-4xl mx-auto text-center px-4 relative">
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
						Don't Wait for an Emergency
					</h2>
					<p className="text-xl text-red-100 mb-8">
						Sign up now for instant access to emergency services.
					</p>
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="inline-block">
						<Link
							to="/register"
							className="inline-flex items-center gap-2 px-10 py-4 bg-white text-primary font-bold rounded-xl shadow-2xl">
							<Users className="h-5 w-5" /> Sign Up Free
						</Link>
					</motion.div>
				</div>
			</section>
		</div>
	);
}

export default Home;
