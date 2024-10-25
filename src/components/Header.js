import { Link } from "react-router-dom";

export function Header() {
	return (
		<header>
			<nav>
				<Link to="/">
					<h1>Critterpedia</h1>
				</Link>
			</nav>
		</header>
	);
}
