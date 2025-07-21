import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Awareness from "./Pages/Awareness";
import GetInvolved from "./Pages/GetInvolved";
import Support from "./Pages/Support";
import NotFound from "./Pages/NotFound";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/AboutUs" element={<AboutUs />} />
				<Route path="/Awareness" element={<Awareness />} />
				<Route path="/Get-Involved" element={<GetInvolved />} />
				<Route path="/Support" element={<Support />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
