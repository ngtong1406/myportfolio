import keepInTouch from "../assets/photos/keep_in_touch.jpg";

const ContactPage = ({ contactPopupShown, setContactPopupShown }) => {
	const closeWindowOnClick = () => {
		setContactPopupShown(false);
	};

	return (
		<div
			style={{ display: contactPopupShown ? "block" : "none" }}
			className="fixed top-0 w-screen h-screen bg-black/50 backdrop-blur-xs duration-100 z-99 "
		>
			<div
				className={
					"relative w-full h-full flex flex-col items-center justify-center " +
					(contactPopupShown ? "fade-in" : "")
				}
			>
				<div className="lg:grid lg:grid-cols-2 max-md:grid-cols-1 w-3/4 h-4/5 bg-white border border-black shadow-md/30">
					<form
						className="w-full h-full p-7 space-y-2 overflow-y-scroll overscroll-y-contain"
						action="https://formspree.io/f/xojyddwg"
						method="POST"
					>
						<h2>Let's get in touch!</h2>
						<p className="font-inria-serif">
							Connect with me by sending your questions, comments,
							or feedback via the form below.
						</p>
						<hr className="my-4 border border-gray-100" />

						{/** NAME INPUT */}
						<div className="flex flex-row flex-wrap gap-3 items-center justify-between font-inria-serif">
							<div className="flex flex-col grow gap-2">
								<label htmlFor="firstNameInput">
									First Name
								</label>
								<input
									id="firstNameInput"
									name="firstName"
									className="py-1.5 px-4 border border-gray-200 focus-within:outline-0 focus-within:border-gray-600"
									type="text"
									placeholder="John"
									required
								/>
							</div>
							<div className="flex flex-col grow gap-2">
								<label htmlFor="secondNameInput">
									Second Name
								</label>
								<input
									id="secondNameInput"
									name="secondName"
									className="py-1.5 px-4 border border-gray-200 focus-within:outline-0 focus-within:border-gray-600"
									type="text"
									placeholder="Doe"
									required
								/>
							</div>
						</div>

						{/** EMAIL INPUT */}
						<div className="flex flex-col gap-2 font-inria-serif">
							<label htmlFor="emailInput">Email</label>
							<input
								id="emailInput"
								name="email"
								className="py-1.5 px-4 border border-gray-200 focus-within:outline-0 focus-within:border-gray-600"
								type="email"
								placeholder="john.doe@mail.com"
								required
							/>
						</div>

						{/** MESSAGE INPUT */}
						<div className="flex flex-col gap-2 font-inria-serif">
							<label htmlFor="messageInput">Message</label>
							<textarea
								id="messageInput"
								name="message"
								style={{ resize: "none" }}
								className="py-1.5 px-4 border border-gray-200 focus-within:outline-0 focus-within:border-gray-600"
								rows={5}
								placeholder="Type something..."
								required
							></textarea>
						</div>

						{/** SUBMIT BUTTON */}
						<button
							className="flex flex-row gap-2 items-center justify-center w-full my-4 py-1.5 px-5 bg-black text-white duration-100 hover:cursor-pointer hover:bg-gray-700 active:bg-gray-800 active:translate-y-0.5 font-inria-serif"
							type="submit"
						>
							Send now
							<svg
								className="w-4 h-4 shrink-0"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 640 640"
							>
								<path
									fill="currentColor"
									d="M568.4 37.7C578.2 34.2 589 36.7 596.4 44C603.8 51.3 606.2 62.2 602.7 72L424.7 568.9C419.7 582.8 406.6 592 391.9 592C377.7 592 364.9 583.4 359.6 570.3L295.4 412.3C290.9 401.3 292.9 388.7 300.6 379.7L395.1 267.3C400.2 261.2 399.8 252.3 394.2 246.7C388.6 241.1 379.6 240.7 373.6 245.8L261.2 340.1C252.1 347.7 239.6 349.7 228.6 345.3L70.1 280.8C57 275.5 48.4 262.7 48.4 248.5C48.4 233.8 57.6 220.7 71.5 215.7L568.4 37.7z"
								/>
							</svg>
						</button>
						<div className="my-4 flex items-center">
							<hr className="grow border-t border-gray-200" />
							<span className="px-3 text-gray-500 font-inria-serif">
								or find me via
							</span>
							<hr className="grow border-t border-gray-200" />
						</div>

						{/** EXTERNAL LINKS */}
						<div className="flex flex-wrap items-center gap-2 justify-between max-md:justify-center">
							{/** LINKEDIN LINK */}
							<a
								className="inline-flex items-center gap-2 py-1.5 px-5 text-[#0a66c2] border border-[#0a66c2] hover:text-white hover:bg-[#0a66c2] hover:underline hover:underline-offset-2 duration-50"
								href="https://www.linkedin.com/in/tobytran/"
								target="_blank"
								draggable={false}
							>
								<span>LinkedIn</span>
								<svg
									className="w-5 h-5 shrink-0"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 448 512"
								>
									<path
										fill="currentColor"
										d="M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</a>

							{/** INSTAGRAM LINK */}
							<a
								className="inline-flex items-center gap-1 py-1.5 px-5 text-[#e1306c] border border-[#e1306c] hover:text-white hover:bg-[#e1306c] hover:underline hover:underline-offset-2 duration-50"
								href="https://www.instagram.com/knchrls/"
								target="_blank"
								draggable={false}
							>
								<span>Instagram</span>
								<svg
									className="w-5 h-5 shrink-0"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 640 640"
								>
									<path
										fill="currentColor"
										d="M290.4 275.7C274 286 264.5 304.5 265.5 323.8C266.6 343.2 278.2 360.4 295.6 368.9C313.1 377.3 333.8 375.5 349.6 364.3C366 354 375.5 335.5 374.5 316.2C373.4 296.8 361.8 279.6 344.4 271.1C326.9 262.7 306.2 264.5 290.4 275.7zM432.7 207.3C427.5 202.1 421.2 198 414.3 195.3C396.2 188.2 356.7 188.5 331.2 188.8C327.1 188.8 323.3 188.9 320 188.9C316.7 188.9 312.8 188.9 308.6 188.8C283.1 188.5 243.8 188.1 225.7 195.3C218.8 198 212.6 202.1 207.3 207.3C202 212.5 198 218.8 195.3 225.7C188.2 243.8 188.6 283.4 188.8 308.9C188.8 313 188.9 316.8 188.9 320C188.9 323.2 188.9 327 188.8 331.1C188.6 356.6 188.2 396.2 195.3 414.3C198 421.2 202.1 427.4 207.3 432.7C212.5 438 218.8 442 225.7 444.7C243.8 451.8 283.3 451.5 308.8 451.2C312.9 451.2 316.7 451.1 320 451.1C323.3 451.1 327.2 451.1 331.4 451.2C356.9 451.5 396.2 451.9 414.3 444.7C421.2 442 427.4 437.9 432.7 432.7C438 427.5 442 421.2 444.7 414.3C451.9 396.3 451.5 356.9 451.2 331.3C451.2 327.1 451.1 323.2 451.1 319.9C451.1 316.6 451.1 312.8 451.2 308.5C451.5 283 451.9 243.6 444.7 225.5C442 218.6 437.9 212.4 432.7 207.1L432.7 207.3zM365.6 251.8C383.7 263.9 396.2 282.7 400.5 304C404.8 325.3 400.3 347.5 388.2 365.6C382.2 374.6 374.5 382.2 365.6 388.2C356.7 394.2 346.6 398.3 336 400.4C314.7 404.6 292.5 400.2 274.4 388.1C256.3 376 243.8 357.2 239.5 335.9C235.2 314.6 239.7 292.4 251.7 274.3C263.7 256.2 282.6 243.7 303.9 239.4C325.2 235.1 347.4 239.6 365.5 251.6L365.6 251.6zM394.8 250.5C391.7 248.4 389.2 245.4 387.7 241.9C386.2 238.4 385.9 234.6 386.6 230.8C387.3 227 389.2 223.7 391.8 221C394.4 218.3 397.9 216.5 401.6 215.8C405.3 215.1 409.2 215.4 412.7 216.9C416.2 218.4 419.2 220.8 421.3 223.9C423.4 227 424.5 230.7 424.5 234.5C424.5 237 424 239.5 423.1 241.8C422.2 244.1 420.7 246.2 419 248C417.3 249.8 415.1 251.2 412.8 252.2C410.5 253.2 408 253.7 405.5 253.7C401.7 253.7 398 252.6 394.9 250.5L394.8 250.5zM544 160C544 124.7 515.3 96 480 96L160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160zM453 453C434.3 471.7 411.6 477.6 386 478.9C359.6 480.4 280.4 480.4 254 478.9C228.4 477.6 205.7 471.7 187 453C168.3 434.3 162.4 411.6 161.2 386C159.7 359.6 159.7 280.4 161.2 254C162.5 228.4 168.3 205.7 187 187C205.7 168.3 228.5 162.4 254 161.2C280.4 159.7 359.6 159.7 386 161.2C411.6 162.5 434.3 168.3 453 187C471.7 205.7 477.6 228.4 478.8 254C480.3 280.3 480.3 359.4 478.8 385.9C477.5 411.5 471.7 434.2 453 452.9L453 453z"
									/>
								</svg>
							</a>

							{/** WHATSAPP LINK */}
							<a
								className="inline-flex items-center gap-2 py-1.5 px-5 text-[#25d366] border border-[#25d366] hover:text-white hover:bg-[#25d366] hover:underline hover:underline-offset-2 duration-50"
								href="https://api.whatsapp.com/send/?phone=61411739097&text&type=phone_number&app_absent=0"
								target="_blank"
								draggable={false}
							>
								<span>WhatsApp</span>
								<svg
									className="w-5 h-5 shrink-0"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 640 640"
								>
									<path
										fill="currentColor"
										d="M188.1 318.6C188.1 343.5 195.1 367.8 208.3 388.7L211.4 393.7L198.1 442.3L248 429.2L252.8 432.1C273 444.1 296.2 450.5 319.9 450.5L320 450.5C392.6 450.5 453.3 391.4 453.3 318.7C453.3 283.5 438.1 250.4 413.2 225.5C388.2 200.5 355.2 186.8 320 186.8C247.3 186.8 188.2 245.9 188.1 318.6zM370.8 394C358.2 395.9 348.4 394.9 323.3 384.1C286.5 368.2 261.5 332.6 256.4 325.4C256 324.8 255.7 324.5 255.6 324.3C253.6 321.7 239.4 302.8 239.4 283.3C239.4 264.9 248.4 255.4 252.6 251C252.9 250.7 253.1 250.5 253.3 250.2C256.9 246.2 261.2 245.2 263.9 245.2C266.5 245.2 269.2 245.2 271.5 245.3L272.3 245.3C274.6 245.3 277.5 245.3 280.4 252.1C281.6 255 283.4 259.4 285.3 263.9C288.6 271.9 292 280.2 292.6 281.5C293.6 283.5 294.3 285.8 292.9 288.4C289.5 295.2 286 298.8 283.6 301.4C280.5 304.6 279.1 306.1 281.3 310C296.6 336.3 311.9 345.4 335.2 357.1C339.2 359.1 341.5 358.8 343.8 356.1C346.1 353.5 353.7 344.5 356.3 340.6C358.9 336.6 361.6 337.3 365.2 338.6C368.8 339.9 388.3 349.5 392.3 351.5C393.1 351.9 393.8 352.2 394.4 352.5C397.2 353.9 399.1 354.8 399.9 356.1C400.8 358 400.8 366 397.5 375.2C394.2 384.5 378.4 392.9 370.8 394zM544 160C544 124.7 515.3 96 480 96L160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160zM244.1 457.9L160 480L182.5 397.8C168.6 373.8 161.3 346.5 161.3 318.5C161.4 231.1 232.5 160 319.9 160C362.3 160 402.1 176.5 432.1 206.5C462 236.5 480 276.3 480 318.7C480 406.1 407.3 477.2 319.9 477.2C293.3 477.2 267.2 470.5 244.1 457.9z"
									/>
								</svg>
							</a>
						</div>
					</form>
					<div className="lg:block max-lg:hidden w-full h-full border-l border-black">
						<img
							className="w-full h-full object-cover"
							src={keepInTouch}
							alt="Decorative banner"
							draggable={false}
						/>
					</div>
				</div>
				<div className="absolute top-5 right-5">
					<button
						className="flex items-center justify-center w-20 h-20 max-md:w-15 max-md:h-15 text-gray-200 duration-100 hover:text-white hover:cursor-pointer active:translate-y-0.5 active:text-gray-300"
						title="Close the window"
						type="button"
						onClick={closeWindowOnClick}
					>
						<svg
							className="w-full h-full"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M18 6L6 18M6 6L18 18"
								stroke="currentColor"
								stroke-width="1"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
