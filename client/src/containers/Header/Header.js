import React from "react";
import "./Header.css";

const Header = () => {
	return (
		<header>
			<nav class="navbar navbar-expand-md navbar-light header-bg">
				<ul class="navbar-nav">
					<li class="nav-text">
						<h3>Connor Musick</h3>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/">
							Home
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/projects">
							Project List
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
