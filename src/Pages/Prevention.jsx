import { useState } from "react";
import {
	Volume2,
	Music,
	Users,
	Headphones,
	Shield,
	AlertCircle,
	Radio,
} from "lucide-react";
import placeholder from "../Assets/images/placeholder.jpg";

import "../Styles/prevention.css";

function Prevention() {
	const [activeTab, setActiveTab] = useState("festivals");

	const guides = [
		{
			id: 1,
			title: "Concert Safety Guide",
			description:
				"Essential tips for protecting your hearing at live music events",
			icon: Music,
			color: "primary",
		},
		{
			id: 2,
			title: "Festival Survival Kit",
			description: "Multi-day event hearing protection strategies",
			icon: Users,
			color: "secondary",
		},
		{
			id: 3,
			title: "Safe Listening Practices",
			description: "Daily habits for long-term hearing health",
			icon: Headphones,
			color: "primary",
		},
		{
			id: 4,
			title: "Workplace Hearing Protection",
			description: "Protecting your ears in noisy environments",
			icon: Shield,
			color: "secondary",
		},
	];

	const quickTips = {
		festivals: [
			"Bring multiple pairs of earplugs - you'll lose at least one",
			"Take 15-minute breaks every hour in quiet zones",
			"Stay hydrated - dehydration increases noise sensitivity",
			"Alternate between loud and acoustic stages",
			"Give your ears complete rest overnight",
		],
		concerts: [
			"Wear earplugs from start to finish - damage happens fast",
			"Stand at least 3 meters away from speakers",
			"Take breaks outside every 45-60 minutes",
			"Avoid front rows near speaker stacks",
			"If your ears ring, you've been exposed too long",
		],
		clubs: [
			"Clubs exceed 115 dB - highest risk environment",
			"Wear maximum protection earplugs throughout",
			"Step outside for 10 minutes every 30 minutes",
			"Stay away from subwoofers and bass speakers",
			"Leave early if volume is painful with earplugs",
		],
	};

	const scrollToTips = () => {
		document
			.getElementById("quick-tips-section")
			.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="prevention-page">
			{/* Hero Section */}
			<div className="hero-prevention-section">
				<div className="hero-prevention-container">
					<div className="hero-prevention-left">
						<p className="hero-prevention-label">Hearing Awareness</p>
						<h1 className="hero-prevention-title">Protect Your Hearing</h1>
						<p className="hero-prevention-text">
							Get essential hearing protection tips for concerts,
							festivals, and club events. Learn how to enjoy music safely
							while preserving your hearing health.
						</p>
						<button
							onClick={scrollToTips}
							className="hero-prevention-btn"
						>
							View Quick Tips
						</button>
					</div>
					<div className="hero-prevention-right">
						<div className="hero-prevention-image-box">
							<img
								src={placeholder}
								alt="Hearing protection"
								className="hero-prevention-image"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Guides Section */}
			<div className="guides-section">
				<div className="section-header">
					<h2 className="section-title">Hearing Protection Guides</h2>
					<p className="section-subtitle">
						Comprehensive resources for every situation
					</p>
				</div>

				<div className="guides-grid">
					{guides.map((guide) => {
						const Icon = guide.icon;
						return (
							<div
								key={guide.id}
								className="guide-card"
							>
								<div className={`guide-icon guide-icon-${guide.color}`}>
									<Icon size={28} />
								</div>
								<h3 className="guide-title">{guide.title}</h3>
								<p className="guide-description">{guide.description}</p>
							</div>
						);
					})}
				</div>
			</div>

			{/* Quick Tips Section */}
			<div
				id="quick-tips-section"
				className="quick-tips-section"
			>
				<div className="tips-container">
					<div className="tips-header">
						<div className="tips-icon">
							<AlertCircle size={32} />
						</div>
						<h2 className="tips-title">Quick Tips</h2>
						<p className="tips-subtitle">
							The most important and urgent hearing protection advice
						</p>
					</div>

					{/* Tabs */}
					<div className="tabs">
						<button
							className={`tab ${
								activeTab === "festivals" ? "active" : ""
							}`}
							onClick={() => setActiveTab("festivals")}
						>
							<Users size={20} />
							Festivals
						</button>
						<button
							className={`tab ${activeTab === "concerts" ? "active" : ""}`}
							onClick={() => setActiveTab("concerts")}
						>
							<Music size={20} />
							Concerts
						</button>
						<button
							className={`tab ${activeTab === "clubs" ? "active" : ""}`}
							onClick={() => setActiveTab("clubs")}
						>
							<Radio size={20} />
							Clubs
						</button>
					</div>

					{/* Tips List */}
					<div className="tips-list">
						{quickTips[activeTab].map((tip, index) => (
							<div
								key={index}
								className="tip-item"
							>
								<div className="tip-number">{index + 1}</div>
								<p className="tip-text">{tip}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Prevention;
