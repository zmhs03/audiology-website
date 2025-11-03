import { useState, useEffect } from "react";
import "../Styles/gallery.css";

const baseImages = [
	{
		id: 1,
		src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
		title: "Hearing Aid Technology",
		description:
			"Modern behind-the-ear hearing aid showcasing the latest advancements in assistive listening technology. These devices now feature Bluetooth connectivity, rechargeable batteries, and AI-powered sound processing that adapts to different environments automatically.",
	},
	{
		id: 2,
		src: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800",
		title: "Audiologist Consultation",
		description:
			"Professional hearing assessment with a certified audiologist. During consultations, specialists conduct comprehensive hearing tests, review results, and provide personalized recommendations for hearing health management and device selection.",
	},
	{
		id: 3,
		src: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800",
		title: "Senior Hearing Care",
		description:
			"Compassionate care for elderly patients experiencing hearing loss. Our programs focus on improving quality of life through proper hearing aid fitting, regular follow-ups, and education on maintenance and optimal usage of hearing devices.",
	},
	{
		id: 4,
		src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800",
		title: "Pediatric Audiology",
		description:
			"Specialized hearing care for children and infants. Early detection and intervention are crucial for speech and language development. Our pediatric audiologists use child-friendly testing methods and provide family-centered care and support.",
	},
	{
		id: 5,
		src: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800",
		title: "Hearing Test Booth",
		description:
			"State-of-the-art soundproof testing booth for accurate hearing assessments. These controlled environments allow audiologists to precisely measure hearing thresholds across different frequencies and identify specific types of hearing loss.",
	},
	{
		id: 6,
		src: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800",
		title: "In-Ear Hearing Devices",
		description:
			"Discreet in-the-canal hearing aids that are nearly invisible when worn. These custom-molded devices provide excellent sound quality while being cosmetically appealing, making them popular among active adults and professionals.",
	},
	{
		id: 7,
		src: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800",
		title: "Tinnitus Management",
		description:
			"Specialized programs for managing tinnitus and ringing in the ears. Treatment approaches include sound therapy, counseling, and the use of combination devices that provide both amplification and tinnitus masking features.",
	},
	{
		id: 8,
		src: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800",
		title: "Workplace Hearing Protection",
		description:
			"Industrial hearing conservation programs protecting workers in noisy environments. We provide custom ear protection, noise monitoring, and regular hearing screenings to prevent occupational hearing loss in high-risk industries.",
	},
	{
		id: 9,
		src: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800",
		title: "Cochlear Implant Services",
		description:
			"Advanced solutions for severe to profound hearing loss through cochlear implant programs. Our team provides pre-surgical evaluation, device programming, and comprehensive rehabilitation services to maximize hearing outcomes.",
	},
	{
		id: 10,
		src: "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800",
		title: "Hearing Aid Maintenance",
		description:
			"Regular maintenance and cleaning services to ensure optimal device performance. Proper care extends the life of hearing aids and maintains sound quality. We offer professional cleaning, repairs, and troubleshooting support.",
	},
	{
		id: 11,
		src: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800",
		title: "Group Hearing Support",
		description:
			"Community support groups for individuals with hearing loss and their families. These sessions provide emotional support, practical tips for communication, and opportunities to connect with others facing similar challenges.",
	},
	{
		id: 12,
		src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800",
		title: "Hearing Health Education",
		description:
			"Educational workshops on hearing loss prevention and hearing health awareness. Topics include safe listening practices, recognizing signs of hearing loss, and understanding when to seek professional help from an audiologist.",
	},
	{
		id: 13,
		src: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800",
		title: "Digital Hearing Assessment",
		description:
			"Advanced computerized hearing testing using the latest diagnostic equipment. Digital audiometry provides precise measurements and detailed reports that help audiologists develop customized treatment plans for each patient.",
	},
	{
		id: 14,
		src: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=800",
		title: "Family Hearing Consultation",
		description:
			"Family-centered approach to hearing healthcare involving loved ones in the treatment process. We educate families on communication strategies and provide support to help them better understand and accommodate hearing loss.",
	},
	{
		id: 15,
		src: "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800",
		title: "Wireless Hearing Solutions",
		description:
			"Modern hearing aids with wireless streaming capabilities connecting directly to smartphones, TVs, and other devices. These features allow users to enjoy phone calls, music, and media with clear, high-quality sound.",
	},
	{
		id: 16,
		src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
		title: "Hearing Loss Prevention",
		description:
			"Programs focused on preventing noise-induced hearing loss through education and protection. We teach safe listening levels, proper use of ear protection in loud environments, and the importance of regular hearing checkups.",
	},
	{
		id: 17,
		src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
		title: "Custom Ear Molds",
		description:
			"Precision-fitted custom ear molds and impressions for optimal comfort and performance. These personalized devices ensure secure fit, prevent feedback, and provide the best possible sound quality for hearing aid users.",
	},
	{
		id: 18,
		src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800",
		title: "Hearing Aid Accessories",
		description:
			"Comprehensive range of hearing aid accessories including remote controls, cleaning tools, charging stations, and connectivity devices. These accessories enhance user experience and help maintain device functionality.",
	},
	{
		id: 19,
		src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800",
		title: "Telehealth Audiology",
		description:
			"Remote hearing care services bringing professional audiology expertise to patients at home. Virtual consultations allow for device adjustments, troubleshooting, and follow-up care without the need for in-person visits.",
	},
	{
		id: 20,
		src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800",
		title: "Hearing Wellness Program",
		description:
			"Comprehensive hearing wellness programs combining prevention, early detection, and treatment. Our holistic approach includes regular screenings, lifestyle counseling, and ongoing support to maintain optimal hearing health throughout life.",
	},
];

const sizes = ["tall", "wide", "square"];

const getRandomSize = () => {
	return sizes[Math.floor(Math.random() * sizes.length)];
};

function Gallery() {
	const [selectedImage, setSelectedImage] = useState(null);
	const [images, setImages] = useState([]);

	useEffect(() => {
		const imagesWithRandomSizes = baseImages.map((image) => ({
			...image,
			size: getRandomSize(),
		}));
		setImages(imagesWithRandomSizes);
	}, []);

	const handleClick = (image) => {
		setSelectedImage(image);
	};

	const handleClose = () => {
		setSelectedImage(null);
	};

	useEffect(() => {
		const handleEsc = (event) => {
			if (event.key === "Escape") {
				setSelectedImage(null);
			}
		};
		window.addEventListener("keydown", handleEsc);

		if (selectedImage) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		return () => {
			window.removeEventListener("keydown", handleEsc);
			document.body.style.overflow = "auto";
		};
	}, [selectedImage]);

	return (
		<div className="gallery-container">
			<h2 className="gallery-title">From Our Gallery</h2>

			<div className="masonry-grid">
				{images.map((image) => (
					<div
						key={image.id}
						className={`masonry-item ${image.size}`}
						onClick={() => handleClick(image)}
					>
						<img
							src={image.src}
							alt={image.title}
						/>
					</div>
				))}
			</div>

			{selectedImage && (
				<div
					className="modal"
					onClick={handleClose}
				>
					<div
						className="modal-content"
						onClick={(e) => e.stopPropagation()}
					>
						<button
							className="modal-close"
							onClick={handleClose}
						>
							×
						</button>
						<img
							src={selectedImage.src}
							alt={selectedImage.title}
						/>
						<div className="modal-content-text">
							<h3>{selectedImage.title}</h3>
							<p>{selectedImage.description}</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Gallery;
