import { CRITTER_TYPE } from "../constants";

export function CritterInfo({ critterData, hemisphere, month, critterType }) {
	const isBugOrFish =
		critterType === CRITTER_TYPE.bugs || critterType === CRITTER_TYPE.fish;
	const isFishOrSea =
		critterType === CRITTER_TYPE.fish || critterType === CRITTER_TYPE.sea;

	return (
		<div className="results">
			<ul className="resultList">
				{critterData.map((critter) => (
					<li className="critterCard" key={critter.number}>
						<h3>{critter.name}</h3>
						<img src={critter.image_url} />
						<h4 className="itemSubheading">time</h4>
						<p>{critter[hemisphere].times_by_month[month]}</p>
						<h4>{isBugOrFish ? "location" : "shadow speed"}</h4>
						<p>{isBugOrFish ? critter.location : critter.shadow_movement}</p>
						<h4>{isFishOrSea ? "shadow size" : "weather"}</h4>
						<p>{isFishOrSea ? critter.shadow_size : critter.weather}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
