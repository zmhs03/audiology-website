import { useState, useEffect } from "react";
import placeholder from "../Assets/images/placeholder.jpg";

function SlideCard({
	image = placeholder,
	title = "Title",
	description = "Description",
	link = "#",
}) {
	const [isHovered, setIsHovered] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);

		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	const handleView = () => {
		if (link && link !== "#") {
			window.open(link, "_blank", "noopener,noreferrer");
		}
	};

	const handleCardClick = () => {
		if (isMobile) {
			handleView();
		}
	};

	return (
		<div
			className={`card-slide-card ${isHovered ? "hovered" : ""}`}
			onMouseEnter={() => !isMobile && setIsHovered(true)}
			onMouseLeave={() => !isMobile && setIsHovered(false)}
			onClick={handleCardClick}
			style={{ cursor: isMobile ? "pointer" : "default" }}
		>
			<div className="slide-card-inner">
				{/* Image Section */}
				<div className="slide-card-image">
					<img
						src={image}
						alt={title}
						className="placeholder-image"
					/>
				</div>

				{/* Info Section */}
				<div className="slide-card-info">
					<div className="slide-card-content">
						<h4>{title}</h4>
						<p>{description}</p>
					</div>
					{!isMobile && (
						<button
							className="view-button"
							onClick={handleView}
						>
							View
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default SlideCard;
