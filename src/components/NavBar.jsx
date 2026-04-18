import { useEffect, useState } from "react";

const NavBar = ({ setContactPopupShown }) => {
	const [activeSection, setActiveSection] = useState("homePage");
	const [isScrolled, setIsScrolled] = useState(false);
	const [sideBarOpened, setSideBarOpened] = useState(false);

	const initialWidth = window.innerWidth;

	const openContactPopupWindowOnClick = () => {
		setContactPopupShown(true);
	};

	const toggleSideBarOnClick = () => {
		setSideBarOpened((sideBarOpened) => !sideBarOpened);
	};

	useEffect(() => {
		const onWindowScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", onWindowScroll);

		return () => {
			window.removeEventListener("scroll", onWindowScroll);
		};
	}, [initialWidth]);

	useEffect(() => {
		const sections = document.querySelectorAll("section[id]");
		const options = {
			root: null,
			rootMargin: "-50% 0px -50% 0px",
			threshold: 0,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveSection(entry.target.id);
				}
			});
		}, options);

		sections.forEach((section) => observer.observe(section));

		return () => observer.disconnect();
	}, []);

	return (
		<>
			<nav
				className={
					`fixed top-0 w-full h-25 z-50 flex justify-between px-10 items-center backdrop-blur-2xl duration-100 border-b` +
					` ${isScrolled ? "border-black/10 shadow-2xl/5" : "border-transparent"}`
				}
			>
				<a
					className="branding-logo duration-100 active:scale-95"
					href="#homePage"
				>
					TOBY.
				</a>
				<ul className="max-md:hidden h-full flex justify-evenly gap-x-14 text-[1rem] items-center text-center tracking-wide text-black/50">
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
					className="max-md:hidden inline-flex items-center gap-2 text-white text-[1rem] py-2 px-5 bg-black duration-100 hover:bg-gray-700 hover:underline hover:underline-offset-2 active:bg-gray-800 hover:cursor-pointer"
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
				<button
					className="w-7 h-7 md:hidden text-black/70 duration-150 hover:cursor-pointer active:scale-85"
					onClick={toggleSideBarOnClick}
				>
					<svg
						className="w-full h-full"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 640"
					>
						<path
							fill="currentColor"
							d="M64 160C64 142.3 78.3 128 96 128L480 128C497.7 128 512 142.3 512 160C512 177.7 497.7 192 480 192L96 192C78.3 192 64 177.7 64 160zM128 320C128 302.3 142.3 288 160 288L544 288C561.7 288 576 302.3 576 320C576 337.7 561.7 352 544 352L160 352C142.3 352 128 337.7 128 320zM512 480C512 497.7 497.7 512 480 512L96 512C78.3 512 64 497.7 64 480C64 462.3 78.3 448 96 448L480 448C497.7 448 512 462.3 512 480z"
						/>
					</svg>
				</button>
			</nav>

			{/** SIDE BAR MENU */}
			<div
				className={
					(sideBarOpened ? " block md:hidden" : "hidden") +
					" fixed top-0 w-screen h-screen grid grid-cols-2 z-99 bg-black/20 backdrop-blur-xs"
				}
			>
				<div
					className="h-full"
					onClick={() => setSideBarOpened(false)}
				></div>
				<div className="slide-in h-full p-7 border-l border-black/10 shadow-md/20 app-bg-gradient-sb font-inria-serif">
					<div className="w-full h-fit flex justify-end items-center">
						<button
							className="flex justify-end w-9 h-9 md:hidden text-black/70 duration-150 hover:cursor-pointer active:scale-85"
							onClick={toggleSideBarOnClick}
						>
							<svg
								className="w-full h-full"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill="currentColor"
									d="M18 6L6 18M6 6L18 18"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</button>
					</div>
					<hr className="my-7 border-t border-gray-200" />
					<ul className="w-full h-fit space-y-7">
						<li>
							<a
								className="duration-150 hover:text-2xl active:text-xl"
								href="#homePage"
								onClick={() => {
									setSideBarOpened(false);
								}}
							>
								Home
							</a>
						</li>
						<li>
							<a
								className="duration-150 hover:text-2xl active:text-xl"
								href="#backgroundPage"
								onClick={() => {
									setSideBarOpened(false);
								}}
							>
								Background
							</a>
						</li>
						<li>
							<a
								className="duration-150 hover:text-2xl active:text-xl"
								href="#projectsPage"
								onClick={() => {
									setSideBarOpened(false);
								}}
							>
								Projects
							</a>
						</li>
						<li>
							<a
								className="duration-150 hover:text-2xl active:text-xl"
								href="#resumePage"
								onClick={() => {
									setSideBarOpened(false);
								}}
							>
								Resumé
							</a>
						</li>
						<li>
							<button
								className="duration-150 hover:text-2xl active:text-xl hover:cursor-pointer"
								type="button"
								onClick={() => {
									setSideBarOpened(false);
									openContactPopupWindowOnClick();
								}}
							>
								Contact
							</button>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default NavBar;
