import { Link } from "react-router";
import { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

import "../Styles/navbar.css";

function Navbar() {
	const [activeDropdown, setActiveDropdown] = useState(null);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const toggleDropdown = (dropdownName) => {
		setActiveDropdown(
			activeDropdown === dropdownName ? null : dropdownName
		);
	};

	const closeDrawer = () => {
		setIsDrawerOpen(false);
		setActiveDropdown(null);
	};

	const dropdownItems = {
		AboutUs: [
			{ to: "/AboutUs", label: "About Hear&Now" },
			{ to: "/Hearing-Health", label: "Hearing Health" },
			{ to: "/World-Hearing-Day", label: "World Hearing Day" },
		],
		Awareness: [
			{ to: "/Awareness", label: "Overview" },
			{ to: "/Gallery", label: "Gallery" },
			{ to: "/Prevention", label: "Prevention" },
			{ to: "/Resources", label: "Resources" },
		],
		GetInvolved: [
			{ to: "/Get-Involved", label: "Get Involved" },
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

			{/* Hamburger */}
			<button
				className="mobile-menu-icon"
				onClick={() => setIsDrawerOpen(!isDrawerOpen)}
			>
				{isDrawerOpen ? <FaTimes /> : <FaBars />}
			</button>

			{/* Desktop menu */}
			<ul className="nav-menu">
				<li className="nav-item">
					<Link to="/" className="nav-links">
						Home
					</Link>
				</li>

				{Object.entries(dropdownItems).map(([key, items]) => (
					<li key={key} className="nav-item dropdown">
						<div className="nav-item-container">
							<Link to={items[0].to} className="nav-links main-link">
								{key.replace(/([A-Z])/g, " $1").trim()}
							</Link>
							<button
								className="dropdown-toggle-btn"
								onClick={() => toggleDropdown(key)}
							>
								<FaChevronDown />
							</button>
						</div>
						{activeDropdown === key && (
							<ul className="dropdown-menu">
								{items.map((item, i) => (
									<li key={i}>
										<Link to={item.to} className="dropdown-link">
											{item.label}
										</Link>
									</li>
								))}
							</ul>
						)}
					</li>
				))}

				<li className="nav-item">
					<Link to="/Support" className="nav-links">
						Support
					</Link>
				</li>
			</ul>

			<button className="donate-btn">Donate</button>

			{/* Mobile drawer + overlay */}
			<div
				className={`drawer-overlay ${isDrawerOpen ? "active" : ""}`}
				onClick={closeDrawer}
			></div>

			<div className={`drawer ${isDrawerOpen ? "open" : ""}`}>
				<ul className="drawer-menu">
					<li>
						<Link to="/" onClick={closeDrawer}>
							Home
						</Link>
					</li>

					{Object.entries(dropdownItems).map(([key, items]) => (
						<li key={key}>
							<button
								className="drawer-dropdown"
								onClick={() => toggleDropdown(key)}
							>
								{key.replace(/([A-Z])/g, " $1").trim()} <FaChevronDown />
							</button>
							{activeDropdown === key && (
								<ul className="drawer-submenu">
									{items.map((item, i) => (
										<li key={i}>
											<Link to={item.to} onClick={closeDrawer}>
												{item.label}
											</Link>
										</li>
									))}
								</ul>
							)}
						</li>
					))}

					<li>
						<Link to="/Support" onClick={closeDrawer}>
							Support
						</Link>
					</li>
					<li className="drawer-donate">
						<button className="donate-btn" onClick={closeDrawer}>
							Donate
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
