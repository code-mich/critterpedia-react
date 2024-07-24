import Form from "./Form";
import blathersIcon from "../assets/blathers_icon.png";

function Landing() {
	return (
		<div className="wrapper">
			<div className="landingContent">
				<div className="blathersContainer">
					<img src={blathersIcon} alt="Blathers, the museum curator" />
				</div>

				<section className="greetingFormContainer">
					{/* form description, landing description */}
					<h2 className="greetingHeading">Hoo hoot!</h2>
					<p className="greetingCopy">
						Blathers can help you find out what creatures you can encounter on
						your island in Animal Crossing: New Horizons! Simply let him know
						what hemisphere your island is on and the month.
					</p>
					<hr />
					<Form />
				</section>
			</div>
		</div>
	);
}

export default Landing;
