import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { useEffect, useState } from "react";

const RecordRun = () => {
	const [date, setDate] = useState(new Date());
	const [distance, setDistance] = useState("");
	const [time, setTime] = useState("");

	function onChangeDate(chosenDate) {
		setDate(chosenDate);
	}

	function onChangeTime(time) {
		setTime(time);
	}

	return (
		<div>
			<form>
				<Calendar
					onChange={onChangeDate}
					date={date}
				/>
				<TimePicker
					onChange={onChangeTime}
					time={time}
				/>
				<p>
					<label>
						Distance(km):
						<input
							type="number"
							min="0"
							max="30"
							onChange={(e) => setDistance(e.target.value)}></input>
					</label>
				</p>
			</form>
			<p>{date ? `Current selected date: ${date}` : "No date selected"}</p>
			<p>{time ? `Current selected time: ${time}` : "No time selected"}</p>
			<p>
				{distance ? `Current distance: ${distance}km` : "No distance entered"}
			</p>
		</div>
	);
};

export default RecordRun;
