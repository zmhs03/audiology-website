import { Link } from "react-router";
import { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../Assets/images/Logo1.png";
import Logow from "../Assets/images/WordLogo.png";

import "../Styles/navbar.css";

const dropdownItems = {
	Awareness: [
		{ to: "/Awareness", label: "Overview" },
		{ to: "/Gallery", label: "Gallery" },
		{ to: "/Prevention", label: "Prevention" },
		{ to: "/Resources", label: "Resources" },
	],
};

function Navbar() {
	const [activeDropdown, setActiveDropdown] = useState(null);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const toggleDropdown = (key) => {
		setActiveDropdown(activeDropdown === key ? null : key);
	};

	const closeDropdown = () => setActiveDropdown(null);

	const closeDrawer = () => {
		setIsDrawerOpen(false);
		closeDropdown();
	};

	return (
		<nav className="navbar">
			{/* Logo */}
			<Link
				to="/"
				className="logo-link"
			>
				<img
					src={Logo}
					alt="Hear & Now"
					className="logo-image"
				/>
			</Link>

			{/* Hamburger button */}
			<button
				className="mobile-menu-icon"
				onClick={() => setIsDrawerOpen(!isDrawerOpen)}
			>
				{isDrawerOpen ? <FaTimes /> : <FaBars />}
			</button>

			{/* Desktop menu */}
			<ul className="nav-menu">
				<li className="nav-item">
					<Link
						to="/AboutUs"
						className="nav-links"
					>
						About
					</Link>
				</li>

				{Object.entries(dropdownItems).map(([key, items]) => (
					<li
						key={key}
						className="nav-item dropdown"
						onMouseEnter={() => setActiveDropdown(key)}
						onMouseLeave={closeDropdown}
					>
						<div className="nav-item-container">
							<Link
								to={items[0].to}
								className="nav-links main-link"
							>
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
										<Link
											to={item.to}
											className="dropdown-link"
										>
											{item.label}
										</Link>
									</li>
								))}
							</ul>
						)}
					</li>
				))}

				<li className="nav-item">
					<Link
						to="/Get-Involved"
						className="nav-links"
					>
						Get Involved
					</Link>
				</li>
				<li className="nav-item">
					<Link
						to="/Support"
						className="nav-links"
					>
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
						<Link
							to="/"
							onClick={closeDrawer}
						>
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
											<Link
												to={item.to}
												onClick={closeDrawer}
											>
												{item.label}
											</Link>
										</li>
									))}
								</ul>
							)}
						</li>
					))}

					<li>
						<Link
							to="/Get-Involved"
							onClick={closeDrawer}
						>
							Get Involved
						</Link>
					</li>
					<li>
						<Link
							to="/Support"
							onClick={closeDrawer}
						>
							Support
						</Link>
					</li>
					<li className="drawer-donate">
						<button
							className="donate-btn"
							onClick={closeDrawer}
						>
							Donate
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
