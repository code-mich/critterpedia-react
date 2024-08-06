import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Form";
import CritterTabs from "./CritterTabs";
import CritterInfo from "./CritterInfo";
import blathersIcon from "../assets/blathers_icon.png";

function Landing() {
	const [islandInfo, setIslandInfo] = useState({
		hemisphere: "",
		month: 1,
	});
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [critter, setCritter] = useState("bugs");
	const [changeCritter, setChangeCritter] = useState(false);
	const [apiData, setApiData] = useState({});

	const handleIslandInfo = (hemisphere, month) => {
		// Reset formSubmitted state
		setFormSubmitted(false);
		setIslandInfo({
			month: month,
			hemisphere: hemisphere,
		});
		setFormSubmitted(true);
		console.log(islandInfo, "islandInfo");
	};

	// Update state if clicked critter !== new critter
	const handleChangeCritter = (e) => {
		// Reset changeCritter value
		setChangeCritter(false);
		// If user clicks icon, get value from button (parent)
		e.target.nodeName === "IMG"
			? checkNewCritter(e.target.parentElement.value)
			: checkNewCritter(e.target.value);
	};

	const checkNewCritter = (newCritter) => {
		if (newCritter !== critter) {
			setCritter(newCritter);
			// Results in new API call
			setChangeCritter(true);
		}
	};

	useEffect(() => {
		// Get API data on form submission or critter change
		if (formSubmitted || changeCritter) {
			axios({
				url: `https://api.nookipedia.com/nh/${critter}`,
				params: {
					month: islandInfo.month,
				},
				headers: {
					"X-API-KEY": process.env.REACT_APP_API_KEY,
					"Accept-Version": "1.7.0",
				},
			}).then((data) => {
				console.log(data);
				setApiData(data);
			});
		}
	}, [critter, islandInfo.month, formSubmitted, changeCritter]);

	return (
		<div className="wrapper">
			<div className="landingContent">
				<div className="blathersContainer">
					<img src={blathersIcon} alt="Blathers, the museum curator" />
				</div>

				<section className="greetingFormContainer">
					<h2 className="greetingHeading">Hoo hoot!</h2>
					<p className="greetingCopy">
						Blathers can help you find out what creatures you can encounter on
						your island in Animal Crossing: New Horizons! Simply let him know
						what hemisphere your island is on and the month.
					</p>
					<hr />
					<Form handleIslandInfo={handleIslandInfo} />
				</section>
			</div>
			{/* TODO: delete */}
			{islandInfo.hemisphere ? (
				<>
					<p>hemisphere: {islandInfo.hemisphere}</p>
					<p>month: {islandInfo.month}</p>
				</>
			) : null}
			{/* conditionally show critter tabs and critters if data returned */}
			{Object.keys(apiData).length ? (
				<>
					<CritterTabs changeCritter={handleChangeCritter} />
					<CritterInfo />
				</>
			) : null}
		</div>
	);
}

export default Landing;
