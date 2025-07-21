import { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import "../Styles/support.css";

export default function Support() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleInputChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		alert("Message sent successfully!");
	};

	return (
		<div className="contact-page">
			{/* support Section */}
			<section className="support-section">
				<div className="support-content">
					<h2 className="support-title">Contact Us</h2>
					<p className="support-description">
						Get in touch with us for hearing awareness support and
						information.
					</p>
				</div>
				<div className="support-decoration"></div>
			</section>

			{/* Main Content */}
			<div className="main-content">
				<div className="content-grid">
					{/* Contact Info */}
					<div className="contact-info">
						<div className="contact-cards">
							{/* Phone */}
							<div className="contact-card">
								<div className="contact-icon">
									<FaPhone className="icon" />
								</div>
								<h4 className="contact-title">Phone</h4>
								<p className="contact-detail"> +27 (0)11 717 1000</p>
							</div>

							{/* WhatsApp */}
							<div className="contact-card">
								<div className="contact-icon">
									<IoLogoWhatsapp className="icon" />
								</div>
								<h4 className="contact-title">WhatsApp</h4>
								<p className="contact-detail">+27 (0)11 717 1000</p>
							</div>

							{/* Email */}
							<div className="contact-card">
								<div className="contact-icon">
									<FaEnvelope className="icon" />
								</div>
								<h4 className="contact-title">Email</h4>
								<p className="contact-detail">
									2429549@students.wits.ac.za
								</p>
							</div>

							{/* Our Shop */}
							<div className="contact-card">
								<div className="contact-icon">
									<FiMapPin className="icon" />
								</div>
								<h4 className="contact-title">Our Address</h4>
								<p className="contact-detail">
									1 Jan Smuts Avenue, Braamfontein 2000, Johannesburg,
									South Africa
								</p>
							</div>
						</div>

						{/* Map */}
						<div className="map-container">
							<div className="map-placeholder">
								<div className="map-content">
									<FiMapPin className="map-icon" />
									<p className="map-title">Our Location</p>
									<p className="map-subtitle">
										Interactive map would go here
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<div className="form-section">
						<div className="form-header">
							<h3 className="form-title">Get In Touch</h3>
							<p className="form-description">
								Contact us for hearing awareness resources, support, or any
								questions about hearing health and accessibility.
							</p>
						</div>

						<div className="contact-form">
							<div className="form-group">
								<label className="form-label">Name</label>
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleInputChange}
									className="form-input"
									placeholder="Enter your name"
								/>
							</div>

							<div className="form-group">
								<label className="form-label">Email</label>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleInputChange}
									className="form-input"
									placeholder="Enter your email"
								/>
							</div>

							<div className="form-group">
								<label className="form-label">Subject</label>
								<input
									type="text"
									name="subject"
									value={formData.subject}
									onChange={handleInputChange}
									className="form-input"
									placeholder="Enter subject"
								/>
							</div>

							<div className="form-group">
								<label className="form-label">Message</label>
								<textarea
									name="message"
									rows="5"
									value={formData.message}
									onChange={handleInputChange}
									className="form-textarea"
									placeholder="Enter your message"
								></textarea>
							</div>

							<button onClick={handleSubmit} className="submit-button">
								<span>Send Now</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
