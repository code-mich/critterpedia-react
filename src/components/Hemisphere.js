function Hemisphere() {
	return (
		<div>
			<h3>Hemisphere</h3>
			<fieldset>
				<div className="hemisphereContainer">
					<legend className="sr-only">Select your island's hemisphere</legend>
					<div className="northernContainer">
						<input type="radio" name="hemisphere" id="north" value="north" />
						<label for="north" name="hemisphere">
							Northern
						</label>
					</div>
					<div className="southernContainer">
						<input type="radio" name="hemisphere" id="south" value="south" />
						<label for="south" name="hemisphere">
							Southern
						</label>
					</div>
				</div>
			</fieldset>
		</div>
	);
}

export default Hemisphere;
