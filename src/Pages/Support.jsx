import { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import "../Styles/support.css";
import Dialog from "../Components/Dialog"; // adjust path if needed

export default function Support() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [modal, setModal] = useState({
		visible: false,
		message: "",
		type: "info",
	});

	const handleInputChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const validateEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (
			!formData.name ||
			!formData.email ||
			!formData.subject ||
			!formData.message
		) {
			setModal({
				visible: true,
				message: "Please fill out all fields before sending.",
				type: "error",
			});
			return;
		}

		if (!validateEmail(formData.email)) {
			setModal({
				visible: true,
				message: "Please enter a valid email address.",
				type: "error",
			});
			return;
		}

		setModal({ visible: true, message: "Sending...", type: "info" });

		try {
			const response = await fetch("http://localhost:5000/send-email", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (response.ok) {
				setModal({
					visible: true,
					message: "Message sent successfully!",
					type: "success",
				});
				setFormData({ name: "", email: "", subject: "", message: "" });
			} else {
				setModal({
					visible: true,
					message: "Error sending message: " + data.error,
					type: "error",
				});
			}
		} catch (error) {
			console.error("Error:", error);
			setModal({
				visible: true,
				message: "Error sending message. Please try again later.",
				type: "error",
			});
		}
	};

	return (
		<div className="contact-page">
			{/* Support Section */}
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
							<div className="contact-card">
								<div className="contact-icon">
									<FaPhone className="icon" />
								</div>
								<h4 className="contact-title">Phone</h4>
								<p className="contact-detail"> 011 717 4567</p>
							</div>

							<div className="contact-card">
								<div className="contact-icon">
									<FaEnvelope className="icon" />
								</div>
								<h4 className="contact-title">Email</h4>
								<p className="contact-detail">clinic.sppa@wits.ac.za</p>
							</div>

							<div className="contact-card">
								<div className="contact-icon">
									<FiMapPin className="icon" />
								</div>
								<h4 className="contact-title">Our Address</h4>
								<p className="contact-detail">
									First Floor, Office Number - U133
									<br />
									Umthombo Building, East Campus
									<br />
									University of the Witwatersrand
									<br />
									Braamfontein Campus
								</p>
							</div>
						</div>

						{/* Map */}
						<div className="map-container">
							<a
								href="https://www.google.com/maps/dir/?api=1&destination=Umthombo+Building+East+Campus+University+of+the+Witwatersrand+Braamfontein"
								target="_blank"
								rel="noopener noreferrer"
								style={{ display: "block", position: "relative" }}
							>
								<iframe
									title="Umthombo Building - Wits University"
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.9!2d28.030500!3d-26.189500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDExJzIyLjIiUyAyOMKwMDEnNDkuOCJF!5e0!3m2!1sen!2sza!4v1729782334000!5m2!1sen!2sza"
									width="100%"
									height="250"
									style={{
										border: 0,
										borderRadius: "10px",
										pointerEvents: "none",
									}}
									allowFullScreen=""
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
								></iframe>
							</a>
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
							<p className="required-note">
								Fields marked with <span className="asterisk">*</span> are
								required
							</p>
						</div>

						<div className="contact-form">
							<div className="form-group">
								<label className="form-label">
									Name <span className="required-indicator">*</span>
								</label>
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleInputChange}
									className="form-input"
									placeholder="Enter your name"
									required
								/>
							</div>

							<div className="form-group">
								<label className="form-label">
									Email <span className="required-indicator">*</span>
								</label>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleInputChange}
									className="form-input"
									placeholder="Enter your email"
									required
								/>
							</div>

							<div className="form-group">
								<label className="form-label">
									Subject <span className="required-indicator">*</span>
								</label>
								<input
									type="text"
									name="subject"
									value={formData.subject}
									onChange={handleInputChange}
									className="form-input"
									placeholder="Enter subject"
									required
								/>
							</div>

							<div className="form-group">
								<label className="form-label">
									Message <span className="required-indicator">*</span>
								</label>
								<textarea
									name="message"
									rows="5"
									value={formData.message}
									onChange={handleInputChange}
									className="form-textarea"
									placeholder="Enter your message"
									required
								></textarea>
							</div>

							<button
								onClick={handleSubmit}
								className="submit-button"
							>
								<span>Send Now</span>
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Dialog */}
			{modal.visible && (
				<Dialog
					message={modal.message}
					type={modal.type}
					onClose={() => setModal({ ...modal, visible: false })}
				/>
			)}
		</div>
	);
}
