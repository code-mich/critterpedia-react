import { useState } from "react";
import Hemisphere from "./Hemisphere";
import Month from "./Month";

function Form({ handleIslandInfo }) {
	const [selectedHemisphere, setSelectedHemisphere] = useState("");
	const [selectedMonth, setSelectedMonth] = useState(1);

	const handleFormSubmit = (e) => {
		e.preventDefault();
		// console.log("default prevented");
		// console.log("e", e);
		// console.log(
		// 	"selectedHemisphere ",
		// 	selectedHemisphere,
		// 	"selected month ",
		// 	selectedMonth
		// );
		handleIslandInfo(selectedHemisphere, selectedMonth);
	};
	const handleMonth = (e) => {
		setSelectedMonth(e.target.value);
	};
	const handleHemisphere = (e) => {
		setSelectedHemisphere(e.target.value);
	};
	return (
		<section className="formSection">
			<form onSubmit={handleFormSubmit}>
				<Hemisphere onChange={handleHemisphere} />
				<Month onChange={handleMonth} />
				{/* TODO: delete */}
				{selectedHemisphere ? selectedHemisphere : null}
				{/* TODO: delete */}
				{selectedMonth > 0 ? selectedMonth : null}
				<button type="submit">Local critters in your area</button>
			</form>
		</section>
	);
}

export default Form;
