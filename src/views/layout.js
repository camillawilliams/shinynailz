import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
// import MyNavbar from "../js/components/mynavbar";



//create your first component
const Layout = () => {
	const { store, actions } = useContext(Context);
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const [contentHeight, setContentHeight] = useState("50vh");
	let navbarHeight, footerHeight;

	// useEffect(() => {
	// 	navbarHeight = document.querySelector(".mynavbar").clientHeight;
	// 	footerHeight = document.querySelector("footer").clientHeight;
	// 	let aux = navbarHeight + footerHeight;
	// 	console.log(navbarHeight, footerHeight);
	// 	setContentHeight("calc(100vh - " + aux + "px)");
	// }, []);

	return (
		// <div className="d-flex flex-column h-100">
		// 	{store.alert.visible && (
		// 		<Alert className="text-center" variant={store.alert.type} onClose={actions.hideAlert} dismissible>
		// 			{store.alert.message}
		// 		</Alert>
		// 	)}
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					{/* <MyNavbar /> */}
					<div
						style={{
							height: contentHeight
						}}>
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route exact path="/contact">
								<Contact />
							</Route>
							<Route exact path="/singlepuzzle/:id">
								<Singlepuzzle />
							</Route>

							<Route exact path="/upload">
								<Upload />
							</Route>

							<Route exact path="/signin">
								<SignIn />
							</Route>
							<Route exact path="/registerpage">
								<RegisterPage />
							</Route>

							<Route exact path="/report">
								<Report />
							</Route>
							<Route exact path="/track">
								<Track />
							</Route>
							<Route exact path="/swap">
								<Swap />
							</Route>
							<Route exact path="/subscribe">
								<Subscribe />
							</Route>
							<Route exact path="/swapcart">
								<Swapcart />
							</Route>
							<Route exact path="/profile">
								<Profile />
							</Route>
							<Route exact path="/pending">
								<Pending />
							</Route>
							<Route>
								<h1>Not found!</h1>
							</Route>
						</Switch>
					</div>

					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
