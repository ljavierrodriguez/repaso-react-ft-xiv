import React, { useState } from "react";
import Navbar from "./shared/navbar.jsx";
import { Footer } from "./shared/footer.jsx";
import Header from "./header.js";

//create your first component
const Home = () => {
	let menu = [
		{ label: "Home", url: "/#", isActive: true, isVisible: true }, // 0
		{ label: "About", url: "/#", isActive: true, isVisible: true }, // 1
		{ label: "Contact", url: "/#", isActive: true, isVisible: true }, // 2
		{ label: "Services", url: "/#", isActive: false, isVisible: true }, // 2
	];

	let info = {
		bgUrl: "https://source.unsplash.com/8K57PsCnP0w/1600x900",
		imgUrl: "https://source.unsplash.com/BOBMNKVry0Q/150x150",
		name: "Katherine Kraushaar",
		title: "FullStack Developer Junior",
	};

	const [show, setShow] = useState(false);

	const [name, setName] = useState("Luis Javier");

	const getName = (name) => {
		switch (name) {
			case "Luis":
				setName(name);
				break;

			default:
				setName("Anonimous");
				break;
		}
	};

	return (
		<>
			{/* Navbar */}
			{/* props = { menu: [], logo: '4Geeks Academy' }  */}
			<Navbar menu={menu} logo={"4Geeks Academy"} />{" "}
			{/* <!-- Header - set the background image for the header in the line below--> */}
			<Header info={info} />
			{/* <!-- Content section--> */}
			<section className="py-5">
				<div className="container my-5">
					<div className="row justify-content-center">
						<div className="col-lg-6">
							<h2>Full Width Backgrounds</h2>
							<p className="lead">
								A single, lightweight helper class allows you to
								add engaging, full width background images to
								sections of your page.
							</p>
							<p className="mb-0">
								The universe is almost 14 billion years old,
								and, wow! Life had no problem starting here on
								Earth! I think it would be inexcusably
								egocentric of us to suggest that we're alone in
								the universe.
							</p>
						</div>
					</div>
				</div>
			</section>
			{/*  <!-- Image element - set the background image for the header in the line below--> */}
			<div
				className="py-5 bg-image-full"
				style={{
					backgroundImage: show
						? "url('https://source.unsplash.com/4ulffa6qoKA/1200x800')"
						: "url('https://source.unsplash.com/wKZWT6rHjYQ/1200x800')",
				}}>
				{/* <!-- Put anything you want here! The spacer below with inline CSS is just for demo purposes!--> */}
				<div style={{ height: "20rem" }}></div>
				<button
					className="btn btn-info"
					onClick={() => {
						getName("Luis");
					}}>
					Cambiar Fondo
				</button>

				<button
					className="btn btn-info"
					onClick={() => {
						getName("Pedro");
					}}>
					Cambiar Fondo
				</button>
			</div>
			{/* <!-- Content section--> */}
			<section className="py-5">
				<div className="container my-5">
					<div className="row justify-content-center">
						<div className="col-lg-6">
							<h2>Engaging Background Images</h2>
							<p className="lead">
								The background images used in this template are
								sourced from Unsplash and are open source and
								free to use.
							</p>
							<p className="mb-0">
								I can't tell you how many people say they were
								turned off from science because of a science
								teacher that completely sucked out all the
								inspiration and enthusiasm they had for the
								course.
							</p>
						</div>
					</div>
				</div>
			</section>
			{/*  <!-- Footer--> */}
			<Footer />
			{/* <!-- Bootstrap core JS--> */}
		</>
	);
};

export default Home;
