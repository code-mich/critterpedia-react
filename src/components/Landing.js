import { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "./Form";
import { CritterTabs } from "./CritterTabs";
import { CritterInfo } from "./CritterInfo";
import blathersIcon from "../assets/blathers_icon.png";

export function Landing() {
	const [islandInfo, setIslandInfo] = useState({
		hemisphere: "",
		month: 1,
	});
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [critter, setCritter] = useState("bugs");
	const [changeCritter, setChangeCritter] = useState(false);
	const [apiData, setApiData] = useState({});

	const handleIslandInfo = (hemisphere, month) => {
		// Update island info if hemisphere or month has changed
		if (hemisphere !== islandInfo.hemisphere || month !== islandInfo.month) {
			setIslandInfo({
				month: month,
				hemisphere: hemisphere,
			});
			setFormSubmitted(true);
		}
	};

	// Update state if clicked critter !== new critter
	const handleChangeCritter = (e) => {
		// If user clicks icon instead of button, get value from button (parent)
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
				setApiData(data.data[islandInfo.hemisphere]);
				// Reset form and critter states for subsequent API calls
				setChangeCritter(false);
				setFormSubmitted(false);
			});
		}
	}, [
		critter,
		islandInfo.month,
		islandInfo.hemisphere,
		formSubmitted,
		changeCritter,
	]);

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
						what hemisphere your island is on and the month. Data is provided by
						the <a href="https://api.nookipedia.com/">Nookipedia API.</a>
					</p>
					<hr />
					<Form handleIslandInfo={handleIslandInfo} />
				</section>
			</div>
			{/* Conditionally show critter tabs and critters if data returned */}
			{Object.keys(apiData).length > 0 && (
				<>
					<CritterTabs changeCritter={handleChangeCritter} />
					<CritterInfo
						critterData={apiData}
						hemisphere={islandInfo.hemisphere}
						month={islandInfo.month}
						critterType={critter}
					/>
				</>
			)}
		</div>
	);
}
