import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const { darkMode, toggleDarkMode } = useTheme();

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
			className={`sticky top-0 z-50 transition-all duration-300 ${
				scrolled
					? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg"
					: "bg-white dark:bg-slate-900 shadow-md"
			}`}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-20">
					{/* Logo */}
					<Link to="/" className="flex items-center space-x-3 group">
						<motion.div
							whileHover={{ rotate: 360, scale: 1.1 }}
							transition={{ duration: 0.6 }}
							className="bg-gradient-to-br from-primary to-red-700 p-2 rounded-xl shadow-lg">
							<svg
								className="h-8 w-8 text-white"
								fill="currentColor"
								viewBox="0 0 24 24">
								<path d="M19 7h-3V5.5C16 4.12 14.88 3 13.5 3h-3C9.12 3 8 4.12 8 5.5V7H5c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V7h-4V5.5zM15 14h-2v2h-2v-2H9v-2h2v-2h2v2h2v2z" />
							</svg>
						</motion.div>
						<span className="text-2xl font-bold text-slate-900 dark:text-white">
							Swift<span className="text-primary">Aid</span>
						</span>
					</Link>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center space-x-8">
						{["Home", "Services", "Hospitals", "About", "Contact"].map(
							(item, index) => (
								<motion.div
									key={item}
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 }}>
									<Link
										to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
										className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary font-medium transition-colors relative group">
										{item}
										<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
									</Link>
								</motion.div>
							),
						)}
					</div>

					{/* CTA Buttons */}
					<div className="hidden md:flex items-center space-x-3">
						{/* Dark Mode Toggle */}
						<motion.button
							onClick={toggleDarkMode}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
							aria-label="Toggle dark mode">
							<AnimatePresence mode="wait">
								{darkMode ? (
									<motion.div
										key="sun"
										initial={{ rotate: -90, opacity: 0 }}
										animate={{ rotate: 0, opacity: 1 }}
										exit={{ rotate: 90, opacity: 0 }}
										transition={{ duration: 0.2 }}>
										<Sun className="h-5 w-5 text-yellow-500" />
									</motion.div>
								) : (
									<motion.div
										key="moon"
										initial={{ rotate: 90, opacity: 0 }}
										animate={{ rotate: 0, opacity: 1 }}
										exit={{ rotate: -90, opacity: 0 }}
										transition={{ duration: 0.2 }}>
										<Moon className="h-5 w-5 text-slate-700" />
									</motion.div>
								)}
							</AnimatePresence>
						</motion.button>

						<Link
							to="/login"
							className="px-5 py-2 text-secondary dark:text-blue-400 font-semibold hover:text-primary dark:hover:text-primary transition-colors">
							Login
						</Link>
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Link
								to="/register"
								className="px-6 py-2.5 bg-gradient-to-r from-primary to-red-700 text-white font-semibold rounded-lg shadow-md hover:shadow-xl flex items-center gap-2 transition-all">
								<Phone className="h-4 w-4" />
								Get Started
							</Link>
						</motion.div>
					</div>

					{/* Mobile Buttons */}
					<div className="md:hidden flex items-center gap-2">
						<button
							onClick={toggleDarkMode}
							className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
							{darkMode ? (
								<Sun className="h-5 w-5 text-yellow-500" />
							) : (
								<Moon className="h-5 w-5 text-slate-700" />
							)}
						</button>
						<button
							className="text-slate-900 dark:text-white"
							onClick={() => setIsOpen(!isOpen)}>
							{isOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							className="md:hidden overflow-hidden border-t border-slate-200 dark:border-slate-700">
							<div className="flex flex-col space-y-3 py-4">
								{[
									"Home",
									"Services",
									"Hospitals",
									"About",
									"Contact",
									"Login",
								].map((item) => (
									<Link
										key={item}
										to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
										className="text-slate-700 dark:text-slate-300 hover:text-primary font-medium px-4 py-2">
										{item}
									</Link>
								))}
								<Link
									to="/register"
									className="mx-4 px-5 py-2 bg-primary text-white font-semibold rounded-lg text-center">
									Get Started
								</Link>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</motion.nav>
	);
}

export default Navbar;
