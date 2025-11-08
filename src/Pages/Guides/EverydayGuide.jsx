import { useNavigate } from "react-router";
import "../../Styles/healthguide.css";
import heroImage from "../../Assets/images/antoinette-plessis-T3z6e7Q5nJ8-unsplash.jpg"; //Photo by <a href="https://unsplash.com/@antoinette_set_go?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Antoinette Plessis</a> on <a href="https://unsplash.com/photos/a-busy-street-with-cars-and-people-T3z6e7Q5nJ8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
import earplugQ from "../../Assets/images/Prevention.jpg"; //Photo by Kindel Media: https://www.pexels.com/photo/close-up-photo-of-orange-earplugs-8488012/

import { IoMdArrowRoundBack } from "react-icons/io";

const defaultSections = [
	{
		title: "Common Daily Sounds",
		text: "Some everyday sounds seem harmless but can cause long-term hearing strain.",
		list: [
			"Traffic and car horns",
			"Vacuum cleaners or blenders",
			"Crowded restaurants",
			"Music via headphones above 60% volume",
		],
	},
	{
		title: "Simple Hearing Protection Tips",
		text: "You don’t have to wear earplugs all day—just make small adjustments.",
		list: [
			"Take quiet breaks after long noise exposure",
			"Lower device volume below 60%",
			"Use noise-cancelling headphones when commuting",
			"Keep distance from loudspeakers or construction zones",
		],
	},
];

const Section = ({ title, text, list }) => (
	<div className="guide-section">
		<h3>{title}</h3>
		<p className="section-text">{text}</p>
		{list && (
			<ul className="section-list">
				{list.map((item, idx) => (
					<li key={idx}>{item}</li>
				))}
			</ul>
		)}
	</div>
);

const EverydayGuide = ({
	title = "Everyday Noises You Don't Notice",
	subtitle = "Understanding hidden hearing risks in daily life",
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

				<div className="guide-image">
					<figure>
						<img
							src={earplugQ}
							alt="Noise awareness illustration"
							className="placeholder-img"
						/>
						<figcaption>
							Noise exposure is a part of daily life. Protect your hearing.
						</figcaption>
					</figure>
				</div>

				<div className="guide-tldr">
					<h3>TL;DR</h3>
					<p>
						Not all hearing damage comes from concerts. Daily exposure to
						traffic, construction, and home appliances can harm your
						hearing over time. Keep device volume below 60%, take quiet
						breaks, use noise-cancelling headphones, and wear ear
						protection around loud tools.
					</p>
				</div>
			</div>
		</div>
	);
};

export default EverydayGuide;
