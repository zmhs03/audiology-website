import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
// import Invisi
import "../Styles/gallery.css";

const baseImages = [
	{
		id: 1,
		src: "",
		title: "Modern Hearing Aid Technology",
		description:
			"Contemporary behind-the-ear hearing aid showcasing sleek design and advanced technology. Modern devices feature Bluetooth connectivity, rechargeable batteries, and AI-powered sound processing that adapts to different environments automatically.",
	},
	{
		id: 2,
		src: "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800",
		title: "Hearing Aid Close-Up",
		description:
			"Detailed view of a modern in-ear hearing aid demonstrating the compact and discreet design of today's assistive listening devices. These devices are nearly invisible when worn and provide excellent sound quality.",
	},
	{
		id: 3,
		src: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=800",
		title: "Professional Audiologist Consultation",
		description:
			"Certified audiologist conducting a comprehensive hearing assessment. During consultations, specialists perform thorough hearing tests, review results, and provide personalized recommendations for hearing health management.",
	},
	{
		id: 4,
		src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800",
		title: "Senior Hearing Care",
		description:
			"Compassionate hearing care for elderly patients experiencing hearing loss. Programs focus on improving quality of life through proper hearing aid fitting, regular follow-ups, and education on device maintenance and optimal usage.",
	},
	{
		id: 5,
		src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
		title: "Hearing Aid Fitting",
		description:
			"Professional fitting and adjustment of hearing aids by a trained audiologist. Proper fitting ensures optimal performance, comfort, and sound quality for the individual's specific hearing loss pattern.",
	},
	{
		id: 6,
		src: "https://images.unsplash.com/photo-1584467541268-b040f83be3fd?w=800",
		title: "Pediatric Hearing Care",
		description:
			"Specialized hearing care for children and infants. Early detection and intervention are crucial for speech and language development. Pediatric audiologists use child-friendly testing methods and provide family-centered care.",
	},
	{
		id: 7,
		src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800",
		title: "Soundproof Testing Booth",
		description:
			"State-of-the-art soundproof audiometric testing booth for precise hearing assessments. These controlled environments allow audiologists to accurately measure hearing thresholds across different frequencies.",
	},
	{
		id: 8,
		src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800",
		title: "Hearing Health Assessment",
		description:
			"Comprehensive hearing evaluation using advanced diagnostic equipment. Professional audiologists conduct thorough assessments to identify the type and degree of hearing loss and recommend appropriate treatment options.",
	},
	{
		id: 9,
		src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
		title: "Digital Hearing Device",
		description:
			"Modern digital hearing aid with wireless connectivity features. Today's devices can stream phone calls, music, and TV audio directly to the hearing aids for enhanced listening experience in various situations.",
	},
	{
		id: 10,
		src: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800",
		title: "Hearing Aid Maintenance",
		description:
			"Regular maintenance and professional cleaning services ensure optimal device performance. Proper care extends the life of hearing aids and maintains sound quality through routine checkups and adjustments.",
	},
	{
		id: 11,
		src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800",
		title: "Patient-Centered Care",
		description:
			"Personalized hearing healthcare focusing on individual needs and lifestyle. Audiologists work closely with patients to understand their challenges and provide customized solutions for improved hearing and quality of life.",
	},
	{
		id: 12,
		src: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800",
		title: "Tinnitus Management",
		description:
			"Specialized programs for managing tinnitus and ringing in the ears. Treatment approaches include sound therapy, counseling, and combination devices that provide both amplification and tinnitus masking features.",
	},
	{
		id: 13,
		src: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800",
		title: "Audiometric Testing",
		description:
			"Professional conducting pure-tone audiometry testing to assess hearing sensitivity. This standard hearing test measures the softest sounds a person can hear at different frequencies and helps diagnose hearing loss.",
	},
	{
		id: 14,
		src: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800",
		title: "Elderly Patient Care",
		description:
			"Dedicated hearing healthcare for older adults addressing age-related hearing loss. Comprehensive programs include hearing evaluations, device selection, fitting, and ongoing support for optimal hearing health.",
	},
	{
		id: 15,
		src: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800",
		title: "In-Canal Hearing Devices",
		description:
			"Discreet in-the-canal hearing aids that are nearly invisible when worn. These custom-molded devices provide excellent sound quality while being cosmetically appealing, popular among active adults and professionals.",
	},
	{
		id: 16,
		src: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800",
		title: "Workplace Hearing Protection",
		description:
			"Industrial hearing conservation programs protecting workers in noisy environments. Services include custom ear protection, noise monitoring, and regular hearing screenings to prevent occupational hearing loss.",
	},
	{
		id: 17,
		src: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800",
		title: "Advanced Diagnostic Equipment",
		description:
			"Modern audiological equipment for comprehensive hearing diagnostics. Advanced technology allows for precise measurements and detailed analysis to develop effective treatment plans tailored to each patient.",
	},
	{
		id: 18,
		src: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800",
		title: "Group Support Sessions",
		description:
			"Community support groups for individuals with hearing loss and their families. Sessions provide emotional support, practical communication tips, and opportunities to connect with others facing similar challenges.",
	},
	{
		id: 19,
		src: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800",
		title: "Hearing Health Education",
		description:
			"Educational workshops on hearing loss prevention and hearing health awareness. Topics include safe listening practices, recognizing signs of hearing loss, and understanding when to seek professional audiological help.",
	},
	{
		id: 20,
		src: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=800",
		title: "Family-Centered Hearing Care",
		description:
			"Family-centered approach involving loved ones in the hearing healthcare process. Audiologists educate families on communication strategies and provide support to help them better understand and accommodate hearing loss.",
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
							<FaTimes />
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
