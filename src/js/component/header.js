import React from "react";
import PropTypes from "prop-types";

/* { info: { bgUrl, imgUrl, name, title }} */ // pasar esto como parametro si queremos destructurar la informacion
const Header = (props) => {
	/* "url('https://source.unsplash.com/wfh8dDlNFOk/1600x900')" */
	return (
		<>
			<header
				className="py-5 bg-image-full"
				style={{
					/* backgroundImage: `url(${props.info.bgUrl})`, */
					backgroundImage: "url(" + props.info.bgUrl + ")",
				}}>
				<div className="text-center my-5">
					<img
						className="img-fluid rounded-circle mb-4"
						src={props.info.imgUrl}
						alt="..."
					/>
					<h1 className="text-white fs-3 fw-bolder">
						{props.info.name}
					</h1>
					<p className="text-white-50 mb-0">{props.info.title}</p>
				</div>
			</header>
		</>
	);
};

Header.propTypes = {
	info: PropTypes.object,
};

export default Header;
