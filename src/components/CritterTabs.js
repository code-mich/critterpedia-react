import fishIcon from "../assets/fish-transparent.png";
import bugIcon from "../assets/bug-transparent.png";
import seaIcon from "../assets/sea-transparent.png";

function CritterTabs({ changeCritter }) {
	return (
		<div className="critterContent">
			<ul className="tabs">
				<li>
					<button type="button" value="bugs" onClick={changeCritter}>
						<span className="sr-only">View bugs</span>
						<img src={bugIcon} alt="Bug icon" />
					</button>
				</li>
				<li>
					<button type="button" value="fish" onClick={changeCritter}>
						<span className="sr-only">View fish</span>
						<img src={fishIcon} alt="Fish icon" />
					</button>
				</li>
				<li>
					<button type="button" value="sea" onClick={changeCritter}>
						<span className="sr-only">View sea creatures</span>
						<img src={seaIcon} alt="Sea creature icon" />
					</button>
				</li>
			</ul>
		</div>
	);
}

export default CritterTabs;
