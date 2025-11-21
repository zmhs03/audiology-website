import { useState } from "react";
import { useNavigate } from "react-router";
import {
	Music,
	Users,
	Headphones,
	Shield,
	AlertCircle,
	Radio,
} from "lucide-react";
import { ArrowRight } from "lucide-react";
import EarPrevention from "../Assets/images/Prevention.jpg"; //Photo by Kindel Media: https://www.pexels.com/photo/close-up-photo-of-orange-earplugs-8488012/

import "../Styles/prevention.css";

function Prevention() {
	const [activeTab, setActiveTab] = useState("festivals");
	const navigate = useNavigate();

	const guides = [
		{
			id: 1,
			title: "A Beginner's Guide to Hearing Health",
			description: "Daily habits for long-term hearing health",
			icon: Headphones,
			color: "primary",
			route: "/guide/hearing-health",
		},
		{
			id: 2,
			title: "Concerts, Festivals and Everything In-Between",
			description:
				"Essential tips for protecting your hearing at live music events",
			icon: Music,
			color: "secondary",
			route: "/guide/event-safety",
		},
		{
			id: 3,
			title: "Visualising Decibels",
			description:
				"Examples that visualise decibels with everyday scenarios",
			icon: Shield,
			color: "primary",
			route: "/guide/visualising-decibels",
		},
		{
			id: 4,
			title: "Everyday Noises You Don't Notice",
			description:
				"Examples that visualise decibels with everyday scenarios",
			icon: Shield,
			color: "primary",
			route: "/guide/everyday-noises",
		},
	];

	const quickTips = {
		general: [
			"Keep volume at 60% or below when using headphones on taxi rides",
			"Limit prolonged exposure to heavy traffic noise on major roads - it can reach 85 dB",
			"Ask hosts to turn down loud music at braais and shisa nyamas",
			"Protect your ears from construction noise in growing cities like Joburg and Cape Town",
			"Get your hearing tested at public health facilities if you notice changes",
		],
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

	const handleGuideClick = (route) => {
		navigate(route);
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
							View Quick Tips <ArrowRight size={20} />
						</button>
					</div>
					<div className="hero-prevention-right">
						<div className="hero-prevention-image-box">
							<img
								src={EarPrevention}
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
				</div>

				<div className="guides-grid">
					{guides.map((guide) => {
						const Icon = guide.icon;
						return (
							<div
								key={guide.id}
								className="guide-card"
								onClick={() => handleGuideClick(guide.route)}
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
							className={`tab ${activeTab === "general" ? "active" : ""}`}
							onClick={() => setActiveTab("general")}
						>
							<Users size={20} />
							General
						</button>
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
