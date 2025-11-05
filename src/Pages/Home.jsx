import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
import { IoMdArrowRoundForward } from "react-icons/io";
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
				<div className="hero-content">
					<h1 className="hero-title">Every Moment Deserves to be Heard</h1>
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
								href="https://www.who.int/campaigns/world-hearing-day/2025"
								target="_blank"
								rel="noopener noreferrer"
								className="featured-button"
							>
								Read More <IoMdArrowRoundForward />
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
