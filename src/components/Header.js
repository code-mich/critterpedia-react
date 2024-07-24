import { Link } from "react-router-dom";

function Header() {
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

export default Header;
