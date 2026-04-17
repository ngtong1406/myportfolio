import tobyPhoto from "../assets/photos/IMG_3523.JPG";
import tobyResume from "../assets/files/Nguyen_Tong_Tran_Resume.pdf";
import { useEffect, useState } from "react";

const HomePage = () => {
	const [isHidden, setHidden] = useState(false);

	useEffect(() => {
		const onWindowScroll = () => {
			setHidden(window.scrollY > 0);
		};

		window.addEventListener("scroll", onWindowScroll);

		return () => {
			window.removeEventListener("scroll", onWindowScroll);
		};
	}, []);

	return (
		<>
			<section
				id="homePage"
				className="w-full h-full min-h-screen flex flex-col items-center justify-center space-y-8"
			>
				<img
					src={tobyPhoto}
					alt="Toby's portfolio photo"
					className="w-55 h-55 rounded-full object-cover object-[25%_50%] border border-black"
					draggable={false}
				/>
				<div className="w-max h-auto flex flex-col items-center gap-2">
					<p className="welcome-text">Hi there! Welcome to...</p>
					<h1>toby tran's portfolio</h1>
				</div>
				<div className="w-max h-auto flex flex-row items-center justify-evenly gap-2 text-[1rem]">
					<a
						className="inline-flex items-center gap-2 text-white py-1.5 px-5 bg-black border border-transparent hover:bg-gray-700 hover:underline hover:underline-offset-2 duration-50"
						href="https://www.linkedin.com/in/tobytran/"
						target="_blank"
						draggable={false}
					>
						<span>My LinkedIn</span>
						<svg
							className="w-4 h-4 shrink-0 bg-white"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
						>
							<path
								d="M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</a>
					<a
						className="inline-flex items-center gap-2 text-black py-1.5 px-5 border border-black hover:text-white hover:bg-black hover:border-transparent hover:underline hover:underline-offset-2 duration-50"
						href={tobyResume}
						download={true}
						draggable={false}
					>
						<span>Get my resumé</span>
						<svg
							className="w-4 h-4 shrink-0"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M21 15V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V15M17 10L12 15M12 15L7 10M12 15V3"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</a>
				</div>
			</section>
			<div
				className="w-full absolute bottom-15 text-center duration-150 animate-bounce select-none"
				style={{ opacity: isHidden ? 0 : 100 }}
			>
				<div className="inline-flex items-center gap-2 py-2 px-5 scroll-down-text">
					<span>Scroll down</span>
					<svg
						className="w-5 h-5 shrink-0"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M7 13L12 18L17 13M7 6L12 11L17 6"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
			</div>
		</>
	);
};

export default HomePage;
