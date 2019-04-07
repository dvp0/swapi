// js modules
import "babel-polyfill";
import "utils/favicon";
import * as React from "react";
import { render } from "react-dom";
import { cssRule } from "typestyle";
import { Router } from "@reach/router";

// utils
import { colors } from "utils/values";

// components
import { Film } from "components/film";
import { Home } from "components/home";

// Only generic css needed
cssRule("html, body", {
	background: colors.charcoal,
	margin: "0px",
	color: colors.white,
});

// Using classic React.Component as hooks doesn't have proper
// setup for error boundry yet
class Wrapper extends React.Component {
	componentDidCatchError(e) {
		console.error(e);
	}

	render () {
		return (
			<Router>
				<Home path="/" />
				<Film path="films/:filmId" />
			</Router>
		);
	}
}

render(
	<Wrapper/>,
	document.getElementById("root")
);
