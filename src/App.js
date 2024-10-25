import { Routes, Route } from "react-router-dom";
import "./App.scss";

import { Header } from "./components/Header";
import { Landing } from "./components/Landing";

function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Landing />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
