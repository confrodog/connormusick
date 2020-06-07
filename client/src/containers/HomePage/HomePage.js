import React, { Component } from "react";
import "./HomePage.css";

import HomePageContent from "../../components/HomePageContent/HomePageContent";
import HomePageSideBar from "../../components/HomePageSideBar/HomePageSideBar";

class HomePage extends Component {
	render() {
		return (
			<div className="Home-Page">
				<HomePageSideBar />
				<HomePageContent />
			</div>
		);
	}
}

export default HomePage;
