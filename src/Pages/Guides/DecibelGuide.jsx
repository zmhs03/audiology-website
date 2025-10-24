import { useNavigate } from "react-router";
import "../../Styles/healthguide.css";
import heroImage from "../../Assets/images/placeholder.jpg";
import placeholder from "../../Assets/images/placeholder.jpg";
import { IoMdArrowRoundBack } from "react-icons/io";

const DecibelGuide = ({
	title = "Visualising Decibels",
	subtitle = "Understanding sound levels in everyday life",
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
						alt="Visualising decibels"
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
						Loudness is measured in decibels (dB) and South Africans
						experience many high-noise environments (from traffic to soccer
						matches). Anything above 85 dB can harm your hearing. Keep
						Volume modeate, limit exposure, and visualise sound levels to
						protect your ears.
					</p>
				</div>
			</div>
		</div>
	);
};

const Section = ({ title, content, type, image }) => {
	return (
		<section className="guide-section">
			<h2>{title}</h2>

			{type === "text" && <p className="section-text">{content}</p>}

			{type === "text-with-image" && (
				<>
					<p className="section-text">{content}</p>
					{image && (
						<div className="section-image">
							<img
								src={image}
								alt={title}
							/>
						</div>
					)}
				</>
			)}

			{type === "list" && (
				<ul className="section-list">
					{content.map((item, i) => (
						<li key={i}>{item}</li>
					))}
				</ul>
			)}

			{type === "sound-levels" && (
				<div className="safety-levels">
					{content.map((item, i) => (
						<div
							key={i}
							className="safety-level-item"
						>
							<div className="level-content">
								<strong>{item.level}</strong> {item.description}
							</div>
							{item.image && (
								<div className="section-image">
									<img
										src={item.image}
										alt={item.level}
									/>
								</div>
							)}
						</div>
					))}
				</div>
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
		title: "What is a Decibel?",
		type: "text-with-image",
		content:
			"A decibel (dB) measures how loud a sound is, also known as amplitude. It is measured on a logarithmic scale, meaning every 10dB increase represents roughly ten times more sound energy. Hearing loss is partly measured by the lowest decibel you can detect. A whisper is about 30dB, normal conversation averages around 60dB, and concerts can reach 100 to 120dB.",
		image: placeholder,
	},
	{
		title: "Why Visualisation Matters",
		type: "text",
		content:
			"Many people underestimate how loud everyday environments can be. Seeing decibel levels helps bridge the gap between perception and risk. When you can visualise how loud something truly is, you can make better choices, like lowering the volume, wearing earplugs, or stepping back from speakers.",
	},
	{
		title: "Everyday Sound Levels",
		type: "sound-levels",
		content: [
			{ level: "10 dB", description: "Breathing", image: placeholder },
			{
				level: "60 dB",
				description: "Normal conversation",
				image: placeholder,
			},
			{
				level: "85 dB",
				description: "Busy city traffic",
				image: placeholder,
			},
			{
				level: "90 dB",
				description: "Hairdryer or vacuum",
				image: placeholder,
			},
			{
				level: "100-110 dB",
				description: "Nightclub or concert",
				image: placeholder,
			},
			{
				level: "120+ dB",
				description: "Vuvuzela at a soccer match or a police siren",
				image: placeholder,
			},
		],
	},
	{
		title: "Safe Listening Thresholds",
		type: "text",
		content:
			"It is recommended to keep exposure below 85 dB for no more than 8 hours. For every 3dB increase above that, safe exposure time halves. 88dB = 4 hours, 91dB = 2 hours, 100dB = 15 minutes. This is why even short bursts of loud sound can harm hearing, especially at concerts or when using headphones at full volume.",
	},
];

export default DecibelGuide;
