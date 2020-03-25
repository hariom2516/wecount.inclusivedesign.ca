// TODO:
// This is where I plan to put the global variables for the api endpoints. They are hardcoded for now.
"use strict"

export default {
	appTitle: "We Count",
	appTitleShort: "WC",
	appDescription: "We Count Project",
	appThemeColor: "#fffffff",
	appBgColor: "#00172c ",
	appIcon: "assets/app-icon.png",
	wpDomain: "https://wecount.inclusivedesign.ca",
	loadDbName: "starter_wp",
	apiBase: "/wp-json/wp/v2/",
	contactEmail: "wecount@inclusivedesign.ca",
	socialMedia: [],
	funders: [],
	numOfRecsPerPage: 10,
	dev: (process.env.NODE_ENV !== "production")
}
