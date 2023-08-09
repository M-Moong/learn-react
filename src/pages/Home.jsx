import Logo from "../components/Logo";


function Home() {
	return (
		<div>
			<h2>홈 페이지</h2>

			<Logo />
			<Logo color="blue" size="12" />
			<Logo color="sky" />
			<Logo color="rose" />
		</div>
	);
}

export default Home;