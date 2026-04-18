import React from "react";
import project1Photo from "../assets/photos/mission_planner.jpg";
import project2Photo from "../assets/photos/sapol_logo.svg";
import project3Photo from "../assets/photos/Big_Things_Postcard.jpg";

const ProjectsPage = () => {
	return (
		<section
			id="projectsPage"
			className="w-full h-full min-h-screen app-bg-gradient-pj flex flex-col gap-15 p-10"
		>
			<h1>my projects</h1>
			<div className="flex flex-row flex-wrap items-center justify-center gap-5 font-inria-serif tracking-wide">
				{/** PROJECT 1 */}
				<div className="project">
					<div className="project-img">
						<img
							src={project1Photo}
							alt="Paladin Space's debris-collecting robot"
							draggable={false}
						/>
					</div>
					<div className="project-content">
						<div className="project-title title-with-star">
							<span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 640 640"
								>
									<path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
								</svg>
							</span>
							Spatial Mission Planning Tool
						</div>
						<p className="project-text">
							A mission-planning desktop application that
							optimises space debris collection. It leverages
							predictive modeling and data visualisation to
							identify <i>high-threat</i> objects, helping Paladin
							Space<sup>(1)</sup> significantly reduce mission
							fuel costs through enhanced situational awareness.
						</p>
						<p className="project-header">Tech stack</p>
						<p className="project-text">
							FastAPI, PyWebView, ReactJS, TailwindCSS, CesiumJS,
							DBScan, Nuitka
						</p>
						<p>
							<sup>(1)</sup> Visit our team's client{" "}
							<a
								className="project-link"
								href="https://www.paladinspace.com"
								target="_blank"
							>
								Paladin Space
							</a>
						</p>
					</div>
					<div className="project-date">November, 2025</div>
				</div>

				{/** PROJECT 2 */}
				<div className="project">
					<div className="project-img">
						<img
							src={project2Photo}
							alt="SA Police Logo"
							draggable={false}
						/>
					</div>
					<div className="project-content">
						<div className="project-title title-with-star">
							<span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 640 640"
								>
									<path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
								</svg>
							</span>
							SA Expiation Dashboard
						</div>
						<p className="project-text">
							A data-driven web application designed to identify
							optimal Mobile Phone Detection Camera (MPDC)
							locations by analysing South Australian expiation
							datasets. It provides actionable insights via
							interactive visualisations and advanced filtering,
							assisting in decision-making for road safety
							resource allocation.
						</p>
						<p className="project-header">Tech stack</p>
						<p className="project-text">
							ASP.NET Core Web API, LINQ, ReactJS, Bootstrap,
							D3.js
						</p>
					</div>
					<div className="project-date">November, 2024</div>
					<a
						className="project-source-code"
						href="https://github.com/ngtong1406/sa-expiation-dashboard"
						target="_blank"
						draggable={false}
					>
						<p>Source code</p>
					</a>
				</div>

				{/** PROJECT 3 */}
				<div className="project">
					<div className="project-img">
						<img
							src={project3Photo}
							alt="Big Things in Australia"
							draggable={false}
						/>
					</div>
					<div className="project-content">
						<div className="project-title">
							Big Thing Finder (iOS)
						</div>
						<p className="project-text">
							A SwiftUI mobile application that allows Big Thing
							fans to identify any Big Things in their region,
							view and submit ratings, and track which Big Things
							they have visited. Available only in Australia and
							on iOS.
						</p>
						<p className="project-header">Tech stack</p>
						<p className="project-text">
							SwiftUI, Persistent Storage
						</p>
					</div>
					<div className="project-date">November, 2024</div>
					<a
						className="project-source-code"
						href="https://github.com/ngtong1406/big-thing-finder"
						target="_blank"
						draggable={false}
					>
						<p>Source code</p>
					</a>
				</div>
			</div>

			<div className="h-fit flex justify-center">
				<a
					className="w-fit flex flex-row items-center justify-center gap-2 font-inria-serif duration-100 max-md:underline max-md:underline-offset-3 hover:underline hover:underline-offset-3 active:text-[0.9rem]"
					href="https://github.com/ngtong1406"
					target="_blank"
				>
					<span>
						<svg
							className="w-6 h-6 shrink-0"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 640 640"
						>
							<path d="M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72zM169.2 416.9C167.9 417.9 168.2 420.2 169.9 422.1C171.5 423.7 173.8 424.4 175.1 423.1C176.4 422.1 176.1 419.8 174.4 417.9C172.8 416.3 170.5 415.6 169.2 416.9zM158.4 408.8C157.7 410.1 158.7 411.7 160.7 412.7C162.3 413.7 164.3 413.4 165 412C165.7 410.7 164.7 409.1 162.7 408.1C160.7 407.5 159.1 407.8 158.4 408.8zM190.8 444.4C189.2 445.7 189.8 448.7 192.1 450.6C194.4 452.9 197.3 453.2 198.6 451.6C199.9 450.3 199.3 447.3 197.3 445.4C195.1 443.1 192.1 442.8 190.8 444.4zM179.4 429.7C177.8 430.7 177.8 433.3 179.4 435.6C181 437.9 183.7 438.9 185 437.9C186.6 436.6 186.6 434 185 431.7C183.6 429.4 181 428.4 179.4 429.7z" />
						</svg>
					</span>
					<p className="external">More on GitHub</p>
				</a>
			</div>
		</section>
	);
};

export default ProjectsPage;
