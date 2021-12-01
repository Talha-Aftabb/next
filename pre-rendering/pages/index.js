import Link from "next/link";
function Home() {
	return (
		<>
			<h1>Next js Pre-rendering</h1>
			<Link href="/users">
				<a>Users</a>
			</Link>
			<br />
			<Link href="/posts">
				<a>Posts</a>
			</Link>
		</>
	);
}
export default Home;
