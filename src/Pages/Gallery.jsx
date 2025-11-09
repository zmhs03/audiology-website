import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import invisibleHearingAid from "../Assets/images/mark-paton-RNue9Vxx2sc-unsplash.jpg";
import closeUpHearingAid from "../Assets/images/elderly-woman-wearing-hearing-aid.jpg"; //<a href="https://www.freepik.com/free-photo/elderly-woman-wearing-hearing-aid_2976004.htm">Image by rawpixel.com on Freepik</a>
import audiologist1 from "../Assets/images/audiologist1.jpg"; //<a href="https://www.freepik.com/free-photo/male-physician-using-otoscope-ear-examination-healthcare-facility-with-old-patient-otologist-using-otolaryngology-tool-ent-instrument-otology-consultation-cabinet_31668919.htm">Image by DC Studio on Freepik</a>
import Senior from "../Assets/images/check-ear.jpg"; //<a href="https://www.freepik.com/free-photo/clinic-otology-specialist-consulting-senior-patient-using-otoscope-check-ear-infection-hospital-otologist-examining-sick-retired-man-internal-ear-condition-while-doctor-cabinet_28175280.htm">Image by DC Studio on Freepik</a>
import fitting from "../Assets/images/man-wearing-hearing-aids-side-view.jpg"; //<a href="https://www.freepik.com/free-photo/man-wearing-hearing-aids-side-view_32077755.htm">Image by freepik</a>
import Pediatric from "../Assets/images/pediatrician-doing-ear-exam-baby-girl.jpg"; //<a href="https://www.freepik.com/free-photo/pediatrician-doing-ear-exam-baby-girl_12233431.htm">Image by gpointstudio on Freepik</a>
import inCanal from "../Assets/images/mark-paton-iItakOskHs8-unsplash.jpg"; //Photo by <a href="https://unsplash.com/@mark0polo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mark Paton</a> on <a href="https://unsplash.com/photos/a-close-up-of-a-person-wearing-a-pair-of-earrings-iItakOskHs8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
import WorkPlace from "../Assets/images/close-up-hand-holding-protection-heaphones.jpg"; //<a href="https://www.freepik.com/free-photo/close-up-hand-holding-protection-heaphones_13442602.htm">Image by freepik</a>

import "../Styles/gallery.css";

const baseImages = [
	{
		id: 1,
		src: invisibleHearingAid,
		title: "Modern Hearing Aid Technology",
		description:
			"Contemporary behind-the-ear hearing aid showcasing sleek design and advanced technology. Modern devices feature Bluetooth connectivity, rechargeable batteries, and AI-powered sound processing that adapts to different environments automatically.",
	},
	{
		id: 2,
		src: closeUpHearingAid,
		title: "Hearing Aid Close-Up",
		description:
			"Detailed view of a modern in-ear hearing aid demonstrating the compact and discreet design of today's assistive listening devices. These devices are nearly invisible when worn and provide excellent sound quality.",
	},
	{
		id: 3,
		src: audiologist1,
		title: "Professional Audiologist Consultation",
		description:
			"Certified audiologist conducting a comprehensive hearing assessment. During consultations, specialists perform thorough hearing tests, review results, and provide personalized recommendations for hearing health management.",
	},
	{
		id: 4,
		src: Senior,
		title: "Senior Hearing Care",
		description:
			"Compassionate hearing care for elderly patients experiencing hearing loss. Programs focus on improving quality of life through proper hearing aid fitting, regular follow-ups, and education on device maintenance and optimal usage.",
	},
	{
		id: 5,
		src: fitting,
		title: "Hearing Aid Fitting",
		description:
			"Professional fitting and adjustment of hearing aids by a trained audiologist. Proper fitting ensures optimal performance, comfort, and sound quality for the individual's specific hearing loss pattern.",
	},
	{
		id: 6,
		src: Pediatric,
		title: "Pediatric Hearing Care",
		description:
			"Specialized hearing care for children and infants. Early detection and intervention are crucial for speech and language development. Pediatric audiologists use child-friendly testing methods and provide family-centered care.",
	},

	{
		id: 7,
		src: inCanal,
		title: "In-Canal Hearing Devices",
		description:
			"Discreet in-the-canal hearing aids that are nearly invisible when worn. These custom-molded devices provide excellent sound quality while being cosmetically appealing, popular among active adults and professionals.",
	},
	{
		id: 8,
		src: WorkPlace,
		title: "Workplace Hearing Protection",
		description:
			"Industrial hearing conservation programs protecting workers in noisy environments. Services include custom ear protection, noise monitoring, and regular hearing screenings to prevent occupational hearing loss.",
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
