import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SlideCard from "../Components/SlideCard";

function CardSlider({ cards }) {
	return (
		<Swiper
			modules={[Navigation, Pagination, Autoplay]}
			slidesPerView="auto" // card width controls slide size
			spaceBetween={30}
			centeredSlides={true} // for peek effect
			loop
			navigation
			pagination={{ clickable: true }}
			autoplay={{ delay: 5000 }}
			observer={true}
			observeParents={true}
			breakpoints={{
				0: { slidesPerView: 1, spaceBetween: 10, centeredSlides: false },
				768: { slidesPerView: 2, spaceBetween: 20, centeredSlides: false },
				1024: {
					slidesPerView: "auto",
					spaceBetween: 30,
					centeredSlides: true,
				},
			}}
		>
			{cards.map((card, index) => (
				<SwiperSlide
					key={index}
					className="card-swiper-slide"
				>
					<SlideCard
						image={card.image}
						title={card.title}
						description={card.description}
						link={card.link}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default CardSlider;
