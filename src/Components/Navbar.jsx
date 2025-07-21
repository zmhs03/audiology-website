import { Link } from "react-router";
import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

import "../Styles/navbar.css";

function Navbar() {
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (!event.target.closest(".dropdown")) {
				setActiveDropdown(null);
			}
		};

		document.addEventListener("click", handleClickOutside);
		return () => document.removeEventListener("click", handleClickOutside);
	}, []);
	const [activeDropdown, setActiveDropdown] = useState(null);

	const toggleDropdown = (dropdownName) => {
		setActiveDropdown(
			activeDropdown === dropdownName ? null : dropdownName
		);
	};

	const closeDropdown = () => {
		setActiveDropdown(null);
	};

	const dropdownItems = {
		aboutUs: [
			{ to: "/AboutUs", label: "About Hear&Now" },
			{ to: "/HearingHealth", label: "Hearing Health" },
			{ to: "/WorldHearingDay", label: "World Hearing Day" },
		],
		awareness: [
			{ to: "/Awareness", label: "Overview" },
			{ to: "/Gallery", label: "Gallery" },
			{ to: "/Prevention", label: "Prevention" },
			{ to: "/Resources", label: "Resources" },
		],
		getInvolved: [
			{ to: "/Get-Involved", label: "Get Involved " },
			{ to: "/Fundraising", label: "Fundraising" },
			{ to: "/Volunteer", label: "Volunteer" },
			{ to: "/Advocacy", label: "Advocacy" },
		],
	};

	return (
		<nav className="navbar">
			<Link to="/" className="navbar-logo">
				Hear & Now
			</Link>

			<ul className="nav-menu">
				<li className="nav-item">
					<Link to="/" className="nav-links">
						Home
					</Link>
				</li>

				<li className="nav-item dropdown">
					<div className="nav-item-container">
						<Link to="/AboutUs" className="nav-links main-link">
							About Us
						</Link>
						<button
							className="dropdown-toggle-btn"
							onClick={() => toggleDropdown("AboutUs")}
							aria-expanded={activeDropdown === "AboutUs"}
						>
							<span className="dropdown-arrow">
								<FaChevronDown />
							</span>
						</button>
					</div>
					{activeDropdown === "AboutUs" && (
						<ul className="dropdown-menu">
							{dropdownItems.aboutUs.map((item, index) => (
								<li key={index} className="dropdown-item">
									<Link
										to={item.to}
										className="dropdown-link"
										onClick={closeDropdown}
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					)}
				</li>

				<li className="nav-item dropdown">
					<div className="nav-item-container">
						<Link to="/Awareness" className="nav-links main-link">
							Awareness
						</Link>
						<button
							className="dropdown-toggle-btn"
							onClick={() => toggleDropdown("awareness")}
							aria-expanded={activeDropdown === "awareness"}
						>
							<span className="dropdown-arrow">
								<FaChevronDown />
							</span>
						</button>
					</div>
					{activeDropdown === "awareness" && (
						<ul className="dropdown-menu">
							{dropdownItems.awareness.map((item, index) => (
								<li key={index} className="dropdown-item">
									<Link
										to={item.to}
										className="dropdown-link"
										onClick={closeDropdown}
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					)}
				</li>

				<li className="nav-item dropdown">
					<div className="nav-item-container">
						<Link to="/Get-Involved" className="nav-links main-link">
							Get Involved
						</Link>
						<button
							className="dropdown-toggle-btn"
							onClick={() => toggleDropdown("getInvolved")}
							aria-expanded={activeDropdown === "getInvolved"}
						>
							<span className="dropdown-arrow">
								<FaChevronDown />
							</span>
						</button>
					</div>
					{activeDropdown === "getInvolved" && (
						<ul className="dropdown-menu">
							{dropdownItems.getInvolved.map((item, index) => (
								<li key={index} className="dropdown-item">
									<Link
										to={item.to}
										className="dropdown-link"
										onClick={closeDropdown}
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					)}
				</li>

				<li className="nav-item">
					<Link to="/Support" className="nav-links">
						Support
					</Link>
				</li>
			</ul>

			<button className="donate-btn">Donate</button>
		</nav>
	);
}

export default Navbar;
