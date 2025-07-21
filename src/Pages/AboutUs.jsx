import { LiaAssistiveListeningSystemsSolid } from "react-icons/lia";
import { LuClipboardList } from "react-icons/lu";
import { BsVolumeUp } from "react-icons/bs";
import "../Styles/about.css";
function AboutUs() {
	return (
		<div className="about-container">
			{/* Header Section */}
			<div className="about-header">
				<h2 className="about-title">About Us</h2>
			</div>

			{/* Main Content */}
			<main className="about-content">
				{/* Who We Are Section */}
				<section id="who-we-are">
					<h3 className="who-we-are-title">WHO WE ARE</h3>
					<p className="who-we-are-description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
						enim ad minim veniam, quis nostrud exercitation ullamco laboris
						nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
						in reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur.
					</p>
				</section>

				{/* Features Grid */}
				<div className="features-container">
					{/* Feature 1 */}
					<div className="feature-item">
						<div className="feature-icon-wrapper">
							<LiaAssistiveListeningSystemsSolid className="feature-icon" />
						</div>
						<h4 className="feature-heading">Feature 1</h4>
						<p className="feature-text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
							do eiusmod tempor incididunt ut labore et dolore magna
							aliqua.
						</p>
					</div>

					{/* Feature 2*/}
					<div className="feature-item">
						<div className="feature-icon-wrapper">
							<LuClipboardList className="feature-icon" />
						</div>
						<h4 className="feature-heading">Feature 2</h4>
						<p className="feature-text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
							do eiusmod tempor incididunt ut labore et dolore magna
							aliqua.
						</p>
					</div>

					{/*Feature 3 */}
					<div className="feature-item">
						<div className="feature-icon-wrapper">
							<BsVolumeUp className="feature-icon" />
						</div>
						<h4 className="feature-heading">Feature 3</h4>
						<p className="feature-text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
							do eiusmod tempor incididunt ut labore et dolore magna
							aliqua.
						</p>
					</div>
				</div>
			</main>
			<section id="quote">
				<p className="text-description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<button className="cta-button">Donate</button>
			</section>
		</div>
	);
}

export default AboutUs;
