import { useState } from "react";
import "../Styles/involved.css";
import placeholder from "../Assets/images/placeholder.jpg";

function SlideCard({ image, title, description, linkS }) {
	const [isHovered, setIsHovered] = useState(false);

	const handleView = () => {
		window.open(link, "_blank", "nopoener, noreferrer");
	};

	return (
		<div
			className={"card slide-card ${isHovered? : }"}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="slide-card-inner">
				<div className="slide-card-image">
					<img
						src={image}
						alt={title}
						className="card-image"
					/>
				</div>

				<div className="slide-info-info">
					<div className="slide-card-content">
						<h4>{title}</h4>
						<p>{description}</p>
						<button
							className="view-button"
							onClick={handleView}
						>
							View
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

function getInvolved() {
	return (
		<div className="get-involved">
			{/* Header Section */}
			<section className="header-section">
				<div className="container">
					<div className="header-content">
						<div className="text-content">
							<span className="date">MARCH 3, 2025</span>
							<h2>World Hearing Day 2025</h2>
							<p>
								Increase awareness and promote action to address hearing
								loss and related issues. Together we can make a difference
								in the lives of those with hearing difficulties.
							</p>
						</div>
						<div className="header-image">
							<div className="image-placeholder">
								<img
									src={placeholder}
									alt="Placeholder"
									className="placeholder-image"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Join Section */}
			<section className="join-section">
				<div className="container">
					<h3>Join donors supporting hearing health</h3>
					<button className="join-btn">Donate</button>
				</div>
			</section>

			{/* Fundraising Section */}
			<section className="involvement-section">
				<div className="container">
					<h3>Fundraising</h3>
					<p>
						Support us through fundraising, which ensures we have
						sufficient funds to undertake important hearing loss research
						and raise public awareness.
					</p>
					<div className="cards-grid">
						<SlideCard
							image={placeholder}
							title="Foundation for Children with Hearing Loss in Southern Africa"
							description="This is a description"
							link=""
						></SlideCard>
						<div className="card">
							<div className="card-image">
								<img
									src={placeholder}
									alt="Placeholder"
									className="placeholder-image"
								/>
							</div>
						</div>
						<div className="card">
							<div className="card-image">
								<img
									src={placeholder}
									alt="Placeholder"
									className="placeholder-image"
								/>
							</div>
						</div>
						<div className="card">
							<div className="card-image">
								<img
									src={placeholder}
									alt="Placeholder"
									className="placeholder-image"
								/>
							</div>
						</div>
					</div>
					<div className="pagination">
						<span className="dot active"></span>
						<span className="dot"></span>
						<span className="dot"></span>
						<span className="dot"></span>
					</div>
				</div>
			</section>

			{/* Volunteering Section */}
			<section className="involvement-section">
				<div className="container">
					<h3>Volunteering</h3>
					<p>
						Donate your time by volunteering with us and help promote
						hearing health awareness and provide critical support to those
						with hearing loss.
					</p>
					<div className="cards-grid">
						<div className="card">
							<div className="card-image">
								<img
									src={placeholder}
									alt="Placeholder"
									className="placeholder-image"
								/>
							</div>
						</div>
						<div className="card">
							<div className="card-image">
								<img
									src={placeholder}
									alt="Placeholder"
									className="placeholder-image"
								/>
							</div>
						</div>
						<div className="card">
							<div className="card-image">
								<img
									src={placeholder}
									alt="Placeholder"
									className="placeholder-image"
								/>
							</div>
						</div>
					</div>
					<div className="pagination">
						<span className="dot active"></span>
						<span className="dot"></span>
						<span className="dot"></span>
						<span className="dot"></span>
					</div>
				</div>
			</section>

			{/* Advocacy Section */}
			<section className="involvement-section">
				<div className="container">
					<h3>Advocacy</h3>
					<p>
						Support our advocacy efforts to improve access to hearing
						healthcare services and promote hearing health policies at all
						levels of government.
					</p>
					<div className="cards-grid">
						<div className="card">
							<div className="card-image">
								<img
									src={placeholder}
									alt="Placeholder"
									className="placeholder-image"
								/>
							</div>
						</div>
						<div className="card">
							<div className="card-image">
								<img
									src={placeholder}
									alt="Placeholder"
									className="placeholder-image"
								/>
							</div>
						</div>
						<div className="card">
							<div className="card-image">
								<img
									src={placeholder}
									alt="Placeholder"
									className="placeholder-image"
								/>
							</div>
						</div>
					</div>
					<div className="pagination">
						<span className="dot active"></span>
						<span className="dot"></span>
						<span className="dot"></span>
						<span className="dot"></span>
					</div>
				</div>
			</section>
		</div>
	);
}

export default getInvolved;
