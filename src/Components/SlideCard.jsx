import { useState } from 'react';
import placeholder from "../Assets/images/placeholder.jpg";

// Reusable SlideCard Component
function SlideCard({ image = placeholder, title = "Title", description = "Description", link = "#" }) {
	const [isHovered, setIsHovered] = useState(false);

	const handleView = () => {
		if (link && link !== "#") {
			window.open(link, '_blank', 'noopener,noreferrer');
		}
	};

	return (
		<div
			className={`card-slide-card ${isHovered ? 'hovered' : ''}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
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
					<button
						className="view-button"
						onClick={handleView}
					>
						View
					</button>
				</div>
			</div>
		</div>
	);
}

export default SlideCard;