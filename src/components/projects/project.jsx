// Project.js

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, linkOptions, link } = props;

	return (
		<React.Fragment>
			<div className="project ">
				{title === "Project 4" ? (
					<div className="project-container">
						<div className="project-logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>
							<div className="additional-links">
								{linkOptions.map((option, index) => (
									<Link
										key={index}
										to={option.url}
										target="_blank"
									>
										{option.text}
									</Link>
								))}
							</div>
						</div>
					</div>
				) : (
					<Link to={link} target="_blank">
						<div className="project-container">
							<div className="project-logo">
								<img src={logo} alt="logo" />
							</div>
							<div className="project-title">{title}</div>
							<div className="project-description">
								{description}
							</div>
							<div className="project-link">
								<div className="project-link-icon">
									<FontAwesomeIcon icon={faLink} />
								</div>
								<div className="project-link-text">
									{linkText}
								</div>
							</div>
						</div>
					</Link>
				)}
			</div>
		</React.Fragment>
	);
};

export default Project;
