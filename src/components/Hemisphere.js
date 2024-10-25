export function Hemisphere({ onChange }) {
	return (
		<div>
			<h3>Hemisphere</h3>
			<fieldset>
				<div className="hemisphereContainer">
					<legend className="sr-only">Select your island's hemisphere</legend>
					<div className="northernContainer">
						<label>
							<input
								type="radio"
								name="hemisphere"
								id="north"
								value="north"
								onChange={onChange}
							/>
							Northern
						</label>
					</div>
					<div className="southernContainer">
						<label>
							<input
								type="radio"
								name="hemisphere"
								id="south"
								value="south"
								onChange={onChange}
							/>
							Southern
						</label>
					</div>
				</div>
			</fieldset>
		</div>
	);
}
