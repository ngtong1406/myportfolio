import React from "react";

const TimelineItem = ({
	date,
	location,
	title,
	subtitle,
	listItems,
	isLast,
}) => {
	const listItemsMap = Object.entries(listItems);
	console.log(listItemsMap);

	return (
		<div className="flex gap-x-5 font-inria-serif">
			<div className="max-sm:hidden relative flex flex-col items-center">
				<div
					className={
						"z-10 w-4 h-4 rounded-full border-2 border-black shadow-sm " +
						(!isLast ? "bg-black" : "bg-white")
					}
				></div>

				<div className="absolute top-4 w-0.5 h-full bg-gray-300"></div>
			</div>

			<div
				className={
					"w-full flex flex-wrap " + (isLast ? "h-fit" : "pb-10")
				}
			>
				<div className="basis-2/5 max-sm:basis-full max-sm:flex max-sm:items-center max-sm:justify-between">
					<p className="italic font-bold">{date}</p>
					<p className="italic">{location}</p>
				</div>
				<hr className="max-sm:block max-sm:basis-full mt-1 mb-3  border-t border-gray-400" />
				<div className="basis-3/5 max-sm:basis-full">
					<p className={"font-bold " + (!subtitle && "mb-2")}>
						{title}
					</p>
					{subtitle && <p className="italic mb-2">{subtitle}</p>}
					{listItemsMap && (
						<ul className="ml-5 space-y-0.5 list-disc">
							{listItemsMap.map(([key, val]) => (
								<li key={key}>
									<b>{key}:</b>{" "}
									<span
										className={
											val.length > 40 ? "italic" : ""
										}
									>
										{val}
									</span>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</div>
	);
};

export default TimelineItem;
