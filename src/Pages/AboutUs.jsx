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
						Hear & Now is a digital platform created to raise awareness
						about hearing health in South Africa. We aim to inform,
						empower, and inspire individuals to take proactive steps toward
						protecting their hearing. We provide educational, engaging, and
						relatable content through collaboration with audiologists,
						creatives, and young South Africans because hearing health
						should be heard.
					</p>
				</section>

				{/* Features Grid */}
				<div className="features-container">
					{/* Feature 1 */}
					<div className="feature-item">
						<div className="feature-icon-wrapper">
							<LiaAssistiveListeningSystemsSolid className="feature-icon" />
						</div>
						<h4 className="feature-heading">Hearing Awareness</h4>
						<p className="feature-text">
							We spotlight the realities of hearing loss in people and
							promote healthy hearing habits through digital media and
							facts tailored to South African culture.
						</p>
					</div>

					{/* Feature 2*/}
					<div className="feature-item">
						<div className="feature-icon-wrapper">
							<LuClipboardList className="feature-icon" />
						</div>
						<h4 className="feature-heading">Practical Guides</h4>
						<p className="feature-text">
							From safe listening checklists to festival survival tips, our
							platform offers quick, practical resources to protect your
							hearing in loud environments.
						</p>
					</div>

					{/*Feature 3 */}
					<div className="feature-item">
						<div className="feature-icon-wrapper">
							<BsVolumeUp className="feature-icon" />
						</div>
						<h4 className="feature-heading">Initiatives</h4>
						<p className="feature-text">
							Discover initiatives, educational campaigns, and volunteering
							opportunities featured on our platform.
						</p>
					</div>
				</div>
			</main>
			<section id="quote">
				<p className="text-description">
					"The hearing ear is always found close to the speaking tongue." —
					Ralph Waldo Emmerson
				</p>
				<button className="cta-button">Donate</button>
			</section>
		</div>
	);
}

export default AboutUs;
