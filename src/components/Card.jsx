import React from "react";

const Card = ({ name, progress, d, ...props }) => {
	return (
		<div id="cardFadeIn" className="opacity-0 card" {...props}>
			<svg
				className="card-icon"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 640 640"
			>
				<path d={d} />
			</svg>
			<p>{name}</p>
			<div className={"card-progress progress-" + progress}></div>
		</div>
	);
};

export default Card;
