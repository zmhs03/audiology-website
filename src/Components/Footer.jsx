import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "../Styles/footer.css";
import WordLogo1 from "../Assets/images/WordLogo-white.png";
import ScrollLink from "../Components/ScrollLink";

function Footer() {
	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="footer-grid">
					{/* Hear & Now */}
					<div className="footer-column">
						<ScrollLink
							to="/"
							className="footer-logo-link"
						>
							<img
								src={WordLogo1}
								alt="Hear & Now"
								className="footer-heading-img"
							/>
						</ScrollLink>
					</div>

					{/* Awareness */}
					<div className="footer-column">
						<h3 className="footer-heading">Awareness</h3>
						<ul className="footer-links">
							<li>
								<ScrollLink
									to="/Awareness"
									className="footer-link"
								>
									Overview
								</ScrollLink>
							</li>
							<li>
								<ScrollLink
									to="/Gallery"
									className="footer-link"
								>
									Gallery
								</ScrollLink>
							</li>
							<li>
								<ScrollLink
									to="/Prevention"
									className="footer-link"
								>
									Prevention
								</ScrollLink>
							</li>
							<li>
								<ScrollLink
									to="/Resources"
									className="footer-link"
								>
									Resources
								</ScrollLink>
							</li>
						</ul>
					</div>

					{/* Get Involved */}
					<div className="footer-column">
						<h3 className="footer-heading">Get Involved</h3>
						<ul className="footer-links">
							<li>
								<ScrollLink
									to="/Get-Involved"
									className="footer-link"
								>
									Get Involved
								</ScrollLink>
							</li>
							<li>
								<ScrollLink
									to="/Get-Involved"
									state={{ scrollTo: "fundraising" }}
									className="footer-link"
								>
									Fundraising
								</ScrollLink>
							</li>
							<li>
								<ScrollLink
									to="/Get-Involved"
									state={{ scrollTo: "volunteer" }}
									className="footer-link"
								>
									Volunteer
								</ScrollLink>
							</li>
							<li>
								<ScrollLink
									to="/Get-Involved"
									state={{ scrollTo: "campaigns" }}
									className="footer-link"
								>
									Campaigns
								</ScrollLink>
							</li>
						</ul>
					</div>

					{/* Support */}
					<div className="footer-column">
						<h3 className="footer-heading">Support</h3>
						<ul className="footer-links">
							<li>
								<ScrollLink
									to="/Support"
									className="footer-link"
								>
									Contact Us
								</ScrollLink>
							</li>
						</ul>
					</div>
				</div>

				{/* Social Media Icons */}
				<div className="footer-bottom">
					<hr className="footer-divider" />
					<div className="social-media">
						{/* Instagram */}
						<a
							href="https://www.instagram.com/wits__university/?hl=en"
							className="social-link"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="sr-only">Instagram</span>
							<FaInstagram size={20} />
						</a>
						{/* Facebook */}
						<a
							href="https://www.facebook.com/WitsUniversity"
							className="social-link"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="sr-only">Facebook</span>
							<FaFacebookF size={20} />
						</a>
						{/* TikTok */}
						<a
							href="https://www.tiktok.com/@witsuniversity"
							className="social-link"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="sr-only">TikTok</span>
							<FaTiktok size={20} />
						</a>
						{/* X (Twitter) */}
						<a
							href="https://x.com/WitsUniversity"
							className="social-link"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="sr-only">X</span>
							<FaXTwitter size={20} />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
