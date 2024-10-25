import { Link } from "react-router-dom";
import leafIcon from "../assets/Nook_Inc.png";

export function Header() {
	const handleScroll = (e) => {
		window.scrollTo(0, 0);
	};
	return (
		<header>
			<nav>
				<Link to="/" onClick={handleScroll}>
					<h1>
						Critter<span>pedia</span>{" "}
						<span className="leafIcon">
							<img src={leafIcon} alt="Critterpedia icon" />
						</span>
					</h1>
				</Link>
			</nav>
		</header>
	);
}
