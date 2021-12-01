import Head from "next/head";
import Footer from "../components/Footer";
function About() {
	return (
		<>
			<Head>
				<title>About Binary | Marvels</title>
				<meta name="description" content="Free learning on web developmet" />
			</Head>
			<h1 className="content">This is about!</h1>
		</>
	);
}
export default About;

About.getLayout = function PageLayout(page) {
	return (
		<>
			{page}
			<Footer />
		</>
	);
};
