import "../Styles/involved.css";
import placeholder from "../Assets/images/placeholder.jpg";
import Hi from "../Assets/images/Hi-Hopes.jpg";
import Carel from "../Assets/images/carel-du-toit.jpg";
import Ear3 from "../Assets/images/Ear3.jpg"; //Photo by Kindel Media: https://www.pexels.com/photo/man-s-ear-in-close-up-photography-7298465/
import CardSlider from "../Components/CardSlider";
import { IoMdArrowRoundForward } from "react-icons/io";

function GetInvolved() {
	const fundraisingCards = [
		{
			image: placeholder,
			title:
				"Foundation for Children with Hearing Loss in Southern Africa",
			description:
				"Foundation for Children with Hearing Loss in Southern Africa",
			link: "https://www.globalgiving.org/donate/102379/foundation-for-children-with-hearing-loss-in-southern-a/",
		},
		{
			image: Hi,
			title: "Hi Hopes",
			description: "Hi Hopes",
			link: "https://devman.wits.ac.za/Devman/hihopes/giving/",
		},
		{
			image: Carel,
			title: "Carel du Toit Centre",
			description:
				"Join our team in spreading awareness about hearing health.",
			link: "https://careldutoit.co.za/donation/",
		},
		{
			image: placeholder,
			title: "The Gift of Hearing",
			description:
				"Join our team in spreading awareness about hearing health.",
			link: "https://www.dischem.co.za/the-gift-of-hearing",
		},
		{
			image: placeholder,
			title: "Hearo",
			description:
				"Join our team in spreading awareness about hearing health.",
			link: "https://www.hearo.co.za/donate/",
		},
	];

	const volunteeringCards = [
		{
			image: Hi,
			title: "Hi Hopes",
			description: "Hi Hopes",
			link: "https://devman.wits.ac.za/Devman/hihopes/giving/",
		},
		{
			image: placeholder,
			title: "Hear in Africa",
			description:
				"Join our team in spreading awareness about hearing health.",
			link: "https://hearinafrica.com/outreach-projects/",
		},
	];

	const campaignsCards = [
		{
			image: placeholder,
			title: "World Hearing Day",
			description: "A day dedicated to raising hearing awareness",
			link: "https://worldhearingday.org/",
		},
	];

	return (
		<div className="get-involved">
			{/* Header Section */}
			<section className="header-section">
				<div className="container">
					<div className="header-content">
						<div className="text-content">
							<span className="date">MARCH 3</span>
							<h2>World Hearing Day </h2>
							<p>
								Increase awareness and promote action to address hearing
								loss and related issues. Together we can make a difference
								in the lives of those with hearing difficulties.
							</p>
							<a
								href="https://www.who.int/campaigns/world-hearing-day"
								target="_blank"
								rel="noopener noreferrer"
								className="learn-more-button"
							>
								Learn More <IoMdArrowRoundForward />
							</a>
						</div>
						<div className="header-image">
							<div className="image-placeholder">
								<img
									src={Ear3}
									alt="Left ear"
									className="placeholder-image"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Join Section */}
			<section className="join-section">
				<div className="container">
					<h3>Join donors supporting hearing health</h3>
					<button className="join-btn">Donate</button>
				</div>
			</section>

			{/* Fundraising Section */}
			<section className="involvement-section">
				<div className="container">
					<h3>Fundraising</h3>
					<p>
						Support the cause through fundraising. These fundraising
						campaigns need sufficient funds to undertake important
						initiatives and raise public awareness.
					</p>
					<CardSlider cards={fundraisingCards} />
				</div>
			</section>

			{/* Volunteering Section */}
			<section className="involvement-section">
				<div className="container">
					<h3>Volunteering</h3>
					<p>
						Donate your time by volunteering and help promote hearing
						health awareness and provide critical support to those with
						hearing loss.
					</p>
					<CardSlider cards={volunteeringCards} />
				</div>
			</section>

			{/* Campaign Section */}
			<section className="involvement-section">
				<div className="container">
					<h3>Campaigns</h3>
					<p>
						Support campaigns targeted at understanding hearing loss and
						raising awareness within your community.
					</p>
					<CardSlider cards={campaignsCards} />
				</div>
			</section>
		</div>
	);
}

export default GetInvolved;
