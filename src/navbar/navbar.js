import "./navbar.css";
import React, { useState, useEffect } from "react";
function Navbar(props) {
	const [Navbar, setNavbar] = useState(); //The evolution chain for the pokemon.
	return (
		<nav className="navbar sticky-top navbar-expand-lg">
			<div className="container-fluid">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav mx-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link" href="/">
								About Me
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#skills">
								Skills
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#education">
								Education
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#projects">
								Projects
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#experience">
								Experience
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#contact">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
export default Navbar;
