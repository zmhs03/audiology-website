import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import "../Styles/footer.css";

function Footer() {
	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="footer-grid">
					{/* Hear & Now */}
					<div className="footer-column">
						<h3 className="footer-heading">Hear & Now</h3>
						<p className="footer-description">
							A digital platform dedicated to raising hearing health
							awareness
						</p>
						<div className="search-container">
							<div className="search-wrapper">
								<input
									type="text"
									placeholder="Search..."
									className="search-input"
								/>
								<div className="search-icon">
									<FiSearch size={16} />
								</div>
							</div>
						</div>
					</div>

					{/* Awareness */}
					<div className="footer-column">
						<h3 className="footer-heading">Awareness</h3>
						<ul className="footer-links">
							<li>
								<a
									href="/audiology-website/Awareness"
									className="footer-link"
								>
									Overview
								</a>
							</li>
							<li>
								<a
									href="/audiology-website/Gallery"
									className="footer-link"
								>
									Gallery
								</a>
							</li>
							<li>
								<a
									href="/audiology-website/Prevention"
									className="footer-link"
								>
									Prevention
								</a>
							</li>
							<li>
								<a
									href="/audiology-website/Resources"
									className="footer-link"
								>
									Resources
								</a>
							</li>
						</ul>
					</div>

					{/* Get Involved */}
					<div className="footer-column">
						<h3 className="footer-heading">Get Involved</h3>
						<ul className="footer-links">
							<li>
								<a
									href="/audiology-website/Get-Involved"
									className="footer-link"
								>
									Get Involved
								</a>
							</li>
							<li>
								<a
									href="/audiology-website/Get-Involved/#fundraising"
									className="footer-link"
								>
									Fundraising
								</a>
							</li>
							<li>
								<a
									href="/audiology-website/Get-Involved/#volunteer"
									className="footer-link"
								>
									Volunteer
								</a>
							</li>
							<li>
								<a
									href="/audiology-website/Get-Involved/#campaigns"
									className="footer-link"
								>
									Campaigns
								</a>
							</li>
							<li>
								<a
									href="/audiology-website"
									className="footer-link"
								>
									Donate
								</a>
							</li>
						</ul>
					</div>

					{/* Support */}
					<div className="footer-column">
						<h3 className="footer-heading">Support</h3>
						<ul className="footer-links">
							<li>
								<a
									href="/audiology-website/Audiologist"
									className="footer-link"
								>
									Find an Audiologist
								</a>
							</li>
							<li>
								<a
									href="/audiology-website/FAQs"
									className="footer-link"
								>
									FAQs
								</a>
							</li>
							<li>
								<a
									href="/audiology-website/Support"
									className="footer-link"
								>
									Contact Us
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Social Media Icons */}
				<div className="social-media">
					<a
						href="https://www.instagram.com/wits__university/?hl=en"
						className="social-link"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="sr-only">Instagram</span>
						<FaInstagram size={20} />
					</a>
					<a
						href="https://www.facebook.com/WitsUniversity"
						className="social-link"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="sr-only">Facebook</span>
						<FaFacebookF size={20} />
					</a>
					<a
						href="https://www.tiktok.com/@witsuniversity"
						className="social-link"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="sr-only">TikTok</span>
						<FaTiktok size={20} />
					</a>
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
		</footer>
	);
}

export default Footer;
