import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./containers/Header/Header";

function App() {
	return (
		<BrowserRouter>
			<Fragment>
				<Header />
			</Fragment>
		</BrowserRouter>
	);
}

export default App;
