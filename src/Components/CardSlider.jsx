import { useState } from 'react';
import SlideCard from '../Components/SlideCard';

function CardSlider({ cards }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleDotClick = (index) => {
		setCurrentIndex(index);
	};

	const handlePrev = () => {
		setCurrentIndex((prev) => (prev === 0 ? Math.max(0, cards.length - 3) : prev - 1));
	};

	const handleNext = () => {
		setCurrentIndex((prev) => {
			const maxIndex = Math.max(0, cards.length - 3);
			return prev >= maxIndex ? 0 : prev + 1;
		});
	};

	const shouldShowPagination = cards.length > 3;
	const isDisabled = cards.length <= 3;

	return (
		<div className="card-slider-container">
			<div className="card-slider-wrapper">
				<div
					className="card-slider"
					style={{ transform: `translateX(-${currentIndex * 100}%)` }}
				>
					{cards.map((card, index) => (
						<div key={index} className="slider-slide">
							<SlideCard
								image={card.image}
								title={card.title}
								description={card.description}
								link={card.link}
							/>
						</div>
					))}
				</div>
			</div>

			{/* Slider Controls */}
			<div className="card-slider-controls">
				<button className="slider-arrow prev" onClick={handlePrev}>❮</button>
				<button className="slider-arrow next" onClick={handleNext}>❯</button>
			</div>

			{/* Slide Indicator */}
			<div className={`card-slider-indicator ${isDisabled ? 'disabled' : ''}`}>
				<span className="card-indicator-text">{currentIndex + 1} / {cards.length}</span>
			</div>

			{/* Pagination Dots - Only show if there are more cards than visible */}
			{shouldShowPagination && (
				<div className="pagination">
					{cards.map((_, index) => (
						<span
							key={index}
							className={`dot ${index === currentIndex ? 'active' : ''}`}
							onClick={() => handleDotClick(index)}
						></span>
					))}
				</div>
			)}
		</div>
	);
}

export default CardSlider;