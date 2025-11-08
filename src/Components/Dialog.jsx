import { useEffect } from "react";
import "../Styles/dialog.css";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function Dialog({ message, onClose, type = "success" }) {
	useEffect(() => {
		// Disable scrolling when modal opens
		document.body.style.overflow = "hidden";

		// Re-enable scrolling when modal closes
		return () => {
			document.body.style.overflow = "unset";
		};
	}, []);

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
