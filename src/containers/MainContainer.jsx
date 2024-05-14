import React from "react";
import RecordRun from "../components/RecordRun";
import { Route, Routes } from "react-router-dom";
import DisplayRuns from "../components/DisplayRuns";

const MainContainer = () => {
	return (
		<div className="mainContainer">
			<Routes>
				<Route
					path="/"
					element={<RecordRun />}
				/>
				<Route
					path="/display"
					element={<DisplayRuns />}
				/>
			</Routes>
		</div>
	);
};

export default MainContainer;
