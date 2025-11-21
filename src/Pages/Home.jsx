import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router";
import {
	Navigation,
	Pagination,
	Autoplay,
	EffectFade,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { ExternalLink } from "lucide-react";
import "../Styles/home.css";
import WHD from "../Assets/images/WHD-Banner-RGB.png";
import blank from "../Assets/images/blank-whd-image.webp";
import hero from "../Assets/images/hero.jpg";
import ArticleCard from "../Components/ArticleCard";
import { articlesData } from "../Data/articles";

function Home() {
	const [featured, setFeatured] = useState([]);

	useEffect(() => {
		const shuffled = [...articlesData].sort(() => 0.5 - Math.random());
		setFeatured(shuffled.slice(0, 5));
	}, []);

	return (
		<div className="home-container">
			{/* === HERO SECTION === */}
			<section className="hero-section">
				<img
					src={hero}
					alt="Hero background"
					className="hero-background"
				/>
				<div className="hero-overlay"></div>
				<div className="hero-content">
					<h1 className="hero-title">Every Moment Deserves to be Heard</h1>
					<div className="hero-cta">
						<Link
							to="/AboutUs"
							className="cta-btn primary"
						>
							Discover Our Mission
						</Link>
						<Link
							to="/Resources"
							className="cta-btn secondary"
						>
							Explore Resources
						</Link>
					</div>
				</div>
			</section>
			{/* === STATS STRIP === */}
			<section className="stats-strip">
				<div className="stats-strip-container">
					<div className="stat-item">
						<div className="stat-number">40M</div>
						<div className="stat-description">
							People in Africa living with hearing loss
						</div>
					</div>
					<div className="stat-divider"></div>
					<div className="stat-item">
						<div className="stat-number">60%</div>
						<div className="stat-description">
							Of childhood hearing loss is preventable
						</div>
					</div>
					<div className="stat-divider"></div>
					<div className="stat-item">
						<div className="stat-number">1B</div>
						<div className="stat-description">
							Young adults at risk from unsafe listening
						</div>
					</div>
				</div>
				<div className="stats-source-strip">Source: WHO, 2024</div>
			</section>

			{/* === OVERVIEW SECTION === */}
			<section id="overview-section">
				<div className="overview-container">
					<h2 className="overview-heading">Why Hearing Health Matters</h2>
					<p className="overview-lead">
						Your hearing connects you to the world, to conversations with
						loved ones, the music that moves you, and the sounds that keep
						you safe. Yet hearing loss is on the rise, especially among
						young South Africans exposed to loud music at festivals, clubs,
						and through personal audio devices.
					</p>
					<p className="overview-lead">
						The good news? Most hearing damage is preventable. Through
						education, awareness, and simple protective measures, you can
						enjoy the sounds you love while safeguarding your hearing for
						life. Hear & Now exists to empower you with the knowledge and
						tools to make informed choices about your hearing health.
					</p>
					<p className="overview-lead">
						Whether you're a music lover, a festival-goer, or simply want
						to protect your hearing as you age, we're here to help you take
						action. Explore our resources, learn from experts, and join a
						community that believes every moment deserves to be
						heard—clearly, safely, and for a lifetime.
					</p>
				</div>
			</section>
			{/* === FEATURED CONTENT SECTION === */}
			<section id="featured-content-section">
				<div className="featured-content-container">
					<div className="featured-content-grid">
						<div className="featured-text">
							<h2 className="featured-title">
								What happened during World Hearing Day?
							</h2>
							<p className="featured-description">
								Find out everything that happened on this year's World
								Hearing Day, from events to campaigns that raised awareness
								about hearing health.
							</p>
							<a
								href="https://worldhearingday.org/report-of-workd-hearing-day-2025/"
								target="_blank"
								rel="noopener noreferrer"
								className="featured-button"
							>
								Learn More <ExternalLink size={18} />
							</a>
						</div>

						<div className="featured-visual">
							<div className="circles-container">
								<div className="circle-large">
									<img
										src={WHD}
										alt="Featured content"
										className="circle-image"
									/>
								</div>
								<div className="circle-small">
									<img
										src={blank}
										alt="Featured content"
										className="circle-image"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* === FEATURED ARTICLES SECTION === */}
			<section id="featured-articles">
				<h2 className="section-heading">Featured Articles</h2>

				<Swiper
					modules={[Navigation, Pagination, Autoplay, EffectFade]}
					spaceBetween={30}
					slidesPerView={1}
					loop={true}
					autoplay={{
						delay: 4000,
						disableOnInteraction: false,
					}}
					observer={true}
					observeParents={true}
					pagination={{ clickable: true }}
					navigation
					breakpoints={{
						768: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
					}}
					className="featured-articles-carousel"
				>
					{featured.map((article) => (
						<SwiperSlide key={article.id}>
							<div className="fade-in">
								<ArticleCard article={article} />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</section>
		</div>
	);
}

export default Home;
