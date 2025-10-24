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
import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import ArticleCard from "../Components/ArticleCard";
import { articlesData } from "../Data/articles";
import gallery from "../Assets/images/gallery.jpg"; //<a href="https://www.freepik.com/free-photo/woman-wearing-headphones-side-view_34215954.htm">Image by freepik</a>
import resources from "../Assets/images/resources.jpg"; //<a href="https://www.freepik.com/free-photo/young-student-working-assignment_22377289.htm">Image by freepik</a>
import hearing_aid from "../Assets/images/hearing-aids.jpg"; //<a href="https://www.freepik.com/free-photo/hearing-aids-case-high-angle_32077715.htm">Image by freepik</a>
import check_ear from "../Assets/images/check-ear.jpg"; //<a href="https://www.freepik.com/free-photo/clinic-otology-specialist-consulting-senior-patient-using-otoscope-check-ear-infection-hospital-otologist-examining-sick-retired-man-internal-ear-condition-while-doctor-cabinet_28175280.htm">Image by DC Studio on Freepik</a>
import auidology_test from "../Assets/images/test.jpg";
import construction from "../Assets/images/construction.jpg";
import community from "../Assets/images/community.jpg";
import earplug from "../Assets/images/earplug.jpg";

import "../Styles/awareness.css";

function Awareness() {
	const navigate = useNavigate();
	const [featured, setFeatured] = useState([]);
	const [currentSlide, setCurrentSlide] = useState(0);

	// Touch/Swipe functionality refs
	const touchStartX = useRef(null);
	const touchEndX = useRef(null);
	const isDragging = useRef(false);
	const sliderRef = useRef(null);

	// Minimum swipe distance to trigger slide change
	const MIN_SWIPE_DISTANCE = 50;

	useEffect(() => {
		const shuffled = [...articlesData].sort(() => 0.5 - Math.random());
		setFeatured(shuffled.slice(0, 6));
	}, []);

	// Gallery slides data with descriptions
	const slides = [
		{
			id: 1,
			image: gallery,
			alt: "Gallery image",
			url: "/Gallery",
			title: "Gallery",
			description:
				"Explore our comprehensive collection of hearing health images and educational materials.",
		},
		{
			id: 2,
			image: check_ear,
			alt: "Prevention image",
			url: "/Prevention",
			title: "Prevention",
			description:
				"Discover proven strategies and tips to protect your hearing and prevent hearing loss.",
		},
		{
			id: 3,
			image: resources,
			alt: "Resources image",
			url: "/Resources",
			title: "Resources",
			description:
				"Access valuable tools, guides, and information to support your hearing health journey.",
		},
		{
			id: 4,
			image: hearing_aid,
			alt: "Hearing Health image",
			url: "/Hearing-Health",
			title: "Hearing Health",
			description:
				"Learn about hearing conditions, treatments, and maintaining optimal ear health.",
		},
	];

	// Touch event handlers for mobile swipe
	const handleTouchStart = useCallback((e) => {
		touchStartX.current = e.targetTouches[0].clientX;
		isDragging.current = false;
	}, []);

	const handleTouchMove = useCallback((e) => {
		if (!touchStartX.current) return;

		const currentTouch = e.targetTouches[0].clientX;
		const diff = touchStartX.current - currentTouch;

		// If user has moved more than 10px, consider it a drag
		if (Math.abs(diff) > 10) {
			isDragging.current = true;
		}
	}, []);

	const handleTouchEnd = useCallback((e) => {
		if (!touchStartX.current || !isDragging.current) return;

		touchEndX.current = e.changedTouches[0].clientX;
		const swipeDistance = touchStartX.current - touchEndX.current;
		const isLeftSwipe = swipeDistance > MIN_SWIPE_DISTANCE;
		const isRightSwipe = swipeDistance < -MIN_SWIPE_DISTANCE;

		if (isLeftSwipe) {
			nextSlide();
		} else if (isRightSwipe) {
			prevSlide();
		}

		// Reset touch values
		touchStartX.current = null;
		touchEndX.current = null;
		isDragging.current = false;
	}, []);

	const handleSlideClick = (slide, event) => {
		// Prevent navigation if dragging/swiping
		if (isDragging.current) {
			event.preventDefault();
			event.stopPropagation();
			return;
		}

		// Prevent navigation if clicking on navigation arrows, indicators, or hero content
		if (
			event.target.closest(".slider-nav") ||
			event.target.closest(".slider-indicators") ||
			event.target.closest(".hero-text-content")
		) {
			return;
		}

		// Navigate to internal route
		navigate(slide.url);
	};

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

	return (
		<div className="awareness">
			{/* Hero Gallery Slider */}
			<section
				id="hero-slider"
				ref={sliderRef}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
			>
				<div
					className="slider-container"
					style={{ transform: `translateX(-${currentSlide * 100}%)` }}
				>
					{slides.map((slide) => (
						<div
							key={slide.id}
							className="slide clickable-slide"
							onClick={(event) => handleSlideClick(slide, event)}
							title={`Click to visit: ${slide.title}`}
						>
							<div className="slide-content">
								<img
									src={slide.image}
									alt={slide.alt}
									className="slide-image"
								/>
								{/* Hero-style text overlay */}
								<div className="hero-text-overlay">
									<div className="hero-text-content">
										<h2 className="awareness-hero-title">{slide.title}</h2>
										<p className="hero-description">{slide.description}</p>
										<button
											className="hero-cta-button"
											onClick={(e) => {
												e.stopPropagation();
												navigate(slide.url);
											}}
										>
											Learn More
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Navigation Arrows */}
				<button
					onClick={(e) => {
						e.stopPropagation();
						prevSlide();
					}}
					className="slider-nav slider-nav-left"
				>
					<FaChevronLeft className="nav-icon" />
				</button>

				<button
					onClick={(e) => {
						e.stopPropagation();
						nextSlide();
					}}
					className="slider-nav slider-nav-right"
				>
					<FaChevronRight className="nav-icon" />
				</button>

				{/* Slide Indicators */}
				<div className="slider-indicators">
					{slides.map((_, index) => (
						<button
							key={index}
							onClick={(e) => {
								e.stopPropagation();
								setCurrentSlide(index);
							}}
							className={`indicator ${
								index === currentSlide ? "indicator-active" : ""
							}`}
						/>
					))}
				</div>
			</section>

			{/* Popular Articles Section */}
			<section id="popular-articles">
				<h2 className="section-heading">Popular Articles</h2>
				<Swiper
					modules={[Navigation, Pagination, Autoplay, EffectFade]}
					spaceBetween={30}
					slidesPerView={1}
					loop={true}
					autoplay={{
						delay: 4000,
						disableOnInteraction: false,
					}}
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

			{/* Main Content Section */}
			<section id="main-content">
				<div className="container">
					<div className="content-header">
						<h2 className="main-title">Understanding Hearing Health</h2>
						<p className="main-description">
							Hearing health is often overlooked, yet everyday noise and
							misinformation put millions at risk. The Awareness section
							introduces key issues, showing why hearing protection matters
							and how you can take action.
						</p>
					</div>

					{/* Two Column Layout */}
					<div className="content-grid">
						{/* Left Column */}
						<div className="content-column">
							<h4 className="subsection-title">Loud Noise Risks</h4>
							<p className="column-text">
								Repeated exposure to loud environments can cause
								irreversible hearing damage.
							</p>

							<img
								src={construction}
								alt="Carpenter wearing protective headphones while working"
								className="top-image-1"
							/>

							<h4 className="subsection-title">Everyday Prevention</h4>
							<p className="column-text">
								Lowering device volume, using ear plugs at festivals or
								concerts, and taking listening breaks protect hearing over
								a lifetime.
							</p>

							<img
								src={earplug}
								alt="Construction worker putting on ear plugs"
								className="bottom-image-1"
							/>
						</div>

						{/* Right Column */}
						<div className="content-column">
							<h4 className="subsection-title">Early Detection</h4>
							<p className="column-text">
								Regular hearing checks catch problems early and improve
								outcomes. Simple screening can reveal issues long before
								they affect daily life.
							</p>

							<img
								src={auidology_test}
								alt="Audiology test"
								className="top-image-2"
							/>

							<h4 className="subsection-title">Stories and Support</h4>
							<p className="column-text">
								Real experiences show why support and stigma-free
								conversation matter. Hearing aids and community services
								(i.e. counselling, audiology clinics, and peer groups)
								improve quality of life for many.
							</p>
							<img
								src={community}
								alt="Someone helping someone else with putting on their hearing aids"
								className="bottom-image-2"
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Awareness;
