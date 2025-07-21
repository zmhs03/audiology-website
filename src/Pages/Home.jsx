import "../Styles/home.css";
import placeholder from "../Assets/images/placeholder.jpg";

function Home() {
	return (
		<div className="home-container">
			{/* Hero Section */}
			<section className="hero-section">
				<img
					src={placeholder}
					alt="Hero background"
					className="hero-background"
				/>
				<div className="hero-content">
					<h1 className="hero-title">Every Moment Deserves to be Heard</h1>
				</div>
			</section>

			{/* Featured Content Section */}
			<section className="featured-content-section">
				<div className="featured-content-container">
					<div className="featured-content-grid">
						<div className="featured-text">
							<h2 className="featured-title">
								What happened during World Hearing Day?
							</h2>
							<p className="featured-description">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor incididunt ut labore et dolore magna
								aliqua. Ut enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>
							<button className="featured-button">Read More</button>
						</div>
						<div className="featured-visual">
							<div className="circles-container">
								{/* Large light gray circle */}
								<div className="circle-large">
									<img
										src={placeholder}
										alt="Featured content"
										className="circle-image"
									/>
								</div>
								{/* Smaller dark gray circle */}
								<div className="circle-small">
									<img
										src={placeholder}
										alt="Featured content"
										className="circle-image"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
