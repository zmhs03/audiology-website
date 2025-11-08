import { useNavigate } from "react-router";
import "../../Styles/healthguide.css";
import heroImage from "../../Assets/images/beginner-hero.jpg"; //<a href="https://www.freepik.com/free-photo/nosy-adult-overhearing-rumour-being-shocked-about-secret-listening-private-conversation-hearing-unbelievable-gossip-surprised-man-eavesdropping-disbelief-being-shock_23640337.htm">Image by DC Studio on Freepik</a>
import { IoMdArrowRoundBack } from "react-icons/io";
const HealthGuide = ({
	title = "A Beginner's Guide to Hearing Health",
	subtitle = "Everything you need to know to keep your ears healthy",
	sections = defaultSections,
}) => {
	const navigate = useNavigate();
	return (
		<div className="guide-container">
			<div className="guide-nav">
				<button
					className="back-btn"
					onClick={() => navigate("/prevention")}
				>
					<IoMdArrowRoundBack />
					Back to Prevention
				</button>
			</div>
			<header className="guide-hero">
				<div className="guide-hero-text">
					<h2>{title}</h2>
					{subtitle && <p>{subtitle}</p>}
				</div>

				<div className="guide-hero-image">
					<img
						src={heroImage}
						alt="Everyday noise awareness"
						className="hero-img"
					/>
				</div>
			</header>
			<div className="guide-content">
				{sections.map((section, idx) => (
					<Section
						key={idx}
						{...section}
					/>
				))}

				<div className="guide-tldr">
					<h3>TL;DR</h3>
					<p>
						Protect your ears: keep volume moderate, limit exposure to loud
						environments, use ear protection at concerts or noisy work
						sites, and pay attention to warning signs like ringing or
						muffled hearing.
					</p>
				</div>
			</div>
		</div>
	);
};

const Section = ({ title, content, type }) => {
	return (
		<section className="guide-section">
			<h2>{title}</h2>

			{type === "text" && <p className="section-text">{content}</p>}

			{type === "list" && (
				<ul className="section-list">
					{content.map((item, i) => (
						<li key={i}>{item}</li>
					))}
				</ul>
			)}

			{type === "safety-levels" && (
				<div className="safety-levels">
					{content.map((item, i) => (
						<div
							key={i}
							className="safety-level-item"
						>
							<div className="level-content">
								<strong>{item.level}</strong> {item.description}
							</div>
						</div>
					))}
					<div className="tip-box">
						<strong>Tip:</strong> If you have to shout to be heard at 1
						meter, the sound is likely too loud
					</div>
				</div>
			)}

			{type === "warning-signs" && (
				<div className="warning-signs">
					{content.map((item, i) => (
						<div
							key={i}
							className="warning-item"
						>
							{item}
						</div>
					))}
					<div className="consult-box">
						If you notice these symptoms, consult a local audiologist.
					</div>
				</div>
			)}
		</section>
	);
};

const defaultSections = [
	{
		title: "Why Hearing Health Matters",
		type: "text",
		content:
			"Our ears are delicate, and once hearing is damaged, it usually cannot be fully restored. Untreated hearing damage can lead to tinnitus, difficulty understanding speech, social isolation, and a reduced quality of life. Noise exposure is cumulative, and even everyday sounds in cities can contribute to long-term damage. Protecting your hearing today ensures that you can continue to enjoy music, festivals, concerts, and conversations for years to come.",
	},
	{
		title: "What Are Decibels (dB)?",
		type: "text",
		content:
			"Decibels, or dB, are a way to measure how loud a sound is. Think of them as a volume scale for the noises we hear every day. The scale is logarithmic, which means that a small increase in decibels can make a sound much louder, so even small jumps on the scale can have a big impact on your ears. Your hearing ability is partly measured by the quietest sounds you can detect in decibels, which helps professionals determine if any hearing loss is present.",
	},
	{
		title: "Safe Listening Levels",
		type: "safety-levels",
		content: [
			{
				level: "Below 70 dB:",
				description: "Safe all day (quiet home or office)",
			},
			{
				level: "80 dB:",
				description:
					"Safe for 40 hours per week (noisy workplace or busy mall)",
			},
			{
				level: "85 dB:",
				description:
					"Safe for up to 8 hours per day (living near construction sites)",
			},
			{
				level: "90 dB+:",
				description:
					"Only a few minutes per day (nightclubs, large stadiums)",
			},
			{
				level: "100 dB+:",
				description: "Unsafe in minutes (Always wear protection)",
			},
		],
	},
	{
		title: "How to Monitor Sound Levels",
		type: "list",
		content: [
			"iOS: Turn on Headphone Safety in Settings (Sounds & Haptics) or download Decibel X or NIOSH Sound Level Meter",
			"Android: Many phones include Digital Wellbeing/Volume Monitor to track safe-listening, as well as apps like Decibel X or Sound Meter",
			"Follow the 60/60 rule: max 60% headphone volume for 60 minutes",
			"Keep track of noisy environments like clubs, taxis or construction sites",
			"Take listening breaks to give your ears rest",
		],
	},
	{
		title: "Everyday Hearing Protection",
		type: "list",
		content: [
			"Earplugs/earmuffs for concerts, clubs and bars, festivals, lawnmowing, drills, and sporting matches",
			"Noise-cancelling headphones help when commuting in traffic-heavy cities or using public transport",
			"Breaks from noise: Step outside during loud events or take quiet periods after a long day in the city",
		],
	},
	{
		title: "Warning Signs of Hearing Damage",
		type: "warning-signs",
		content: [
			"Ringing in ears (tinnitus)",
			"Increasing volume on headphones",
			"Muffled or distorted sound",
			"Difficulty understanding conversations in noisy environments like malls, restaurants or stadiums",
		],
	},
];

export default HealthGuide;
