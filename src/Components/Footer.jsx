import {
	FaInstagram,
	FaFacebookF,
	FaTiktok,
	FaTwitter,
} from "react-icons/fa";
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
							Excepteur officia elit laborum, minim veniam anim enim
							occaecat culpa reprehenderit. Irure cupidatat laborum, quis
							sunt laboris fugiat est adipiscing.
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
								<a href="#" className="footer-link">
									Educational Articles
								</a>
							</li>
							<li>
								<a href="#" className="footer-link">
									Videos
								</a>
							</li>
							<li>
								<a href="#" className="footer-link">
									Reports
								</a>
							</li>
							<li>
								<a href="#" className="footer-link">
									Research
								</a>
							</li>
						</ul>
					</div>

					{/* Get Involved */}
					<div className="footer-column">
						<h3 className="footer-heading">Get Involved</h3>
						<ul className="footer-links">
							<li>
								<a href="#" className="footer-link">
									Events and Campaigns
								</a>
							</li>
							<li>
								<a href="#" className="footer-link">
									How to Help
								</a>
							</li>
							<li>
								<a href="#" className="footer-link">
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
								<a href="#" className="footer-link">
									Find an Audiologist
								</a>
							</li>
							<li>
								<a href="#" className="footer-link">
									FAQs
								</a>
							</li>
							<li>
								<a href="#" className="footer-link">
									Contact us
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Social Media Icons */}
				<div className="social-media">
					<a href="#" className="social-link">
						<span className="sr-only">Instagram</span>
						<FaInstagram size={20} />
					</a>
					<a href="#" className="social-link">
						<span className="sr-only">Facebook</span>
						<FaFacebookF size={20} />
					</a>
					<a href="#" className="social-link">
						<span className="sr-only">TikTok</span>
						<FaTiktok size={20} />
					</a>
					<a href="#" className="social-link">
						<span className="sr-only">Twitter</span>
						<FaTwitter size={20} />
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
