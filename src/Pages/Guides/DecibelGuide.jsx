import { useNavigate } from "react-router";
import "../../Styles/healthguide.css";
import heroImage from "../../Assets/images/hearing-issues-collage-design.jpg"; //<a href="https://www.freepik.com/free-photo/hearing-issues-collage-design_33535961.htm">Image by freepik</a>
import normal from "../../Assets/images/pexels-fotios-photos-1546005.jpg"; //Photo by Lisa from Pexels: https://www.pexels.com/photo/group-of-people-outside-house-1546005/
import cityTraffic from "../../Assets/images/boitumelo-V9IUUmn7X6o-unsplash.jpg"; //Photo by <a href="https://unsplash.com/@writecodenow?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Boitumelo</a> on <a href="https://unsplash.com/photos/a-parking-lot-filled-with-lots-of-cars-and-trucks-V9IUUmn7X6o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

import breathing from "../../Assets/images/image-calm-relaxed-woman-meditating-doing-breathing-practices-holding-hands-chest.jpg"; //<a href="https://www.freepik.com/free-photo/image-calm-relaxed-woman-meditating-doing-breathing-practices-holding-hands-chest_72975922.htm">Image by benzoix on Freepik</a>
import concert from "../../Assets/images/rohan-krishnan-5on6Yea8rBs-unsplash.jpg"; //      Photo by <a href="https://unsplash.com/@rohankrishnann?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rohan Krishnan</a> on <a href="https://unsplash.com/photos/crowd-watches-a-concert-with-circus-maximus-sign-5on6Yea8rBs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
import hairdryer from "../../Assets/images/female-hairdresser-making-hairstyle-brunette-woman-beauty-salon.jpg"; //<a href="https://www.freepik.com/free-photo/female-hairdresser-making-hairstyle-brunette-woman-beauty-salon_7786263.htm">Image by cookie_studio on Freepik</a>
import siren from "../../Assets/images/pexels-cottonbro-10466266.jpg"; //Photo by cottonbro studio: https://www.pexels.com/photo/close-up-photo-of-police-siren-10466266/

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
			{ level: "10 dB", description: "Breathing", image: breathing },
			{
				level: "60 dB",
				description: "Normal conversation",
				image: normal,
			},
			{
				level: "85 dB",
				description: "Busy city traffic",
				image: cityTraffic,
			},
			{
				level: "90 dB",
				description: "Hairdryer or vacuum",
				image: hairdryer,
			},
			{
				level: "100-110 dB",
				description: "Nightclub or concert",
				image: concert,
			},
			{
				level: "120+ dB",
				description: "Vuvuzela at a soccer match or a police siren",
				image: siren,
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
