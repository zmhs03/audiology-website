import ArticleCard from "../Components/ArticleCard";
import { articlesData } from "../Data/articles";
import { ExternalLink } from "lucide-react";
import "../Styles/resources.css";
import audiologist2 from "../Assets/images/audiologist2.jpg"; //<a href="https://www.freepik.com/free-photo/otology-specialist-using-otoscope-ear-examination-with-senior-woman-cabinet-consulting-patient-with-otolaryngology-instrument-doing-ent-consultation-audiology-diagnosis_32500720.htm">Image by DC Studio on Freepik</a>

function Resources() {
	return (
		<div className="resources-page">
			{/* Hero Section - Find Audiologist */}
			<div className="hero-resources-section">
				<div className="hero-resources-container">
					<div className="hero-resources-left">
						<p className="hero-resources-label">Professional Help</p>
						<h1 className="hero-resources-title">Find an Audiologist</h1>
						<p className="hero-resources-text">
							Need professional hearing care? Search for qualified
							audiologists in your area through the South African
							Association of Audiology (SAAA).
						</p>
						<a
							href="https://www.audiologysa.co.za/search/"
							target="_blank"
							rel="noopener noreferrer"
							className="hero-resources-btn"
						>
							Search for Audiologists <ExternalLink size={18} />
						</a>
					</div>
					<div className="hero-resources-right">
						<div className="hero-resources-image-box">
							<img
								src={audiologist2}
								alt="Audiologist consultation"
								className="hero-resources-image"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Articles Section */}
			<div className="articles-section">
				<div className="section-header">
					<h2 className="section-title">Research Articles</h2>
				</div>
				<div className="articles-grid">
					{articlesData.map((article) => (
						<ArticleCard
							key={article.id}
							article={article}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Resources;
