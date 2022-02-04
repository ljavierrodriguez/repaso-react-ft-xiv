import React from "react";
import PropTypes from "prop-types";

/* Sintaxis Operador Ternario (?) */
/*  condition ? true : false */

/* Sintaxis Operador And (&&) */
/* condition && (true) */

const Navbar = ({ menu, logo }) => {
	let isAuthenticated = true;

	if (isAuthenticated !== true)
		return (
			<>
				<h1>Por favor iniciar sesion</h1>
			</>
		);
	else
		return (
			<>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<div className="container">
						<a className="navbar-brand" href="#!">
							{logo}
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent">
							<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
								{/* elem = { label, url } */}
								{menu &&
									menu.length > 0 &&
									menu.map(
										(
											{ label, url, isActive, isVisible },
											index
										) => {
											return isVisible ? (
												<li
													className="nav-item"
													key={index}>
													<a
														className={
															"nav-link " +
															(isActive !== true
																? "disabled"
																: null)
														}
														aria-current="page"
														href={url}>
														{label}
													</a>
												</li>
											) : null;
										}
									)}
								{/* <li className="nav-item">
								<a
									className="nav-link active"
									aria-current="page"
									href="#!">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#!">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#!">
									Contact
								</a>
							</li> */}
							</ul>
						</div>
					</div>
				</nav>
			</>
		);
};

Navbar.propTypes = {
	menu: PropTypes.array.isRequired,
	logo: PropTypes.string.isRequired,
};

export default Navbar;
