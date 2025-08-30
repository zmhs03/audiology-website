import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import HearingHealth from "./Pages/HearingHealth";
import WorldHearingDay from "./Pages/WorldHearingDay";
import Awareness from "./Pages/Awareness";
import GetInvolved from "./Pages/GetInvolved";
import Advocacy from "./Pages/Advocacy";
import Fundraising from "./Pages/Fundraising";
import Gallery from "./Pages/Gallery";
import Volunteer from "./Pages/Volunteer";
import Prevention from "./Pages/Prevention";
import Resources from "./Pages/Resources";
import Support from "./Pages/Support";
import NotFound from "./Pages/NotFound";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
	return (
		<BrowserRouter basename="/audiology-website">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/AboutUs" element={<AboutUs />} />
				<Route path="/Hearing-Health" element={<HearingHealth />} />
				<Route path="/World-Hearing-Day" element={<WorldHearingDay />} />
				<Route path="/Awareness" element={<Awareness />} />
				<Route path="/Gallery" element={<Gallery />} />
				<Route path="/Prevention" element={<Prevention />} />
				<Route path="/Resources" element={<Resources />} />
				<Route path="/Get-Involved" element={<GetInvolved />} />
				<Route path="/Fundraising" element={<Fundraising />} />
				<Route path="/Volunteer" element={<Volunteer />} />
				<Route path="/Advocacy" element={<Advocacy />} />
				<Route path="/Support" element={<Support />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
