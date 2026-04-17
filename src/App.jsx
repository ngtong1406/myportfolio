import { useState } from "react";
import NavBar from "./components/NavBar";
import BackgroundPage from "./pages/BackgroundPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";
import FooterPage from "./pages/FooterPage";

const App = () => {
	const [contactPopupShown, setContactPopupShown] = useState(false);

	return (
		<div className="h-full w-full app-bg-gradient">
			<NavBar setContactPopupShown={setContactPopupShown} />
			<HomePage />
			<BackgroundPage />
			<ProjectsPage />
			<ResumePage />
			<FooterPage />
			<ContactPage
				contactPopupShown={contactPopupShown}
				setContactPopupShown={setContactPopupShown}
			/>
		</div>
	);
};

export default App;
