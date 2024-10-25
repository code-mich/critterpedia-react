import { useState } from "react";
import { Hemisphere } from "./Hemisphere";
import { Month } from "./Month";

export function Form({ handleIslandInfo }) {
	const [selectedHemisphere, setSelectedHemisphere] = useState("");
	const [selectedMonth, setSelectedMonth] = useState(1);

	const handleFormSubmit = (e) => {
		e.preventDefault();
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
				<button type="submit">Local critters in your area</button>
			</form>
		</section>
	);
}
