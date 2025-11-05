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

import SlideCard from "../Components/SlideCard";

function CardSlider({ cards }) {
	return (
		<Swiper
			modules={[Navigation, Pagination, Autoplay, EffectFade]}
			slidesPerView={1}
			spaceBetween={30}
			loop={true}
			navigation
			pagination={{ clickable: true }}
			autoplay={{ delay: 4000, disableOnInteraction: false }}
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
