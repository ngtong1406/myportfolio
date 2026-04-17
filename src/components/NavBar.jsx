import { useEffect, useState } from "react";

const NavBar = ({ setContactPopupShown }) => {
	const [activeSection, setActiveSection] = useState("homePage");
	const [isVisible, setVisible] = useState(false);

	const openContactPopupWindowOnClick = () => {
		setContactPopupShown(true);
	};

	useEffect(() => {
		const onWindowScroll = () => {
			setVisible(window.scrollY > 0);
		};

		window.addEventListener("scroll", onWindowScroll);

		return () => {
			window.removeEventListener("scroll", onWindowScroll);
		};
	}, []);

	useEffect(() => {
		const sections = document.querySelectorAll("section[id]");

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.3 },
		);

		sections.forEach((section) => observer.observe(section));

		return () => observer.disconnect();
	}, []);

	return (
		<nav
			className={
				`fixed top-0 w-full h-25 z-50 flex justify-between px-20 items-center backdrop-blur-2xl duration-100 border-b` +
				` ${isVisible ? "border-black/10 shadow-2xl/5" : "border-transparent"}`
			}
		>
			<p className="branding-logo">TOBY.</p>
			<ul className="h-full flex justify-evenly gap-x-14 text-[1rem] items-center text-center tracking-wide text-black/50">
				<li
					className={
						activeSection === "homePage"
							? "underline underline-offset-3 text-black"
							: "hover:text-black"
					}
				>
					<a href="#homePage">Home</a>
				</li>
				<li
					className={
						activeSection === "backgroundPage"
							? "underline underline-offset-3 text-black"
							: "hover:text-black"
					}
				>
					<a href="#backgroundPage">Background</a>
				</li>
				<li
					className={
						activeSection === "projectsPage"
							? "underline underline-offset-3 text-black"
							: "hover:text-black"
					}
				>
					<a href="#projectsPage">Projects</a>
				</li>
				<li
					className={
						activeSection === "resumePage"
							? "underline underline-offset-3 text-black"
							: "hover:text-black"
					}
				>
					<a href="#resumePage">Resumé</a>
				</li>
			</ul>
			<button
				className="inline-flex items-center gap-2 text-white text-[1rem] py-2 px-5 bg-black duration-100 hover:bg-gray-700 hover:underline hover:underline-offset-2 active:bg-gray-800 hover:cursor-pointer"
				onClick={openContactPopupWindowOnClick}
			>
				<span>Contact</span>
				<svg
					className="w-5 h-5 shrink-0"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>
		</nav>
	);
};

export default NavBar;
