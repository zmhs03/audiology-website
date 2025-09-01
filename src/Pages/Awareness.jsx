import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
// import ArticleCard from "../Components/ArticleCard";
// import { articlesData as articles } from "../Data/articles";
import ear from "../Assets/images/ear.jpg";
import placeholder from "../Assets/images/placeholder.jpg";
import "../Styles/awareness.css";

function Awareness() {
	const [currentSlide, setCurrentSlide] = useState(0);

	// Gallery slides data - changed to use images instead of text content
	const slides = [
		{
			id: 1,
			image: placeholder,
			alt: "Ear image",
		},
		{
			id: 2,
			image: placeholder, // Replace with your actual image
			alt: "Slide 2 image",
		},
		{
			id: 3,
			image: ear, // Replace with your actual image
			alt: "Slide 3 image",
		},
		{
			id: 4,
			image: placeholder, // Replace with your actual image
			alt: "Slide 4 image",
		},
	];

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

	return (
		<div className="awareness">
			{/* Hero Gallery Slider */}
			<section className="hero-slider">
				<div
					className="slider-container"
					style={{ transform: `translateX(-${currentSlide * 100}%)` }}
				>
					{slides.map((slide) => (
						<div key={slide.id} className="slide">
							<div className="slide-content">
								<img
									src={slide.image}
									alt={slide.alt}
									className="slide-image"
								/>
							</div>
						</div>
					))}
				</div>

				{/* Navigation Arrows */}
				<button onClick={prevSlide} className="slider-nav slider-nav-left">
					<FaChevronLeft className="nav-icon" />
				</button>

				<button
					onClick={nextSlide}
					className="slider-nav slider-nav-right"
				>
					<FaChevronRight className="nav-icon" />
				</button>

				{/* Slide Indicators */}
				<div className="slider-indicators">
					{slides.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentSlide(index)}
							className={`indicator ${
								index === currentSlide ? "indicator-active" : ""
							}`}
						/>
					))}
				</div>
			</section>

			{/* Popular Articles Section */}

			{/* Main Content Section */}
			<section className="main-content-section">
				<div className="container">
					<div className="content-header">
						<h2 className="main-title">Lorem Ipsum is simply</h2>
						<p className="main-description">
							Neque porro quisquam est, qui dolorem ipsum quia dolor sit
							amet, consectetur, adipisci velit, sed quia non numquam eius
							modi tempora incidunt ut labore et dolore magnam aliquam
							quaerat voluptatem.
						</p>
					</div>

					{/* Two Column Layout */}
					<div className="content-grid">
						{/* Left Column */}
						<div className="content-column">
							<h3 className="column-title">Lorem Ipsum is simply dummy</h3>
							<p className="column-text">
								Lorem Ipsum has been the industry's standard dummy text
								ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book.
							</p>

							<img
								src={placeholder}
								alt="Placeholder"
								className="placeholder-image"
							/>

							<h4 className="subsection-title">
								Lorem Ipsum is Simply Dummy
							</h4>
							<p className="column-text">
								Lorem Ipsum has been the industry's standard dummy text
								ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book.
							</p>
						</div>

						{/* Right Column */}
						<div className="content-column">
							<h3 className="column-title">Lorem Ipsum is simply dummy</h3>
							<p className="column-text">
								Lorem Ipsum has been the industry's standard dummy text
								ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book.
							</p>

							<img
								src={placeholder}
								alt="Placeholder"
								className="placeholder-image"
							/>

							<h4 className="subsection-title">
								Lorem Ipsum is simply dummy
							</h4>
							<p className="column-text">
								Lorem Ipsum has been the industry's standard dummy text
								ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book.
							</p>
						</div>
					</div>

					{/* Bottom Two Column Layout */}
					<div className="bottom-images">
						<img
							src={placeholder}
							alt="Placeholder"
							className="bottom-image-placeholder"
						/>
						<img
							src={placeholder}
							alt="Placeholder"
							className="bottom-image-placeholder"
						/>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Awareness;
