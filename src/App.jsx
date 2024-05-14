import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainContainer from "./containers/MainContainer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
	return (
		<>
			<Navbar />
			<Router>
				<MainContainer />
			</Router>
			<Footer />
		</>
	);
}

export default App;
