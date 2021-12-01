import useSWR from "swr";

const fetcher = async () => {
	const responce = await fetch("http://localhost:4000/dashboard");
	const data = await responce.json();
	return data;
};

function DashboardSWR() {
	const { data, error } = useSWR("dashboard", fetcher);

	if (error) return "An error was occured!";
	if (!data) return "Loading";

	return (
		<div>
			<h2>Dashboard</h2>
			<h2>Posts - {data.posts}</h2>
			<h2>Likes - {data.likes}</h2>
			<h2>Followers - {data.followers}</h2>
			<h2>Following - {data.following}</h2>
		</div>
	);
}

export default DashboardSWR;
