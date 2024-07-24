import Hemisphere from "./Hemisphere";
import Month from "./Month";

function Form() {
	return (
		<section>
			<form>
				<Hemisphere />
				<Month />
				{/* submit button */}
				<button type="submit">Local critters in your area</button>
			</form>
		</section>
	);
}

export default Form;
