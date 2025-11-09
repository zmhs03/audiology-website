import { useEffect, useState } from "react";
import "../Styles/dialog.css";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function Dialog({
	message,
	onClose,
	type = "success",
	showLoading = true,
}) {
	const [loading, setLoading] = useState(showLoading);

	useEffect(() => {
		// Disable scrolling
		document.body.style.overflow = "hidden";

		let timer;
		if (loading) {
			// Show loading animation for 1 second
			timer = setTimeout(() => setLoading(false), 1000);
		}

		return () => {
			clearTimeout(timer);
			// Re-enable scrolling
			document.body.style.overflow = "unset";
		};
	}, [loading]);

	if (loading) {
		return (
			<div className="modal-dialog-overlay ">
				<span className="loader"></span>
			</div>
		);
	}

	return (
		<div className="modal-dialog-overlay">
			<div className={`modal-dialog-content ${type}`}>
				<div className="icon-circle">
					{type === "success" ? (
						<FaCheck className="icon" />
					) : (
						<IoClose className="icon" />
					)}
				</div>
				<h2>{type === "success" ? "Success!" : "Error!"}</h2>
				<p>{message}</p>
				<button
					className="modal-dialog-close"
					onClick={onClose}
				>
					Close
				</button>
			</div>
		</div>
	);
}
