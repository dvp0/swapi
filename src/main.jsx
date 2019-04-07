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

// document.querySelector("link[rel*="icon"]").href = `/favicon-${Math.floor(Math.random() * 9)}.ico`;

render(
	<Router>
		<Home path="/" />
		<Film path="films/:filmId" />
	</Router>,
	document.getElementById("root")
);
