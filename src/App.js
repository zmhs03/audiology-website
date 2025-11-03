import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Awareness from "./Pages/Awareness";
import GetInvolved from "./Pages/GetInvolved";
import Gallery from "./Pages/Gallery";
import Prevention from "./Pages/Prevention";
import HealthGuide from "./Pages/Guides/HealthGuide";
import DecibelGuide from "./Pages/Guides/DecibelGuide";
import EventsGuide from "./Pages/Guides/EventsGuide";
import EverydayGuide from "./Pages/Guides/EverydayGuide";
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
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/AboutUs"
					element={<AboutUs />}
				/>
				<Route
					path="/Awareness"
					element={<Awareness />}
				/>
				<Route
					path="/Gallery"
					element={<Gallery />}
				/>
				<Route
					path="/Prevention"
					element={<Prevention />}
				/>
				<Route
					path="/guide/hearing-health"
					element={<HealthGuide />}
				/>
				<Route
					path="/guide/event-safety"
					element={<EventsGuide />}
				/>
				<Route
					path="/guide/visualising-decibels"
					element={<DecibelGuide />}
				/>
				<Route
					path="/guide/everyday-noises"
					element={<EverydayGuide />}
				/>
				<Route
					path="/Resources"
					element={<Resources />}
				/>
				<Route
					path="/Get-Involved"
					element={<GetInvolved />}
				/>
				<Route
					path="/Support"
					element={<Support />}
				/>
				<Route
					path="*"
					element={<NotFound />}
				/>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
