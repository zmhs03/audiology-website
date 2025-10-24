import { useNavigate } from "react-router";
import "../../Styles/healthguide.css";
import heroImage from "../../Assets/images/placeholder.jpg";
import placeholder from "../../Assets/images/placeholder.jpg";
import { IoMdArrowRoundBack } from "react-icons/io";

const EventsGuide = ({
	title = "Concerts, Festivals and Everything In Between",
	subtitle = "A Guide on Safe Listening",
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
						alt="Concert and festival safety"
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
						Concerts and festivals in South Africa often reach 100 -110 dB,
						which can harm within minutes. Use earplugs, take sound breaks,
						and stand away from speakers. If your ears ring after the
						event, that's a sign to rest them. Safe listening lets you
						enjoy the music without losing the rhythm in the long run.
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

			{type === "list-with-image" && (
				<>
					<ul className="section-list">
						{content.map((item, i) => (
							<li key={i}>{item}</li>
						))}
					</ul>
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
		title: "The Live Music Experience",
		type: "text-with-image",
		content:
			"We love live music, from local festivals like Rocking the Daisies to concerts featuring artists like Travis Scott. However, loud environments can cause your ears to be exposed to harmful sound levels. Prolonged exposure to anything above 85 decibels (dB) can result in lasting hearing loss. Here's a quick guide on how to ensure you have a good and safe time at events.",
		image: placeholder,
	},
	{
		title: "Before the Event",
		type: "list-with-image",
		content: [
			"Carry Earplugs: Reusable earplugs lower the volume without distorting sound quality",
			"Check the layout: Avoid standing near speakers or amplifiers",
			"Monitor Sound levels: Use sound-level apps to monitor noises in real time",
		],
		image: placeholder,
	},
	{
		title: "During the Event",
		type: "list-with-image",
		content: [
			"If the music feels too loud or your ears start ringing, that's your signal to rest them",
			"Take short, quiet breaks by moving away from the speakers or stepping outside for a few minutes",
			"Avoid standing directly in front of speakers or near the stage where the sound pressure is highest",
			"Keep some distance between you and the sound system (even a few meters can reduce noise exposure significantly)",
		],
		image: placeholder,
	},
	{
		title: "After the Event",
		type: "list-with-image",
		content: [
			"If you experience ringing or muffled hearing, rest your ears in a quiet place",
			"A persistent ring could signal a temporary threshold shift and should be checked by a healthcare provider",
		],
		image: placeholder,
	},
];

export default EventsGuide;
