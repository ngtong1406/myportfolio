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
					<svg
						id="svg"
						className="w-30 h-30"
						viewBox="180 200 140 90"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M304.262 207.375 C 296.854 214.271,293.741 221.111,293.184 231.713 C 292.928 236.600,293.160 240.560,293.737 241.137 C 295.101 242.501,301.270 235.148,304.964 227.756 C 308.373 220.934,310.245 212.839,309.810 206.802 L 309.500 202.500 304.262 207.375 M280.000 217.338 C 280.000 225.067,282.588 233.460,286.589 238.706 C 289.977 243.148,290.967 241.859,290.975 233.000 C 290.981 225.400,288.082 218.218,283.126 213.563 L 280.000 210.626 280.000 217.338 M305.247 236.706 C 304.008 236.945,301.308 238.788,299.247 240.802 L 295.500 244.465 298.337 244.807 C 301.550 245.195,310.708 241.085,313.496 238.004 C 315.283 236.030,315.252 236.002,311.405 236.136 C 309.257 236.211,306.486 236.468,305.247 236.706 M237.207 238.602 C 234.067 239.974,233.986 240.142,235.457 242.243 C 236.685 243.995,237.000 247.580,237.000 259.790 L 237.000 275.135 239.250 274.410 C 241.877 273.564,242.354 273.586,247.000 274.764 C 257.102 277.326,265.293 267.596,262.075 256.856 C 259.962 249.803,251.177 246.713,245.635 251.073 L 243.000 253.145 243.000 245.073 C 243.000 236.266,242.874 236.126,237.207 238.602 M184.637 240.223 C 183.727 243.620,183.876 248.000,184.901 248.000 C 185.397 248.000,186.732 246.425,187.867 244.500 C 189.506 241.723,190.559 241.000,192.966 241.000 L 196.000 241.000 196.000 255.878 C 196.000 267.882,195.710 270.996,194.500 272.000 C 191.795 274.245,192.912 275.000,198.941 275.000 C 205.199 275.000,206.962 274.043,204.489 271.991 C 203.292 270.998,203.000 267.833,203.000 255.878 L 203.000 241.000 205.510 241.000 C 207.902 241.000,209.147 241.992,212.410 246.500 C 213.777 248.389,213.896 248.400,214.557 246.694 C 214.942 245.700,214.845 243.450,214.342 241.694 L 213.428 238.500 199.337 238.223 C 185.415 237.950,185.240 237.974,184.637 240.223 M216.071 250.695 C 211.173 253.273,208.712 257.092,208.597 262.291 C 208.416 270.488,212.896 275.003,221.200 274.996 C 229.797 274.989,235.817 268.124,234.677 259.629 C 233.547 251.204,223.903 246.574,216.071 250.695 M260.513 249.979 C 260.181 250.517,260.815 252.204,261.922 253.729 C 264.701 257.553,271.000 274.283,271.000 277.840 C 271.000 282.193,268.670 283.670,266.005 281.005 C 263.259 278.259,260.500 278.752,260.500 281.990 C 260.500 284.918,264.270 286.651,268.391 285.617 C 271.860 284.746,273.994 281.120,279.642 266.500 C 282.191 259.900,284.969 253.702,285.815 252.726 C 287.744 250.502,286.241 248.688,282.865 249.165 C 280.878 249.446,280.547 249.997,280.795 252.608 C 280.958 254.330,279.813 258.933,278.228 262.927 L 275.367 270.138 272.161 261.948 C 269.746 255.779,269.229 253.429,270.064 252.423 C 270.673 251.689,270.882 250.618,270.527 250.044 C 269.711 248.723,261.323 248.668,260.513 249.979 M225.040 254.040 C 229.140 258.140,230.277 265.731,227.405 269.832 C 225.135 273.073,219.452 272.514,216.673 268.775 C 213.918 265.070,213.771 257.019,216.405 254.106 C 218.817 251.439,222.411 251.411,225.040 254.040 M252.455 253.621 C 254.884 254.553,257.000 259.384,257.000 263.996 C 257.000 267.010,256.352 268.739,254.545 270.545 C 251.348 273.743,249.488 273.642,245.923 270.077 C 243.495 267.649,243.000 266.332,243.000 262.299 C 243.000 254.693,246.611 251.379,252.455 253.621 "
							stroke="none"
							fill="black"
							fillRule="evenodd"
						/>
					</svg>
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
