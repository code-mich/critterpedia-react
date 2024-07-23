import Form from "./Form";

function Landing() {
	return (
		<div>
			<section>
				{/* form description, landing description */}
				<h2>Hoo hoot!</h2>
				<p>
					Blathers can help you find out what creatures you can encounter on
					your island in Animal Crossing: New Horizons! Simply let him know what
					hemisphere your island is on and the month.
				</p>
			</section>
			<Form />
		</div>
	);
}

export default Landing;
