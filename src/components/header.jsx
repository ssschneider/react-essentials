import "../styles/header.css";
import headerImg from "../assets/react-core-concepts.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];
const sortReactDescription = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

export function Header() {
	const reactDescription = reactDescriptions[sortReactDescription(2)];
	return (
		<header>
			<img src={headerImg} alt="Stylized atom" />
			<h1>React Essentials</h1>
			<p>
				{reactDescription} React concepts you will need for almost any app you
				are going to build!
			</p>
		</header>
	);
};
