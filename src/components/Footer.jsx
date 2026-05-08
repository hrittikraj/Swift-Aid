import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Heart } from "lucide-react";

function Footer() {
	return (
		<footer className="bg-slate-900 dark:bg-slate-950 text-white">
			{/* Main Footer Content */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
					{/* Logo & About - Takes 4 columns on large screens */}
					<div className="lg:col-span-4">
						<Link to="/" className="flex items-center space-x-3 mb-5">
							<div className="bg-gradient-to-br from-primary to-red-700 p-2 rounded-xl shadow-lg">
								<svg
									className="h-8 w-8 text-white"
									fill="currentColor"
									viewBox="0 0 24 24">
									<path d="M19 7h-3V5.5C16 4.12 14.88 3 13.5 3h-3C9.12 3 8 4.12 8 5.5V7H5c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V7h-4V5.5zM15 14h-2v2h-2v-2H9v-2h2v-2h2v2h2v2z" />
								</svg>
							</div>
							<span className="text-2xl font-bold">
								Swift<span className="text-primary">Aid</span>
							</span>
						</Link>
						<p className="text-gray-400 mb-6 leading-relaxed">
							Rapid emergency medical response at your fingertips. Connecting
							patients to nearest hospitals and ambulances instantly.
						</p>

						{/* Social Icons */}
						<div className="flex gap-3">
							{[
								{ icon: "f", label: "Facebook" },
								{ icon: "𝕏", label: "Twitter" },
								{ icon: "in", label: "LinkedIn" },
								{ icon: "📷", label: "Instagram" },
							].map((social, i) => (
								<motion.a
									key={i}
									href="#"
									aria-label={social.label}
									whileHover={{ y: -3, scale: 1.1 }}
									className="bg-gray-800 hover:bg-primary w-10 h-10 flex items-center justify-center rounded-lg transition-colors text-sm font-bold cursor-pointer">
									{social.icon}
								</motion.a>
							))}
						</div>
					</div>

					{/* Quick Links - Takes 2 columns */}
					<div className="lg:col-span-2">
						<h3 className="text-lg font-bold mb-5 text-white">Company</h3>
						<ul className="space-y-3">
							{["Home", "Services", "Hospitals", "About Us", "Contact"].map(
								(item) => (
									<li key={item}>
										<Link
											to={`/${item === "Home" ? "" : item.toLowerCase().replace(" ", "-")}`}
											className="text-gray-400 hover:text-primary transition-colors text-sm">
											{item}
										</Link>
									</li>
								),
							)}
						</ul>
					</div>

					{/* Services - Takes 3 columns */}
					<div className="lg:col-span-3">
						<h3 className="text-lg font-bold mb-5 text-white">Services</h3>
						<ul className="space-y-3">
							{[
								"Ambulance Service",
								"Hospital Booking",
								"Blood Bank",
								"Vaccine Finder",
								"Antivenom Stock",
							].map((item) => (
								<li key={item}>
									<Link
										to="/services"
										className="text-gray-400 hover:text-primary transition-colors text-sm">
										{item}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info - Takes 3 columns */}
					<div className="lg:col-span-3">
						<h3 className="text-lg font-bold mb-5 text-white">Get In Touch</h3>
						<ul className="space-y-4">
							<li className="flex items-start gap-3 text-gray-400 text-sm">
								<MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
								<span>123 Medical Plaza, Dhaka 1212, Bangladesh</span>
							</li>
							<li className="flex items-center gap-3 text-gray-400 text-sm">
								<Phone className="h-5 w-5 text-primary flex-shrink-0" />
								<a
									href="tel:+8801234567890"
									className="hover:text-primary transition-colors">
									+880 1234 567890
								</a>
							</li>
							<li className="flex items-center gap-3 text-gray-400 text-sm">
								<Mail className="h-5 w-5 text-primary flex-shrink-0" />
								<a
									href="mailto:help@swiftaid.com"
									className="hover:text-primary transition-colors">
									help@swiftaid.com
								</a>
							</li>
						</ul>

						{/* Emergency Hotline */}
						<div className="mt-6 p-4 bg-gradient-to-r from-primary to-red-700 rounded-xl shadow-lg">
							<p className="text-xs text-red-100 mb-1 font-medium">
								24/7 EMERGENCY HOTLINE
							</p>
							<a
								href="tel:999"
								className="text-2xl font-bold text-white flex items-center gap-2">
								📞 999
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-gray-800">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<p className="text-gray-400 text-sm">
							© 2025 SwiftAid. All rights reserved.
						</p>
						<p className="text-gray-400 text-sm flex items-center gap-2">
							Made with{" "}
							<Heart className="h-4 w-4 text-primary fill-primary animate-pulse" />{" "}
							for saving lives
						</p>
						<div className="flex gap-6 text-sm">
							<Link
								to="/privacy"
								className="text-gray-400 hover:text-primary transition-colors">
								Privacy Policy
							</Link>
							<Link
								to="/terms"
								className="text-gray-400 hover:text-primary transition-colors">
								Terms of Service
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
