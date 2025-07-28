import { useNavigate } from "react-router";
import "../Styles/notFound.css";

function NotFound() {
	const navigate = useNavigate();
	const handleGoHome = () => {
		navigate("/");
	};

	return (
		<div className="not-found-container">
			<div className="not-found-content">
				{/* 404 Number */}
				<div className="error-code">404</div>

				{/* Main Heading */}
				<h2 className="error-title">Page Not Found</h2>

				{/* Subtitle */}
				<p className="error-description">
					The page you are looking for doesn't exist or has been moved
				</p>

				{/* Go Home Button */}
				<button onClick={handleGoHome} className="home-button">
					Go Home
				</button>
			</div>
		</div>
	);
}

export default NotFound;
