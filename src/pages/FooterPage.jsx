import React from "react";

const FooterPage = () => {
	return (
		<section
			id="resumePage"
			className="w-full h-max app-bg-gradient-ft flex flex-col gap-1 pt-10 px-10 text-center"
		>
			<p className="branding-logo">TOBY.</p>
			<div className="inline-flex flex-wrap items-center justify-center gap-5 font-inria-serif">
				<div className="flex max-md:basis-full items-center justify-center gap-2">
					<svg
						className="w-6 h-6 shrink-0"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 640"
					>
						<path
							fill="currentColor"
							d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"
						/>
					</svg>
					<a
						className="underline underline-offset-3 external hover:text-gray-700"
						href="https://maps.app.goo.gl/wrtjDYyQtcuKTS7e7"
						target="_blank"
						draggable={false}
					>
						Adelaide, SA
					</a>
				</div>
				<div className="flex max-md:basis-full items-center justify-center gap-2">
					<svg
						className="w-6 h-6 shrink-0"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 640"
					>
						<path
							fill="currentColor"
							d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"
						/>
					</svg>
					<a
						className="underline underline-offset-3 hover:text-gray-700"
						href="mailto:ngtong1406@gmail.com"
						target="_blank"
						draggable={false}
					>
						ngtong1406@gmail.com
					</a>
				</div>
				<div className="flex max-md:basis-full items-center justify-center gap-2">
					<svg
						className="w-6 h-6 shrink-0"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 640"
					>
						<path
							fill="currentColor"
							d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"
						/>
					</svg>
					<a
						className="underline underline-offset-3 hover:text-gray-700"
						href="tel:0411739097"
						target="_blank"
						draggable={false}
					>
						+61 411 739 097
					</a>
				</div>
			</div>
			<hr className="mt-15 border-t border-gray-300" />
			<div className="inline-flex flex-wrap justify-between max-md:justify-center items-center w-full h-20 max-md:my-5 text-start font-inria-serif">
				<p>&copy; 2026 Nguyen Tong Tran. All rights reserved.</p>
				<div className="w-fit flex justify-between items-center gap-8">
					<a
						className="underline underline-offset-3 external"
						href="https://github.com/ngtong1406"
						target="_blank"
						draggable={false}
					>
						GitHub
					</a>
					<a
						className="underline underline-offset-3 external"
						href="https://www.linkedin.com/in/tobytran/"
						target="_blank"
						draggable={false}
					>
						LinkedIn
					</a>
					<a
						className="underline underline-offset-3 external"
						href="https://www.instagram.com/knchrls/"
						target="_blank"
						draggable={false}
					>
						Instagram
					</a>
				</div>
			</div>
		</section>
	);
};

export default FooterPage;
