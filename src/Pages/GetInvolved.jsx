import React from "react";
import "../Styles/involved.css";

import Hi from "../Assets/images/Hi-Hopes.jpg";
import Carel from "../Assets/images/carel-du-toit.jpg";
import Hear from "../Assets/images/hearing-loss.jpeg";
import Gift from "../Assets/images/mia-le-roux.jpeg";
import HearingDay from "../Assets/images/Hearing-Day.png";
import Hearo from "../Assets/images/hearo.png";
import Africa from "../Assets/images/hear-in.jpeg";
import Ear3 from "../Assets/images/Ear3.jpg";

import { IoMdArrowRoundForward } from "react-icons/io";
import CardSlider from "../Components/CardSlider";

// Card Data
const FUNDRAISING_CARDS = [
	{
		image: Hear,
		title: "Foundation for Children with Hearing Loss in Southern Africa",
		description:
			"Supporting children with hearing loss across Southern Africa through education, advocacy, and resources.",
		link: "https://www.globalgiving.org/donate/102379/foundation-for-children-with-hearing-loss-in-southern-a/",
	},
	{
		image: Hi,
		title: "Hi Hopes",
		description:
			"Empowering deaf and hard of hearing children to reach their full potential through innovative programs.",
		link: "https://devman.wits.ac.za/Devman/hihopes/giving/",
	},
	{
		image: Carel,
		title: "Carel du Toit Centre",
		description:
			"Providing specialized early intervention and education services for deaf children and their families.",
		link: "https://careldutoit.co.za/donation/",
	},
	{
		image: Gift,
		title: "The Gift of Hearing",
		description:
			"Making hearing healthcare accessible by providing hearing aids and support to those in need.",
		link: "https://www.dischem.co.za/the-gift-of-hearing",
	},
	{
		image: Hearo,
		title: "Hearo",
		description:
			"Delivering affordable hearing solutions and support services to communities across South Africa.",
		link: "https://www.hearo.co.za/donate/",
	},
];

const VOLUNTEERING_CARDS = [
	{
		image: Hi,
		title: "Hi Hopes",
		description:
			"Volunteer to support deaf and hard of hearing children through mentoring and community programs.",
		link: "https://devman.wits.ac.za/Devman/hihopes/giving/",
	},
	{
		image: Africa,
		title: "Hear in Africa",
		description:
			"Join outreach projects providing hearing healthcare and education to underserved communities.",
		link: "https://hearinafrica.com/outreach-projects/",
	},
];

const CAMPAIGNS_CARDS = [
	{
		image: HearingDay,
		title: "World Hearing Day",
		description: "A day dedicated to raising hearing awareness",
		link: "https://worldhearingday.org/",
	},
];

function GetInvolved() {
	return (
		<div className="get-involved">
			{/* Header Section */}
			<section className="header-section">
				<div className="container">
					<div className="header-content">
						<div className="text-content">
							<span className="date">MARCH 3</span>
							<h2>World Hearing Day</h2>
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
			<section
				className="join-section"
				id="donate"
			>
				<div className="container">
					<h3>Join donors supporting hearing health</h3>
					<button className="join-btn">Donate</button>
				</div>
			</section>

			{/* Fundraising Section */}
			<section
				className="involvement-section"
				id="fundraising"
			>
				<div className="container">
					<h3>Fundraising</h3>
					<p>
						Support the cause through fundraising. These campaigns need
						sufficient funds to undertake important initiatives and raise
						public awareness.
					</p>
					<CardSlider cards={FUNDRAISING_CARDS} />
				</div>
			</section>

			{/* Volunteering Section */}
			<section
				className="involvement-section"
				id="volunteer"
			>
				<div className="container">
					<h3>Volunteering</h3>
					<p>
						Donate your time by volunteering and help promote hearing
						health awareness and provide critical support to those with
						hearing loss.
					</p>
					<CardSlider cards={VOLUNTEERING_CARDS} />
				</div>
			</section>

			{/* Campaign Section */}
			<section
				className="involvement-section"
				id="campaigns"
			>
				<div className="container">
					<h3>Campaigns</h3>
					<p>
						Support campaigns targeted at understanding hearing loss and
						raising awareness within your community.
					</p>
					<CardSlider cards={CAMPAIGNS_CARDS} />
				</div>
			</section>
		</div>
	);
}

export default GetInvolved;
