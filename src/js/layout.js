import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Navbar } from "./component/navbar";
import { Home } from "./views/home";
import { AddContact } from "./views/addContact";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";


const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";


	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/add" element={<AddContact />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route 
							path="*" 
							element={
								<React.Fragment>
									<div style={{textAlign: 'center' }}>
										<h1>Not found!</h1>
										<Link to="/">
											<button className="btn btn-primary my-4">Back home</button>
										</Link>
									</div>
								</React.Fragment>
							}
						/>
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};


export default injectContext(Layout);