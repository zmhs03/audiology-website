import React, { useState } from "react";
import { FaRegCopy, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Styles/donate.css";
import "../Styles/donatebtn.css";

const DonateButton = ({
	buttonText = "Donate",
	size = "medium",
	variant = "navbar",
}) => {
	const [showModal, setShowModal] = useState(false);

	const handleCopy = (text, label) => {
		navigator.clipboard.writeText(text);
		toast.success(`${label} copied to clipboard!`, {
			position: "top-center",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
		});
	};

	const buttonClass = `btn-primary btn--${size} ${
		variant === "drawer" ? "drawer-btn" : ""
	}`;

	return (
		<>
			<button
				className={buttonClass}
				onClick={() => setShowModal(true)}
			>
				{buttonText}
			</button>

			{showModal && (
				<div
					className="donate-modal-overlay"
					onClick={() => setShowModal(false)}
				>
					<div
						className="donate-modal"
						onClick={(e) => e.stopPropagation()}
					>
						{/* Close X */}
						<button
							className="modal-close-btn"
							onClick={() => setShowModal(false)}
						>
							<FaTimes />
						</button>

						<h2>Bank Details</h2>
						<ul className="donate-details">
							<li>
								<strong>Account Name:</strong> University of Witwatersrand
							</li>
							<li>
								<strong>Bank:</strong> First National Bank
							</li>
							<li className="copy-item">
								<strong>Account Number:</strong> 62150130575
								<FaRegCopy
									className="copy-icon"
									onClick={() =>
										handleCopy("62150130575", "Account Number")
									}
									title="Copy Account Number"
								/>
							</li>
							<li>
								<strong>Branch Code:</strong> 251905
							</li>
							<li className="copy-item">
								<strong>Reference:</strong> Audiology Donation
								<FaRegCopy
									className="copy-icon"
									onClick={() =>
										handleCopy("Audiology Donation", "Reference")
									}
									title="Copy Reference"
								/>
							</li>
						</ul>

						<p className="instructions">
							Please complete the transfer in your banking app using the
							reference shown above.
						</p>
					</div>
				</div>
			)}
		</>
	);
};

export default DonateButton;
