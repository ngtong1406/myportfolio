import { useState } from "react";
import resume from "../assets/files/Nguyen_Tong_Tran_Resume.pdf";

const ResumePage = () => {
	var resumeFileName = resume.split("/").pop();
	const queryIndex = resumeFileName.indexOf("?");
	resumeFileName =
		queryIndex >= 0
			? resumeFileName.substring(0, queryIndex)
			: resumeFileName;

	const [isRevealed, setIsRevealed] = useState(false);

	const toggleIsRevealed = () => {
		setIsRevealed((isRevealed) => !isRevealed);
	};

	return (
		<section
			id="resumePage"
			className="w-full h-max app-bg-gradient-rm flex flex-col gap-15 p-10"
		>
			<h1>my resumé</h1>
			<div className="flex flex-wrap items-center justify-center gap-3 max-sm:space-y-4 font-inria-serif">
				<div className="bg-white border border-black py-1.5 px-5">
					<div className="flex flex-row gap-2 items-center">
						<svg
							className="w-6 h-6 shrink-0"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 640 640"
						>
							<path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z" />
						</svg>
						<a
							className="underline underline-offset-3 hover:text-gray-600"
							href={resume}
							download={"Nguyen_Tong_Tran_Resume.pdf"}
						>
							{resumeFileName}
						</a>
					</div>
				</div>
				<a
					id="resumePreview"
					href="#resumePreview"
					className="scroll-mt-40 inline-flex items-center gap-2 text-white py-1.5 px-5 bg-black border border-transparent hover:bg-gray-700 hover:underline hover:underline-offset-3 hover:cursor-pointer focus-within:outline-0 duration-50"
					draggable={false}
					onClick={toggleIsRevealed}
				>
					<span>{isRevealed ? "Hide" : "Reveal"}</span>
					{!isRevealed ? (
						<svg
							className="w-4 h-4 shrink-0"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					) : (
						<svg
							className="w-4 h-4 shrink-0"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.7429 5.09232C11.1494 5.03223 11.5686 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7767C21.8518 11.9016 21.8517 12.0987 21.8231 12.2236C21.7849 12.3899 21.7164 12.4985 21.5792 12.7156C21.2793 13.1901 20.8222 13.8571 20.2165 14.5805M6.72432 6.71504C4.56225 8.1817 3.09445 10.2194 2.42111 11.2853C2.28428 11.5019 2.21587 11.6102 2.17774 11.7765C2.1491 11.9014 2.14909 12.0984 2.17771 12.2234C2.21583 12.3897 2.28393 12.4975 2.42013 12.7132C3.54554 14.4952 6.89541 19 12.0004 19C14.0588 19 15.8319 18.2676 17.2888 17.2766M3.00042 3L21.0004 21M9.8791 9.87868C9.3362 10.4216 9.00042 11.1716 9.00042 12C9.00042 13.6569 10.3436 15 12.0004 15C12.8288 15 13.5788 14.6642 14.1217 14.1213"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					)}
				</a>
			</div>
			{isRevealed && (
				<iframe
					className="w-full aspect-video object-fit border border-black/70 shadow-xl/10 duration-150"
					src={resume}
					title="Toby's Resume"
				></iframe>
			)}
		</section>
	);
};

export default ResumePage;
