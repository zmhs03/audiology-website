import { useNavigate } from "react-router";
import "../../Styles/healthguide.css";
import heroImage from "../../Assets/images/placeholder.jpg";
import placeholder from "../../Assets/images/placeholder.jpg";
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
							src={placeholder}
							alt="Noise awareness illustration"
							className="placeholder-img"
						/>
						<figcaption>
							Noise exposure is a part of daily life — protect your
							hearing.
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
