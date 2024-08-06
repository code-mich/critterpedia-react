function Month({ onChange }) {
	return (
		<div>
			<h3>Month</h3>
			<label htmlFor="month" className="sr-only">
				Choose the month
			</label>
			<select name="month" id="month" required onChange={onChange}>
				{/* <option value="0" disabled>
					The month is...
				</option> */}
				<option value="1" defaultValue>
					January
				</option>
				<option value="2">February</option>
				<option value="3">March</option>
				<option value="4">April</option>
				<option value="5">May</option>
				<option value="6">June</option>
				<option value="7">July</option>
				<option value="8">August</option>
				<option value="9">September</option>
				<option value="10">October</option>
				<option value="11">November</option>
				<option value="12">December</option>
			</select>
		</div>
	);
}

export default Month;
