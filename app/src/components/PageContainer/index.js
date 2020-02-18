import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../NavBar";
import Home from "../../pages/Home";
import Cart from "../../pages/Cart";
import ErrorPage from "../../pages/ErrorPage";
import Product from "../../pages/Product";

function PageContainer() {

	return (
		<div>
			<Router>
				<NavBar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/cart" component={Cart} />
					<Route exact path="/product/:id" component={Product} />
					<Route component={ErrorPage} />
				</Switch>
			</Router>
		</div>
	);
}

export default PageContainer;
