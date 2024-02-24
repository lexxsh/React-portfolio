import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="My Experience">
			<Card
				icon={faBriefcase}
				title="My Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./inha.png"
								alt="Inha"
								className="work-image"
							/>
							<div className="work-title">Inha Univ</div>
							<div className="work-subtitle">정보통신공학과</div>
							<div className="work-duration">2020 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
